import { useEffect, useMemo, useRef, useState } from "react"
import { fetchAPI } from "../../lib/api"
import StrapiMedia from "../../lib/components/StrapiMedia"
import styles from '../../styles/showcase.module.css'

export async function getStaticProps(context, hideIfHidden = true) {
    const posts = (await fetchAPI('/posts', {
        pagination: { pageSize: 10000000, page: 1, },
        populate: 'deep,2'
    })).data?.map(data => data.attributes).filter(data => !data.hidden).filter(data => data.showcase_visible != false)

    const showcasePosts = (await fetchAPI('/showcase-posts', {
        pagination: { pageSize: 10000000, page: 1, },
        populate: 'deep,2',
    })).data?.map(data => data.attributes)

    const settings = (await fetchAPI('/showcase-control', {
        pagination: { pageSize: 10000000, page: 1, },
        populate: 'deep,2',
    })).data?.attributes

    posts.push(...showcasePosts)

    if(settings.randomize) {
        shuffle(posts)
    }

    return {
        props: { settings, posts },
        revalidate: 30,
    }
}

async function delay(ms) {
    return new Promise((resolve, _) => setTimeout(() => resolve(), ms))
}

export default function PageRenderer({ settings, posts }) {

    const [index, setIndex] = useState(0)
    const [showFrame, setShowFrame] = useState(false)
    const showFrameRef = useRef(showFrame)
    showFrameRef.current = showFrame

    const indexRef = useRef(index)
    const loopStarted = useRef(false)

    const [startTime, setStartTime] = useState(-1)
    const [endTime, setEndTime] = useState(-1)

    const sortedPosts = useMemo(() => {
        return posts
    }, [posts])

    async function startLoop() {
        while (true) {
            if (!showFrameRef.current && settings.insert_frame_between_posts && indexRef.current % settings.posts_between_inserted_frame == 0) {
                // Show frame
                setShowFrame(true)

                setStartTime(Date.now())
                setEndTime(Date.now() + settings.frame_delay * 1000)

                await delay(settings.frame_delay * 1000)
                setShowFrame(false)
            } else {
                // Show post
                const post = posts[indexRef.current]
                const delayTime = post.showcase_delay || settings.post_delay

                setStartTime(Date.now())
                setEndTime(Date.now() + delayTime * 1000)

                await delay(delayTime * 1000)

                const newIndex = (indexRef.current + 1) % sortedPosts.length
                setIndex(newIndex)
                indexRef.current = newIndex
            }
        }
    }

    useEffect(() => {
        if (!loopStarted.current) {
            if (!settings.enabled) {
                setTimeout(() => {
                    window.location.href = settings.redirect_to
                }, 1000)
                return
            }

            loopStarted.current = true
            startLoop()
        }
    }, [])

    if (!settings.enabled) return <h1>Showcase está desactivado</h1>

    const post = posts[index]
    const title = post.title || post.Title
    const pretitle = post.Pretitle || post.pretitle
    const description = post.Subtitle || post.description
    const media = post.Video_or_Image || post.media

    if (showFrame) {
        return <div className={styles.showcase}>
            <iframe className={styles.frame} src={settings.frame_url}></iframe>
            <ProgrssBar duration={endTime - startTime} key={startTime} />
        </div>
    }

    return <div className={styles.showcase}>
        {!post.frame_uri ? <div className={styles.media}>
            <StrapiMedia src={media} muted autoPlay loop imageStyle={{
                objectFit: 'cover'
            }} />
        </div> :
            <iframe className={styles.frame} src={post.frame_uri}></iframe>
        }
        <div className={styles.info}>
            <p>{pretitle}</p>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
        <ProgrssBar duration={endTime - startTime} key={startTime + ' ' + index} />
    </div>
}


function ProgrssBar({ duration }) {
    const [started, setStarted] = useState(false)

    useEffect(() => {
        if (!started) {
            setTimeout(() => {
                setStarted(true)
            }, 10)
        }
    }, [])

    return <div className={styles.progress} style={{ width: started ? '100vw' : '0vw', transition: duration + 'ms' }}></div>
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
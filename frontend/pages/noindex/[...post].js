import { getStaticPaths as _getStaticPaths, getStaticProps as _getStaticProps } from '../posts/[...post]';
import PageRenderer from '../posts/[...post]';

export function getStaticPaths(...args) {
    return _getStaticPaths(...args)
}

export function getStaticProps(context) {
    return _getStaticProps(context, false)
}

export default PageRenderer

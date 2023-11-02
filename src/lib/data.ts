import type { AstroGlobal } from 'astro';
import PocketBase, { type AdminAuthResponse, type RecordModel } from 'pocketbase';

export const pb = new PocketBase('http://127.0.0.1:8090');

let authData: AdminAuthResponse | null = null

async function auth() {
    if (authData) return
    authData = await pb.admins.authWithPassword('admin@henryford.edu.ar', 'WEBADMIN123');
}

export interface NavigationLink extends RecordModel {
    title: string
    link: string
}

export interface MenuItem extends RecordModel {
    link: string
    links_list: string[]
    title: string
    expand: {
        links_list: NavigationLink[]
    }
}

export interface Page extends RecordModel {
    title: string
    description: string
    read_more_url: string
    expand: {
        actions: ButtonAction[]
    }
}

export interface ButtonAction extends RecordModel {
    title: string
    link: string
    button_style: any
}

export async function navigationMenu() {
    await auth()
    const resultList = await pb.collection<MenuItem>('navigation_menu').getFullList({
        expand: 'links_list'
    })
    return resultList
}
export async function page(url: string) {
    if(url.endsWith('/')) url = url.slice(0, -1)

    const safeURL = new URL(url, 'http://localhost')

    await auth()

    const {items: [page]} = await pb.collection<Page>('page').getList(1,1, {
        filter: `url = ${JSON.stringify(safeURL.pathname)}`,
        expand: 'actions'
    })

    if(!page) return null

    return page
}

export function currentPage(astro: AstroGlobal) {
    return page(astro.url.pathname)
}
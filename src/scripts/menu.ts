const body = document.querySelector('body') as HTMLBodyElement
const header = document.getElementById('header') as HTMLElement
const openMenu = document.getElementById('openMenu') as HTMLElement
const menu = document.getElementById('menu') as HTMLElement

//icons
const openMenuImg = openMenu.children[0] as HTMLImageElement
const platzi = document.getElementById('platzi') as HTMLElement
const linkedin = document.getElementById('linkedin') as HTMLElement

let statusMenu = false

const viewMenu = () => {

    body.classList.toggle('overflow-hidden')

    const elementStyles: Map<Element, string[]> = new Map()

    elementStyles.set(header, ['overflow-y-auto'])
    elementStyles.set(menu, ['py-5', 'closeMenu', 'openMenu'])
    elementStyles.set(openMenuImg.children[0], ['transform', 'rotate-45', 'translate-x-[6px]', 'translate-y-[0px]'])
    elementStyles.set(openMenuImg.children[1], ['opacity-0'])
    elementStyles.set(openMenuImg.children[2], ['transform', '-rotate-45', 'translate-x-[-8px]', 'translate-y-[6px]'])


    for (const [element, styles] of elementStyles) {
        for (const style of styles) {
            element.classList.toggle(style)
        }
    }
}

openMenu.addEventListener('click', () => {
    viewMenu()
    !statusMenu ? statusMenu = true : statusMenu = false
})

const mediaQueryList: MediaQueryList = window.matchMedia("(min-width: 600px)");

function handleScreenSizeChange(e: MediaQueryListEvent): void {
    if (e.matches && statusMenu) {
        viewMenu();
        statusMenu = false;
    }
}

mediaQueryList.addEventListener("change", handleScreenSizeChange);
handleScreenSizeChange({ matches: mediaQueryList.matches } as MediaQueryListEvent);



import {writable} from 'svelte/store';

function createshowCornerMenu() {
    const {subscribe, set, update} = writable(false);
    return {
        subscribe,
        toggle: () => update((show) => !show),
        close: () => set(false),
        open: () => set(true),
    }
}


export const showCornerMenu = createshowCornerMenu();
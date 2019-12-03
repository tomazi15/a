export const getLocalStorageItem = (item) => {
    return JSON.parse(localStorage.getItem(item)) || [];
}

export const setLocalStorageItem = (item) => {
    var tasks = JSON.parse(localStorage.getItem('task')) || [];
    tasks.push(item)
    localStorage.setItem('task', JSON.stringify(tasks));
}
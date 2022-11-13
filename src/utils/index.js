export const appToast = {
    /**
     * 
     * @param {boolean | {show: boolean, position:"top-right"|"top-center"|"top-left"|"bottom-right"|"bottom-left"|"bottom-center", message?: string}} value 
     */
    showToast(value = false) {
        document.dispatchEvent(new CustomEvent("FETCHING", { detail: value }));
    }
}
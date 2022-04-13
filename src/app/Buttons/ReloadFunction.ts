export class Reload {
    constructor() { }

    static DoReload() {
        //#region Edit Option off(Reload the screen)
        var editoff = document.getElementById("EditableOff")
        editoff?.addEventListener('click', event => {
            console.log("Edit is off")
            window.location.reload(); // It is used to Reload the screen or the scene(Very Important)
        })
        //#endregion
    }
}
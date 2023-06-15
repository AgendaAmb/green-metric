export function Uploader() {
    // ----------------

    const open = async (optionsMaybe) => {
        return "Hello";
    };

    // ----------------
    // PRIVATE METHODS
    // ----------------

    /**
     * Required when the 'uploader.open()' method is called from within '<head>'.
     */
    const getBody = async () => {
        return await new Promise((resolve) => {
            console.log("Resolve");
        });
    };

    // If this isn't a valid upload instance, then the user will experience errors when attempting to use it as one, but
    // they'll also be aware there's a problem as we'll render one on screen.
    const upload = "upload";

    return {
        upload,
        open,
    };
}

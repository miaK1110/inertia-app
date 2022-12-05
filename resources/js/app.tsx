import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

InertiaProgress.init({
    color: "#ED8936",
    showSpinner: true,
});

createInertiaApp({
    title: (title) => `${title} | inertia.app`,
    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.tsx`,
            import.meta.glob("./pages/**/*.tsx")
        ),
    setup({ App, props }) {
        createRoot(document.getElementById("app")!).render(<App {...props} />);
    },
});

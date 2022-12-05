import { Head } from "@inertiajs/inertia-react";

type Props = {
    name: string;
};
export default function index(props: Props) {
    return (
        <>
            <Head title="index" />
            <h2>Hello I'm {props.name} &#128518;</h2>
        </>
    );
}

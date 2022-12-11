import { Head } from "@inertiajs/inertia-react";
import Layout from "../commons/layout";

type Props = {
  name: string;
};
export default function page1(props: Props) {
  return (
    <>
      <Head title="page1" />
      <Layout>
        <h2>Hello I'm {props.name} &#128518;??/</h2>
      </Layout>
    </>
  );
}

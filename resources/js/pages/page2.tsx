import { Head } from "@inertiajs/inertia-react";
import Layout from "../commons/layout";

type Props = {
  name: string;
};
export default function page2(props: Props) {
  return (
    <>
      <Head title="page2" />
      <Layout>
        <h2>Page2 &#128518;</h2>
      </Layout>
    </>
  );
}

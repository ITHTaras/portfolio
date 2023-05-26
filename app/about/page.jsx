import Link from "next/link";

export const metadata = {
  title: "About me",
};

function Page() {
  return (
    <>
      <h1>About me</h1>
      <Link href="/">Back</Link>
    </>
  );
}

export default Page;

import Script from "next/script";

export default function RegisterForm() {
  return (
    <>
      <iframe
        data-tally-src="https://tally.so/embed/wkoMdM?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        width="100%"
        height="284"
        title="Contact form"
      ></iframe>

      <Script
        id="tally-js"
        src="https://tally.so/widgets/embed.js"
        onLoad={() => {
          // @ts-expect-error: Tally is a global object provided by the script
          Tally.loadEmbeds();
        }}
      />
    </>
  );
}

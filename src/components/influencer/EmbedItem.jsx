import { InstagramEmbed } from "react-social-media-embed";

export const EmbedItem = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-4 ">
      <InstagramEmbed
        url="https://www.instagram.com/reel/C41SqU8yqW3/?igsh=aXo4dndjenNjeGdu"
        width={328}
      />
      <InstagramEmbed
        url="https://www.instagram.com/reel/C41SqU8yqW3/?igsh=aXo4dndjenNjeGdu"
        width={328}
      />
      <InstagramEmbed
        url="https://www.instagram.com/reel/C41SqU8yqW3/?igsh=aXo4dndjenNjeGdu"
        width={328}
      />
    </div>
  );
};

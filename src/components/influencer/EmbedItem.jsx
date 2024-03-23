import { InstagramEmbed } from "react-social-media-embed";

export const EmbedItem = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 md:grid-cols-2 gap-4">
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

import { InstagramEmbed } from "react-social-media-embed";

export const EmbedItem = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 md:grid-cols-2 gap-4">
      <InstagramEmbed
        url="https://www.instagram.com/reel/CxFoPSuS6-5/"
        width={328}
      />
      <InstagramEmbed
        url="https://www.instagram.com/reel/CwOn9BQAy_U/"
        width={328}
      />
      <InstagramEmbed
        url="https://www.instagram.com/reel/CxCP-aQyBe4/"
        width={328}
      />
      <InstagramEmbed
        url="https://www.instagram.com/reel/C3F0o8uPx3J/"
        width={328}
      />
    </div>
  );
};

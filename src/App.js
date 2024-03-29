import React from "react";

export default function App() {
  // const shareUrl = "https://www.ravi.com";
  // const description = "Check out this amazing content!";
  // const imageUrl = "https://i.imgur.com/e2uqdvt.jpeg";
  const sharedUrl = "https://s5tqkf.csb.app";
  const handleLinkedInShare = () => {
    const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      sharedUrl
    )}`;
    console.log("LinkedIn Share URL:", linkedInShareUrl);
    window.open(linkedInShareUrl, "_blank");
  };

  const websiteUrl = "https://s5tqkf.csb.app/"; // Replace with your actual website URL
  const shareUrl = `https://wa.me/?text=${encodeURIComponent(websiteUrl)}`;
  const handleWhatsAppShare = () => {
    console.log(shareUrl);
    window.open(shareUrl, "_blank");
  };
  return <button onClick={handleLinkedInShare}>Share via WhatsApp</button>;
}

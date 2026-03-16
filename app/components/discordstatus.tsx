"use client";
import { useEffect, useState } from "react";

const DISCORD_ID = process.env.NEXT_PUBLIC_DISCORD_ID;

export default function DiscordStatus() {
  const [status, setStatus] = useState<any>(null);

  useEffect(() => {
    const fetchStatus = () => {
      fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) setStatus(data.data);
        })
        .catch(console.error);
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 10000);
    return () => clearInterval(interval);
  }, []);

  if (!status) return null;

  const spotify = status.spotify;
  const gameActivity = status.activities.find((a: any) => a.type === 0);
  const customStatus = status.activities.find((a: any) => a.type === 4);

  const getGameImage = () => {
    if (!gameActivity?.assets?.large_image) return null;
    if (gameActivity.assets.large_image.startsWith("mp:")) {
      return `https://media.discordapp.net/${gameActivity.assets.large_image.replace("mp:", "")}`;
    }
    return `https://cdn.discordapp.com/app-assets/${gameActivity.application_id}/${gameActivity.assets.large_image}.png`;
  };

  const gameImage = getGameImage();

  return (
    <div className="flex flex-col gap-2 h-full justify-center text-center ">
      <h4 className="font-black uppercase text-[10px] tracking-[0.2em] opacity-60">
        {spotify ? "Now Playing" : gameActivity ? "Playing" : "Status"}
      </h4>

      <div className="flex flex-col items-center gap-2 px-1 ">
        {spotify || gameImage ? (
          <img
            src={spotify ? spotify.album_art_url : gameImage}
            className="w-16 h-16 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] object-cover"
            alt="Activity Art"
          />
        ) : (
          <span className="text-4xl leading-none mb-1">
            {customStatus?.emoji?.name || "🟢"}
          </span>
        )}

        <div className="w-full min-w-0 overflow-hidden text-center">
          <p className="font-black text-sm truncate uppercase tracking-tight">
            {spotify
              ? spotify.song
              : gameActivity?.name || customStatus?.state || "Available"}
          </p>
          <p className="text-[10px] font-bold opacity-70 truncate uppercase">
            {spotify
              ? spotify.artist
              : gameActivity
                ? gameActivity.details
                : "(retrieved from Discord)"}
          </p>
        </div>
      </div>
    </div>
  );
}

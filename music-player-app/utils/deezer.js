export function initDeezer() {
    window.DZ.init({
      appId: "YOUR_DEEZER_APP_ID", // get this from https://developers.deezer.com/myapps
      channelUrl: window.location.origin + "/channel.html", // create this file in public
      player: {
        container: "dz-player", // an HTML div ID for the player
        width: 300,
        height: 80,
        onload: () => {
          console.log("Deezer SDK loaded ✅");
        },
      },
    });
  }
  
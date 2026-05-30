import { FaApple, FaGooglePlay,  } from "react-icons/fa";

const StoreButtons = () => {
  return (
    <div
      className="
      flex
      flex-col
      sm:flex-row
      items-center
      gap-4
      mt-8
      w-full
      sm:w-auto
      "
    >
      {/* APP STORE */}

      <a
        href="#"
        className="
          group

        relative

        flex
        items-center
        gap-4

        h-14
        px-3
        pr-6

        rounded-full

        bg-white
        dark:bg-[#111111]

        border
        border-black/5
        dark:border-white/10

        shadow-[0_10px_35px_rgba(0,0,0,0.08)]
        hover:shadow-[0_16px_45px_rgba(139,0,0,0.15)]

        transition-all
        duration-300

        overflow-hidden
        "
      >
        <FaApple className="text-red-900/90 text-3xl" />

        <div className="text-left">
          <p
            className="
            text-gray-900/40
            text-[11px]
            dark:text-white/50
            leading-none
            tracking-wide
            "
          >
            Download on the
          </p>

          <h3
            className="
            text-black
            dark:text-white
            text-xl
            font-semibold
            leading-none
            mt-1
            "
          >
            App Store
          </h3>
        </div>
      </a>

      {/* GOOGLE PLAY */}

      <a
        href="https://play.google.com/store/apps/details?id=com.whatsapp.w4b&pcampaignid=web_share"
        className="
        group
        w-full
        sm:w-auto

        flex
        items-center
        justify-center
        gap-3

        bg-[#8B0000]
        hover:bg-[#a00000]

        transition-all
        duration-300

        px-5
        py-3

        rounded-2xl

        shadow-[0_15px_40px_rgba(139,0,0,0.25)]
        hover:shadow-[0_20px_55px_rgba(139,0,0,0.35)]

        hover:scale-[1.02]

        border
        border-[#ffffff10]
        "
      >
        <FaGooglePlay className="text-white text-2xl" />

        <div className="text-left">
          <p
            className="
            text-white/70
            text-[11px]
            uppercase
            leading-none
            tracking-wide
            "
          >
            Get it on
          </p>

          <h3
            className="
            text-white
            text-xl
            font-semibold
            leading-none
            mt-1
            "
          >
            Google Play
          </h3>
        </div>
      </a>
    </div>
  );
};

export default StoreButtons;
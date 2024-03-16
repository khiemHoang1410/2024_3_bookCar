

const Footer = () => {
  return (
    <footer className="flex flex-row justify-around gap-11 mt-8">
      <div className="ml-3 max-w-[400px]:">
        <h2 className="font-bold">CONTACT US</h2>

        <p className="font-semibold break-words">
          TEL:0123456678 <br />
          EMAIL: HOAPOLARIS@GMAIL.COM <br />
          ADDRESS:18, NGUYEN VAN A, TAM KY CITY, QUANG NAM
        </p>
      </div>
      <div className="flex flex-col mr-32">
        <h2 className="font-bold">FOLLOW US</h2>
        <div className="flex flex-row gap-3 ">
          <a href="">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/facebook--v1.png"
              alt="facebook--v1"
            />
          </a>
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/instagram-new--v1.png"
            alt="instagram-new--v1"
          />
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/zalo.png"
            alt="zalo"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

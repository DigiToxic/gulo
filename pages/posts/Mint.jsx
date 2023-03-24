import Link from "next/link";
import Header from "/pages/components/Header.tsx";

export const addresses = [
  "0x9A41426ae9C88110188276bAF8046dC420005249",
  "0x2F6e6Cf9f8ace6C9bb3bDE1D991c844e20B1F1d2",
  "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
  "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
  "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
  "0x90F79bf6EB2c4f870365E785982E1f101E93b906",
  "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65",
  "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc",
  "0x976EA74026E726554dB657fA54763abd0C3a0aa9",
  "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955",
  "0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",
  "0xB9277bb50FA9bD8Da38085622f5B782D47a64339",
  "0xD028780dDCBBD7930a9C27da65D3ca6f440E5127",
  "0x9A41426ae9C88110188276bAF8046dC420005249",
];

const Mint = () => {
  return (
    <div className="bg-[#E9EDE6] h-screen">
      <Header />

      <div className="bg-[url(https://static.wixstatic.com/media/a67ef4_bead6a0cac024db6a9177a6d4aa2152d~mv2.png)] bg-fixed bg-cover bg-no-repeat h-screen max-lg:h-[120vh]">
        <div className="flex justify-center">
          {/*  <img
            className="w-[50%] mt-[180px]"
            src="/images/gulo_coming_soon.png"
            alt=""
          />*/}

          <div className="relative bg-[#A2BE8D] bg-opacity-60 h-[500px] w-2/3 rounded-b-[60px] mt-24 max-lg:h-full">
            <div className="flex justify-center -mt-[67px] z-20">
              <img
                className=" w-[390px] z-20 max-[1200px]:w-[300px]"
                src="/images/logo.png"
                alt="logo"
              />
            </div>
            <img
              className="w-full h-[100px] -mt-40 z-10 max-[1200px]:-mt-[128px] max-[701px]:h-[80px]"
              src="/images/Border/x2.png"
              alt=""
            />
            <div className="flex justify-evenly items-center mt-8 max-lg:flex-col">
              <img
                className="w-[350px] rounded-3xl shadow-2xl max-[1200px]:w-[300px] max-[701px]:w-[270px] max-[570px]:w-[240px]"
                src="/images/gulo/gulo-gif.gif"
                alt=""
              />
              <div className="relative w-96 h-[300px] flex justify-center items-center max-[1200px]:w-[320px] max-lg:w-[350px] max-[701px]:w-[300px] max-[570px]:w-[250px]">
                <img src="/images/mint_box.png" alt="" />
                <div className="absolute">
                  <script
                    type="module"
                    src="https://unpkg.com/struct-kits@0.0.996/dist/blocks/blocks.esm.js"
                    async
                  ></script>
                  <struct-core
                    contract-address="0xDEc7263976B0652F0f93893F19499e0EcE52B08c"
                    testnet="true"
                    type="ERC721"
                    signatures="https://www.googleapis.com/storage/v1/b/structnft.appspot.com/o/collections%2FduFskyniibu8Jb8pDVfh%2Fallowlists%2Fsignature.json"
                  ></struct-core>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mint;

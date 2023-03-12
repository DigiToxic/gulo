import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { useAccount } from "wagmi";
import Link from "next/link";
import { ethers } from "ethers";
import { keccak256 } from "ethers/lib/utils";
import MerkleTree from "merkletreejs";
import type { NextPage } from 'next';


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

const Mint: NextPage = () => {
  const { address, isConnected } = useAccount();

  const leaves = addresses.map((x) => keccak256(x));
  const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
  const buf2hex = (x: Buffer) => "0x" + x.toString("hex");

  let leaf = "";
  let proof = [""];

  console.log("root");
  console.log(buf2hex(tree.getRoot()));

  if (address !== undefined) {
    leaf = keccak256(address as string); // address from wallet using walletconnect/metamask
    proof = tree.getProof(leaf).map((x) => buf2hex(x.data));
  }

  console.log("proof", proof);
  console.log(address)

  const { config } = usePrepareContractWrite({
    address: "0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2",
    abi: [
      {
        name: "mint",
        type: "function",
        stateMutability: "nonpayable",
        inputs: [],
        outputs: [],
      },
    ],
    functionName: "mint",
  });
  
  const { data, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  return (
    <div>
      <header className="flex flex-row justify-between items-center bg-transparent">
        <div>
          <Link href="/">
            <img className="w-44" src="/images/logo.png" alt="logo" />
          </Link>
        </div>

        <div className="flex flex-row justify-between w-1/3">
          <Link href="/posts/Team">
            <p className="text-base">Team</p>
          </Link>
          <Link href="/posts/About">
            <p className="text-base">About</p>
          </Link>
          <Link href="/posts/Mint">
            <p className="text-base">Mint</p>
          </Link>
        </div>

        <div className="flex flex-row justify-end w-40 mr-12">
          <ConnectButton showBalance={false} chainStatus="none" />
        </div>
      </header>

      <div>
        <button disabled={!write || isLoading} onClick={() => write?.()}>
          {isLoading ? "Minting..." : "Mint"}
        </button>
        {isSuccess && (
          <div>
            Successfully minted your NFT!
            <div>
              <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
            </div>
          </div>
        )}
      </div>

      <div></div>

      <footer className="flex flex-row justify-end">
        <div className="flex flex-row justify-between w-1/6">
          <img
            className="w-9 h-9 cursor-pointer"
            src="/images/header/pixel-etherscan.png"
            alt="etherscan"
          />
          <img
            className="w-9 h-9 cursor-pointer"
            src="/images/header/pixel-opensea.png"
            alt="opensea"
          />
          <img
            className="w-9 h-9 cursor-pointer"
            src="/images/header/pixel-twitter.png"
            alt="twitter"
          />
        </div>
      </footer>
    </div>
  );
}
export default Mint;
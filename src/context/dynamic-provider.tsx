"use client";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { StarknetWalletConnectors } from "@dynamic-labs/starknet";
import { ReactNode } from "react";

const DynamicProvider = ({ children }: { children: ReactNode }) => {
	return (
		<DynamicContextProvider
			settings={{
				environmentId: "18f28dba-a643-49d8-a58e-05043e3bb303",
        walletConnectors: [StarknetWalletConnectors],
			}}
		>
			{children}
		</DynamicContextProvider>
	);
};

export default DynamicProvider;

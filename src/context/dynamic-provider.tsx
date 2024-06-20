"use client";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { StarknetWalletConnectors } from "@dynamic-labs/starknet";
import { ReactNode } from "react";

const DynamicProvider = ({ children }: { children: ReactNode }) => {
	return (
		<DynamicContextProvider
			settings={{
				environmentId: process.env.NEXT_PUBLIC_ENVIRONMENT_ID!,
        walletConnectors: [StarknetWalletConnectors],
			}}
		>
			{children}
		</DynamicContextProvider>
	);
};

export default DynamicProvider;

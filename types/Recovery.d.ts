/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface RecoveryInterface extends Interface {
  functions: {
    _manager: TypedFunctionDescription<{ encode([]: []): string }>;

    recover: TypedFunctionDescription<{
      encode([token, amount]: [string, BigNumberish]): string;
    }>;
  };

  events: {
    ManagerSet: TypedEventDescription<{
      encodeTopics([manager]: [null]): string[];
    }>;
  };
}

export class Recovery extends Contract {
  connect(signerOrProvider: Signer | Provider | string): Recovery;
  attach(addressOrName: string): Recovery;
  deployed(): Promise<Recovery>;

  on(event: EventFilter | string, listener: Listener): Recovery;
  once(event: EventFilter | string, listener: Listener): Recovery;
  addListener(eventName: EventFilter | string, listener: Listener): Recovery;
  removeAllListeners(eventName: EventFilter | string): Recovery;
  removeListener(eventName: any, listener: Listener): Recovery;

  interface: RecoveryInterface;

  functions: {
    _manager(): Promise<string>;

    recover(
      token: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  _manager(): Promise<string>;

  recover(
    token: string,
    amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {
    ManagerSet(manager: null): EventFilter;
  };

  estimate: {
    _manager(): Promise<BigNumber>;

    recover(token: string, amount: BigNumberish): Promise<BigNumber>;
  };
}
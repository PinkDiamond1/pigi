/* External Imports */
import { TransactionResult } from '@pigi/rollup-core'

/**
 * Responsible for building Rollup Blocks from information about storage modified by
 * the transactions being rolled up.
 */
export interface RollupBlockBuilder {
  addTransactionResult(transactionResult: TransactionResult): Promise<void>
}

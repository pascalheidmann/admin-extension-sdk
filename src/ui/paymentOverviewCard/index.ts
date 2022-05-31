import { createSender } from '../../channel';

export const add = createSender('uiPaymentOverviewCard');

/**
 * Contains all necessary parameters to render a component in the payment overview
 */
export type uiPaymentOverviewCard = {
  responseType: void,
  component?: string,
  positionId: string,
  paymentMethodHandlers: string[],
}

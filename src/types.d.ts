export interface CardProps {
  isCardOpen: boolean;
}

export interface CardInsideProps extends CardProps {
  isGiftOpen: boolean;
  showTicket: boolean;
  onGiftClick: (e: React.MouseEvent) => void;
}

export interface GiftButtonProps {
  isGiftOpen: boolean;
  onGiftClick: (e: React.MouseEvent) => void;
}

export interface TicketProps {
  showTicket: boolean;
}

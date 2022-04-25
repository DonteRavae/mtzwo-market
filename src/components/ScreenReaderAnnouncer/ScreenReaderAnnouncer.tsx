import { ScreenReaderAnnouncerContainer } from "./ScreenReaderAnnouncer.styled";

type ReaderProps = {
  children: React.ReactNode;
};

const ScreenReaderAnnouncer = ({ children }: ReaderProps) => (
  <ScreenReaderAnnouncerContainer
    role="region"
    aria-live="polite"
    className="visually-hidden"
  >
    {children}
  </ScreenReaderAnnouncerContainer>
);

export default ScreenReaderAnnouncer;

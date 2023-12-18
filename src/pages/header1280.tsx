import { FunctionComponent, useState, useCallback } from "react";
import { Button } from "@mui/material";
import styled from "styled-components";

const LogoSideIcon = styled.img`
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  @media screen and (max-width: 420px) {
    align-self: stretch;
    width: auto;
    flex-direction: row;
  }
`;
const Organismicon = styled.img`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const Icon = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Atomssearchbarbuttonmedium = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-9xs) var(--padding-9xs) var(--padding-9xs)
    var(--padding-base);
  background-color: transparent;
  border-radius: 0px var(--br-5xs) var(--br-5xs) 0px;
  height: 2.5rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  box-sizing: border-box;
`;
const Input = styled.input`
  border: none;
  outline: none;
  font-family: var(--web-subheader-semibold);
  font-size: var(--web-body-regular-size);
  background-color: transparent;
  align-self: stretch;
  flex: 1;
  position: relative;
  border-radius: var(--br-9xs);
  padding: 0.63rem var(--padding-5xs);
  color: var(--light-mode-typography-support);
`;
const Organismicon1 = styled.img`
  position: relative;
  width: 1rem;
  height: 1rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const Icon1 = styled.div`
  overflow: hidden;
  display: none;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Atomssearchbarbuttonmedium1 = styled.div`
  border-radius: 0px var(--br-5xs) var(--br-5xs) 0px;
  width: 3rem;
  height: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-9xs) var(--padding-5xs);
  box-sizing: border-box;
`;
const Organismsearchbarmedium = styled.div`
  flex: 1;
  border-radius: var(--br-5xs);
  background-color: var(--light-mode-typography-on-color-white);
  border: 1px solid var(--light-mode-component-specific-input-border);
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const SearchbarMedium = styled.div`
  flex: 1;
  border-radius: var(--br-5xs);
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 420px) {
    flex: unset;
    align-self: stretch;
  }
`;
const KeyboardArrowDownIcon = styled.img`
  position: relative;
  width: 1.25rem;
  height: 1.25rem;
  overflow: hidden;
  flex-shrink: 0;
`;
const ButtonLabel = styled.div`
  position: relative;
  line-height: 1.25rem;
`;
const LeadingIconParent = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const Button1 = styled.a`
  text-decoration: none;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  color: inherit;
  @media screen and (max-width: 420px) {
    display: none;
  }
`;
const HeaderServicesChild = styled.div`
  position: relative;
  border-right: 1px solid var(--light-mode-neutrals-greyest-neutrals-60);
  box-sizing: border-box;
  width: 0.06rem;
  height: 1.56rem;
  @media screen and (max-width: 420px) {
    display: none;
  }
`;
const Organismicon3 = styled.img`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
  flex-shrink: 0;
`;
const Image2Icon = styled.img`
  position: absolute;
  height: 100%;
  width: 132.5%;
  top: 0%;
  right: -15%;
  bottom: 0%;
  left: -17.5%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const Personaretail = styled.div`
  position: relative;
  border-radius: var(--br-31xl);
  width: 2.5rem;
  height: 2.5rem;
  overflow: hidden;
  flex-shrink: 0;
`;
const Avatar = styled.div`
  border-radius: var(--br-31xl);
  width: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Moleculesmenu = styled.div`
  border-radius: 42px;
  border: 1px solid var(--light-mode-neutrals-greyest-neutrals-60);
  box-sizing: border-box;
  height: 2.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-9xs) 0rem var(--padding-9xs) var(--padding-xs);
  gap: 0.63rem;
`;
const NotificationsIcon = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0rem;
  right: 0rem;
  bottom: 0rem;
  left: 0rem;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Organismicon5 = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
  flex-shrink: 0;
`;
const Frame = styled.div`
  position: absolute;
  top: -0.31rem;
  left: 0rem;
  width: 1.5rem;
  height: 1.81rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;
const Div = styled.div`
  flex: 1;
  position: relative;
  line-height: 1.25rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 0.38rem;
`;
const MinWidth = styled.div`
  position: relative;
  width: 0.63rem;
  height: 0rem;
  overflow: hidden;
  flex-shrink: 0;
`;
const Counter1 = styled.div`
  align-self: stretch;
  border-radius: var(--br-31xl);
  background-color: var(--light-mode-semantic-danger-default);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0rem var(--padding-9xs);
`;
const Counter = styled.div`
  position: absolute;
  top: -0.31rem;
  left: 0.88rem;
  height: 1.13rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const FrameParent = styled.div`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
`;
const ProfileActions = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  font-size: var(--web-subheader-semibold-size);
  color: var(--light-mode-typography-on-color-white);
  @media screen and (max-width: 420px) {
    display: none;
  }
`;
const HeaderServices = styled.div`
  flex: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  @media screen and (max-width: 420px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: var(--gap-0);
    flex: unset;
    align-self: stretch;
  }
`;
const TopNav = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-base) 0rem;
  gap: 3.5rem;
  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`;
const TabLabel = styled.div`
  position: relative;
  line-height: 1.25rem;
  font-weight: 600;
`;
const Content = styled.div`
  align-self: stretch;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-base) var(--padding-xs);
`;
const Baseline = styled.input`
  border: none;
  outline: none;
  background-color: var(--light-mode-typography-on-color-white);
  align-self: stretch;
  position: relative;
  border-radius: var(--br-3xs);
  height: 0.25rem;
`;
const AtomsmenuItem = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  color: var(--light-mode-typography-on-color-white);
  @media screen and (max-width: 420px) {
    align-self: stretch;
    width: auto;
    min-width: 100%;
    max-width: 100%;
  }
`;
const Baseline1 = styled.div`
  align-self: stretch;
  position: relative;
  height: 0.25rem;
`;
const AtomsmenuItem1 = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;
const TextIcon2 = styled.div`
  align-self: stretch;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-base) var(--padding-xs);
  gap: var(--gap-9xs);
`;
const KeyboardArrowDownIcon2 = styled.img`
  position: relative;
  width: 1.25rem;
  height: 1.25rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  display: none;
`;
const BottomNav = styled.a`
  text-decoration: none;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  color: inherit;
  @media screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--gap-0);
  }
`;
const NavWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-xl);
`;
const Header = styled.section`
  background-color: var(--light-mode-backgrounds-dark);
  border-bottom: 1px solid var(--light-mode-neutrals-darker-neutrals-80);
  box-sizing: border-box;
  width: 80rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  font-size: var(--web-body-regular-size);
  color: var(--light-mode-neutrals-lighter-neutrals-20);
  font-family: var(--web-subheader-semibold);
`;
const Separator = styled.div`
  align-self: stretch;
  background-color: var(--light-mode-neutrals-darker-neutrals-80);
  height: 0.06rem;
  flex-shrink: 0;
`;
const WelcomeRutajeetMukherjee = styled.h2`
  margin: 0;
  flex: 1;
  position: relative;
  font-size: inherit;
  line-height: 2.25rem;
  font-weight: 600;
  font-family: inherit;
`;
const AtomscollapsibleSectionlabe = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
`;
const AtomscollapsibleSectionlabe1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  font-size: var(--web-subheader-semibold-size);
  color: var(--light-mode-typography-disabled);
`;
const ProfileName = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.31rem;
`;
const Title = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const Bg = styled(Button)`
  align-self: stretch;
  opacity: 0.4;
  cursor: pointer;
  z-index: 0;
`;
const GifIcon = styled.img`
  border-radius: var(--br-base);
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const SpecialOffersFor = styled.div`
  flex: 1;
  position: relative;
  font-size: var(--web-body-regular-size);
  line-height: 1.25rem;
  font-weight: 500;
  font-family: var(--web-subheader-semibold);
  color: #111827;
  text-align: left;
`;
const ChevronRightIcon = styled.img`
  position: relative;
  border-radius: 16.67px;
  width: 1rem;
  height: 1rem;
  overflow: hidden;
  flex-shrink: 0;
`;
const Text1 = styled.div`
  flex: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-9xs);
`;
const BtnGroup = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-9xs);
  gap: var(--gap-5xs);
`;
const RoundedRectangle = styled.div`
  align-self: stretch;
  margin: 0 !important;
  position: absolute;
  top: 0rem;
  left: 0rem;
  border-radius: var(--br-base);
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    #4bbdf6;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
const Cta = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  width: 15.38rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;
const WelcomeMsgCta = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
const Section2 = styled.section`
  align-self: stretch;
  background-color: var(--light-mode-backgrounds-dark);
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem var(--padding-xl);
  text-align: left;
  font-size: 1.75rem;
  color: var(--light-mode-typography-on-color-white);
  font-family: var(--web-subheader-semibold);
`;
const Header1280Root = styled.header`
  position: relative;
  background-color: var(--light-mode-backgrounds-light);
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Header1280: FunctionComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [baselineValue, setBaselineValue] = useState("");

  const onAtomsmenuItemContainerClick = useCallback(() => {
    window.open("https://www.hdfcbank.com/");
  }, []);

  const onBgClick = useCallback(() => {
    window.open("https://hdfcbank.com");
  }, []);

  return (
    <Header1280Root id="mainHeader">
      <Header>
        <NavWrapper>
          <TopNav>
            <LogoSideIcon alt="" src="/logo.svg" />
            <HeaderServices>
              <SearchbarMedium>
                <Organismsearchbarmedium>
                  <Atomssearchbarbuttonmedium>
                    <Icon>
                      <Organismicon alt="" src="/organismicon@2x.png" />
                    </Icon>
                  </Atomssearchbarbuttonmedium>
                  <Input
                    type="text"
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                  />
                  <Atomssearchbarbuttonmedium1>
                    <Icon1>
                      <Organismicon1 alt="" src="/organismicon@2x.png" />
                    </Icon1>
                  </Atomssearchbarbuttonmedium1>
                </Organismsearchbarmedium>
              </SearchbarMedium>
              <Button1>
                <LeadingIconParent>
                  <Icon>
                    <KeyboardArrowDownIcon alt="" src="/organismicon.svg" />
                  </Icon>
                  <ButtonLabel>{`Services & Support`}</ButtonLabel>
                </LeadingIconParent>
              </Button1>
              <HeaderServicesChild />
              <ProfileActions>
                <Icon>
                  <Organismicon3 alt="" src="/organismicon1.svg" />
                </Icon>
                <Moleculesmenu>
                  <Icon>
                    <KeyboardArrowDownIcon alt="" src="/organismicon2.svg" />
                  </Icon>
                  <Avatar>
                    <Personaretail>
                      <Image2Icon alt="" src="/image-2@2x.png" />
                    </Personaretail>
                  </Avatar>
                </Moleculesmenu>
                <FrameParent>
                  <Frame>
                    <Icon>
                      <Organismicon5>
                        <NotificationsIcon alt="" src="/notifications.svg" />
                      </Organismicon5>
                    </Icon>
                  </Frame>
                  <Counter>
                    <Counter1>
                      <Div>1</Div>
                      <MinWidth />
                    </Counter1>
                  </Counter>
                </FrameParent>
              </ProfileActions>
            </HeaderServices>
          </TopNav>
          <BottomNav>
            <AtomsmenuItem onClick={onAtomsmenuItemContainerClick}>
              <Content>
                <TabLabel>Home</TabLabel>
              </Content>
              <Baseline
                type="text"
                value={baselineValue}
                onChange={(event) => setBaselineValue(event.target.value)}
              />
            </AtomsmenuItem>
            <AtomsmenuItem1>
              <Content>
                <ButtonLabel>Accounts</ButtonLabel>
              </Content>
              <Baseline1 />
            </AtomsmenuItem1>
            <AtomsmenuItem1>
              <Content>
                <ButtonLabel>Send Money</ButtonLabel>
              </Content>
              <Baseline1 />
            </AtomsmenuItem1>
            <AtomsmenuItem1>
              <TextIcon2>
                <ButtonLabel>Cards</ButtonLabel>
                <KeyboardArrowDownIcon alt="" src="/keyboard-arrow-down.svg" />
              </TextIcon2>
              <Baseline1 />
            </AtomsmenuItem1>
            <AtomsmenuItem1>
              <TextIcon2>
                <ButtonLabel>FD/RD</ButtonLabel>
                <KeyboardArrowDownIcon alt="" src="/keyboard-arrow-down.svg" />
              </TextIcon2>
              <Baseline1 />
            </AtomsmenuItem1>
            <AtomsmenuItem1>
              <TextIcon2>
                <ButtonLabel>{`Bill & Recharges`}</ButtonLabel>
                <KeyboardArrowDownIcon2
                  alt=""
                  src="/keyboard-arrow-down@2x.png"
                />
              </TextIcon2>
              <Baseline1 />
            </AtomsmenuItem1>
            <AtomsmenuItem1>
              <TextIcon2>
                <ButtonLabel>Loans</ButtonLabel>
                <KeyboardArrowDownIcon2
                  alt=""
                  src="/keyboard-arrow-down@2x.png"
                />
              </TextIcon2>
              <Baseline1 />
            </AtomsmenuItem1>
            <AtomsmenuItem1>
              <TextIcon2>
                <ButtonLabel>Invest</ButtonLabel>
                <KeyboardArrowDownIcon alt="" src="/keyboard-arrow-down.svg" />
              </TextIcon2>
              <Baseline1 />
            </AtomsmenuItem1>
            <AtomsmenuItem1>
              <TextIcon2>
                <ButtonLabel>Insure</ButtonLabel>
                <KeyboardArrowDownIcon alt="" src="/keyboard-arrow-down.svg" />
              </TextIcon2>
              <Baseline1 />
            </AtomsmenuItem1>
          </BottomNav>
        </NavWrapper>
      </Header>
      <Separator />
      <Section2>
        <WelcomeMsgCta>
          <Title>
            <ProfileName>
              <AtomscollapsibleSectionlabe>
                <WelcomeRutajeetMukherjee>
                  Welcome, Rutajeet Mukherjee
                </WelcomeRutajeetMukherjee>
              </AtomscollapsibleSectionlabe>
              <AtomscollapsibleSectionlabe1>
                <ButtonLabel>Last logged in at 12/01/23, 05:35 PM</ButtonLabel>
              </AtomscollapsibleSectionlabe1>
            </ProfileName>
          </Title>
          <Cta>
            <Bg color="primary" variant="contained" onClick={onBgClick} />
            <RoundedRectangle>
              <BtnGroup>
                <GifIcon alt="" src="/gif@2x.png" />
                <Text1>
                  <SpecialOffersFor>Special offers for you!</SpecialOffersFor>
                  <ChevronRightIcon alt="" src="/chevron-right.svg" />
                </Text1>
              </BtnGroup>
            </RoundedRectangle>
          </Cta>
        </WelcomeMsgCta>
      </Section2>
    </Header1280Root>
  );
};

export default Header1280;

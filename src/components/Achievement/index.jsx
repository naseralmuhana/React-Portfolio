import { achievementData } from "../../data/achievementData"
import AchievementCard from "./AchievementCard"
// prettier-ignore
import { Bio, Body, CardsContainer, Section, Title } from "./mui"

const Achievement = () => {
  if (achievementData.achievements.length === 0) return

  const cards = achievementData.achievements.map((achieve) => (
    <AchievementCard key={achieve.id} achieve={achieve} />
  ))
  return (
    <Section id="achievement">
      {/* Body */}
      <Body>
        <Title>Achievements</Title>
        <Bio>{achievementData.bio}</Bio>
      </Body>
      {/* Cards */}
      <CardsContainer>{cards}</CardsContainer>
    </Section>
  )
}

export default Achievement

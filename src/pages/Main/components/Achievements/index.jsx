import { SectionTitle } from "../../../../components"
import { achievementData } from "../../../../data"
import AchievementCard from "./AchievementCard"
// prettier-ignore
import { Bio, Body, CardsContainer, Section } from "./mui"

const Achievements = () => {
  if (achievementData.achievements.length === 0) return

  const cards = achievementData.achievements.map((achieve) => (
    <AchievementCard key={achieve.id} achieve={achieve} />
  ))
  return (
    <Section id="achievements">
      {/* Body */}
      <Body>
        {/* Title */}
        <SectionTitle sx={{ mb: { md: "1.5rem" } }}>Achievements</SectionTitle>
        {/* Bio */}
        <Bio>{achievementData.bio}</Bio>
      </Body>
      {/* Cards */}
      <CardsContainer>{cards}</CardsContainer>
    </Section>
  )
}

export default Achievements

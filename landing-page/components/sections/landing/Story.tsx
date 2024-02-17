import { tw } from '@helpwave/common/twind'

type StoryBlockProps = {
  pill?: string,
  header: string,
  content: string
}

const StoryBlock = ({
  pill,
  header,
  content,
}: StoryBlockProps) => {
  return (
    <div className={tw('desktop:w-1/2')}>
      <div className={tw('flex flex-column h-[48px] items-end')}>
        {pill && <h4 className={tw('text-sm text-green-600 bg-green-100 px-3 py-0.5 font-semibold tracking-widest rounded-lg')}>{pill}</h4>}
      </div>
      <h2 className={tw('pt-4 text-4xl font-space font-bold')}>{header}</h2>
      <br />
      <p className={tw('text-md')}>
        {content}
      </p>
    </div>
  )
}

const StorySection = () => {
  return (
    <div className={tw('m-auto pb-16 pt-8 relative flex mobile:flex-wrap gap-16')}>
      <StoryBlock
        pill="Open Innovation"
        header="Providing healthcare solutions"
        content={'At helpwave, we\'re not just creating healthcare software; we\'re co-creating it with you, the'
          + ' end-users. By directly involving you in the process, we\'re elevating quality and nurturing stronger'
          + ' development relationships. This unique approach allows our dedicated developers and engineers to laser-focus'
          + ' on turning your requirements into innovative software features.'}
      />
      <StoryBlock
        pill="Disruption"
        header="Access for everyone"
        content={'When did you last feel like the software you\'re using is worth billions? We didn\'t think so.'
          + ' Regulatory overhead and high entry barriers are making it hard for small companies to enter the market which leads to a lack of competition.'
          + ' helpwave is here to change that. We are providing a platform that invites everyone to the table, not just only the big players.'}
      />
      <StoryBlock
        pill="Our mission"
        header={'Passion for our vision'}
        content={'Our commitment to maintaining the highest level of agility, much like what helpwave embodies, is driving'
          + ' unprecedented innovation across medical branches. Experience a healthcare software development like never'
          + ' before and join us on this transformative journey'}
      />
    </div>
  )
}

export default StorySection

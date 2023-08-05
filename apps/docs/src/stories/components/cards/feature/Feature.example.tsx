import FeatureCard from '@turistikrota/ui/cards/feature'
import CoreFeatureLabel from '@turistikrota/ui/cards/feature/core'

export default function FeatureExample() {
  return (
    <div className='grid grid-cols-2 gap-3'>
      <div className='col-span-2 md:col-span-1'>
        <FeatureCard icon='bx bxs-hot' text='Hot' subtext='The ui kit is hot' variant='blue'>
          <CoreFeatureLabel text='This feature is a core feature.' />
        </FeatureCard>
      </div>
      <div className='col-span-2 md:col-span-1'>
        <FeatureCard icon='bx bx-registered' text='Red' subtext='The red feature' variant='danger' />
      </div>
    </div>
  )
}

import { tw } from '@twind/core'
import GridBox from './GridBox'

const roles = { /* eslint-disable key-spacing, no-multi-spaces */
  FRONTEND_DEVELOPER: { id: 'FRONTEND_DEVELOPER', name: 'Frontend Developer', color: '#8E75CE' },
  BACKEND_DEVELOPER:  { id: 'BACKEND-DEVELOPER',  name: 'Backend Developer',  color: '#AD5461' },
  PRODUCT_OWNER:      { id: 'PRODUCT_OWNER',      name: 'Product Owner',      color: '#AD5461' },
  PRODUCT_MANAGER:    { id: 'PRODUCT_MANAGER',    name: 'Product Manager',    color: '#AD5461' },
  CUSTOMER_RELATIONS: { id: 'CUSTOMER_RELATIONS', name: 'Customer Relations', color: '#AD5461' },
  DEVOPS:             { id: 'DEVOPS',             name: 'DevOps',             color: '#FF9933' },
} /* eslint-enable key-spacing, no-multi-spaces */

type Role = keyof typeof roles

const roleEnum = Object.fromEntries(Object.keys(roles).map((key) => [key, key])) as { [key in Role]: key }

const teamMembers = [ /* eslint-disable key-spacing, no-multi-spaces */
  { name: 'Felix',     role: roleEnum.FRONTEND_DEVELOPER },
  { name: 'Felix',     role: roleEnum.PRODUCT_MANAGER },
  { name: 'Max',       role: roleEnum.BACKEND_DEVELOPER },
  { name: 'Jonas',     role: roleEnum.PRODUCT_OWNER },
  { name: 'Jannik',    role: roleEnum.FRONTEND_DEVELOPER },
  { name: 'Christian', role: roleEnum.CUSTOMER_RELATIONS },
  { name: 'Max',       role: roleEnum.PRODUCT_MANAGER },
  { name: 'Florian',   role: roleEnum.BACKEND_DEVELOPER },
  { name: 'Nico',      role: roleEnum.DEVOPS }
] /* eslint-enable key-spacing, no-multi-spaces */

const Person = ({ name, role }: { name: string, role: Role }) => (
  <div className={tw('w-48')}>
    <div className={tw('font-semibold text-4xl text-white')}>
      {name}
    </div>
    <div className={tw(`font-medium text-xl text-[${roles[role].color}]`)}>{roles[role].name}</div>
  </div>
)

const TeamSection = () => {
  return (
    <div className={tw('w-screen h-screen bg-hw-find-a-good-name-for-this-background')}>
      <div className={tw('flex justify-end p-8')}>
        <GridBox heading={<h1 className={tw('text-white text-5xl font-space font-bold pl-4 pb-4')}>Our Team</h1>}>
          <div className={tw('w-fit grid grid-cols-2 gap-16')}>
            {teamMembers.map(({ name, role }, index) => <Person key={index} name={name} role={role} />)}
          </div>
        </GridBox>
      </div>
    </div>
  )
}

export default TeamSection

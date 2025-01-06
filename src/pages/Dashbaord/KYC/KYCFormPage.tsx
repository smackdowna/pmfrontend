import { ICONS } from '../../../assets'
import KycDetails from '../../../components/MyProfilePage/KycDetails/KycDetails'
import { useNavigate } from 'react-router-dom'

const KYCFormPage = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-between gap-3'>
        <div className='flex items-center gap-3'>
        <img src={ICONS.ArrowLeft} alt="Profile" className="" onClick={
          () => navigate('/dashboard/kyc')
        } />
        <h1 className="text-neutral-90 text-2xl font-semibold">KYC Verification</h1> 
        </div>
        <div className='flex gap-3'>
          <button className="bg-transparent text-primary-10 border-neutral-10 border px-4 py-2 rounded-lg " onClick={()=> navigate('../kyc')}>Cancel</button>
          <button className="bg-primary-10 text-white px-4 py-2 rounded-lg" onClick={() => navigate('../kycstatus')} >Send For Approval</  button>
        </div>
      </div>
      <KycDetails />
    </div>
  )
}

export default KYCFormPage

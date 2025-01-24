import Link from "next/link"

export default function DepositPage() {
return(

    <div className="flex  flex-col  justify-center min-h-fit  my-8 bg-white shadow md:w-[50%] mx-auto rounded-[40px] w-[90%]">
     <Link href='/'>   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x mx-10 mt-8 "><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
     </Link>
     
        <div className="md:pb-[8%] md:pt-[3%] pb-[14%] pt-[8%]">
<h2 className="  h-[53px] leading-[32.87px]  flex justify-center mx-auto text-[28px] font-[600]">Top Up Money</h2>
<div className="flex justify-center gap-3 w-[29%] md:w-[12%] mx-auto flex-col items-start ">
<p className="font-[500] text-[12px] h-[14px] text-custom-gray ">Total Balance </p>
<h4 className="font-[500] text[20px] flex items-center  gap-9">$11,485.30 <span className="round-[3px] font-[500] text-[9.92px] leading-[13.23px] text-btntext bg-custom-green">+5.3%</span> </h4>
</div>

<div className="flex justify-center gap-8 mt-8 md:w-[90%]  mx-auto flex-col items-start ">

<Link href="/topupdetails" className="flex justify-start gap-5 w-[90%] mx-auto items-center border border-[#E5E5E5] rounded-[10px] px-4 py-2">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-wallet text-primary"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>
<div className="flex flex-col gap-2">
    <h3 className="font-[500] text-[14px]">Top Up via other Wallets</h3>
    <p className="font-400 text-[12px] text-custom-gray">You can Top Up your Transverse account by transferring from other Wallets.</p>
</div>
</Link>


<div className="flex justify-start gap-5 w-[90%] mx-auto items-center border border-[#E5E5E5] rounded-[10px] px-4 py-2">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-landmark text-primary"><line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>
<div className="flex flex-col gap-2">
    <h3 className="font-[500] text-[14px]">Top Up via Bank Account </h3>
    <p className="font-400 text-[12px] text-custom-gray">Use bank transfer to Top Up your Transverse Wallet now.</p>
</div>
</div>

<div className="flex justify-start gap-5 w-[90%] mx-auto items-center border border-[#E5E5E5] rounded-[10px] px-4 py-2">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-qr-code text-primary"><rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/></svg>
<div className="flex flex-col gap-2">
    <h3 className="font-[500] text-[14px]">Top Up via QR code </h3>
    <p className="font-400 text-[12px] text-custom-gray">Scan a bar QR code to Top Up your Transverse Wallet adccount immediately. </p>
</div>
</div>


</div>


       </div>
    </div>
)
}
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

const Footer = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
    }
    const getCurrentYear = () => {
        return new Date().getFullYear();
    }

    return (
        <footer className="wpo-site-footer">
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col col-md-8 col-sm-12 text-center text-md-start mb-2 mb-md-0">
                            <p className="copyright" style={{ margin: 0 }}>
                                &copy;{getCurrentYear()} Universidad Pública de El Alto. Todos los derechos reservados <Link onClick={ClickHandler} href="/home" style={{ color: '#c6c4c7ff', fontWeight: '500' }}> | U-TIC  Soporte I.A.T. </Link>.
                            </p>
                        </div>
                        <div className="col col-md-4 col-sm-12 text-center text-md-end">
                            <div className="footer-logo">
                                <Image 
                                    src="/images/UTICLOGOU.png"
                                    alt="Logo UPEA"
                                    width={120}
                                    height={60}
                                    style={{ 
                                        width: 'auto', 
                                        height: '50px', 
                                        objectFit: 'contain' 
                                    }}
                                />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
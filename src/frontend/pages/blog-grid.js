import Layout from "@/components/layout/Layout"
import Link from "next/link"
import BlogList from '../components/reusable/BlogList'
const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1; // Nota: Los meses en JavaScript son indexados desde 0, por lo que sumamos 1.
const year = currentDate.getFullYear();
let date=`${day}/${month}/${year}`
const autor='Coach Blockchain'
const create='"El valor del Digital Art"'
let course=1;
const avatar="/assets/images/avatar/ORO.png"
const blogPosts = [
    {
        id: 1,
        image: "/assets/images/blog/blog-grid-01.png",
        category: "El valor del Digital Art",
        date: date,
        title: "Introducción al Blockchain: Fundamentos y Conceptos Básicos",
        detailsLink: "/item-details",
        authorAvatar: avatar,
        authorName: autor,
        authorLink: "/author-1",
        arrowLink: "#"
    },
    {
        id: 2,
        image: "/assets/images/blog/blog-grid-02.png",
        category: create,
        date: date,
        title: "Fundamentos de NFT",
        detailsLink: "/item-details",
        authorAvatar: avatar,
        authorName: autor,
        authorLink: "/author-1",
        arrowLink: "#"
    },
    {
        id: 3,
        image: "/assets/images/blog/blog-grid-03.png",
        category: create,
        date: date,
        title: "Blockchain Avanzado",
        detailsLink: "/item-details",
        authorAvatar: avatar,
        authorName: autor,
        authorLink: "/author-1",
        arrowLink: "#"
    },
    {
        id: 4,
        image: "/assets/images/blog/blog-grid-04.jpg",
        category: create,
        date: date,
        title: "Inversiones en Criptomonedas: Estrategias y Análisis del Mercado Financiero Digital",
        detailsLink: "/item-details",
        authorAvatar: avatar,
        authorName: autor,
        authorLink: "/author-1",
        arrowLink: "#"
    },
   
    {
        id: 5,
        image: "/assets/images/blog/blog-grid-05.jpg",
        category: create,
        date: date,
        title: "Dominando el Mercado de Criptomonedas",
        detailsLink: "/item-details",
        authorAvatar: avatar,
        authorName: autor,
        authorLink: "/author-1",
        arrowLink: "#"
    },
    {
        id: 6,
        image: "/assets/images/blog/blog-grid-06.jpg",
        category: create,
        date: date,
        title: "Criptomonedas del Futuro",
        detailsLink: "/item-details",
        authorAvatar: avatar,
        authorName: autor,
        authorLink: "/author-1",
        arrowLink: "#"
    },
   
    {
        id: 7,
        image: "/assets/images/blog/blog-grid-07.jpg",
        category: create,
        date: date,
        title: " Tendencias Innovadoras y Perspectivas Tecnológicas en Evolución",
        detailsLink: "/item-details",
        authorAvatar: avatar,
        authorName: autor,
        authorLink: "/author-1",
        arrowLink: "#"
    },
    {
        id: 8,
        image: "/assets/images/blog/blog-grid-08.jpg",
        category: create,
        date: date,
        title: "Explorando Oportunidades en el Mundo de los Tokens No Fungibles",
        detailsLink: "/item-details",
        authorAvatar: avatar,
        authorName: autor,
        authorLink: "/author-1",
        arrowLink: "#"
    },
    {
        id: 9,
        image: "/assets/images/blog/blog-grid-09.jpg",
        category: create,
        date: date,
        title: "Carteras de Criptomonedas: Guía Completa sobre Tipos y Funcionalidades para una Gestión Segura",
        detailsLink: "/item-details",
        authorAvatar: avatar,
        authorName: autor,
        authorLink: "/author-1",
        arrowLink: "#"
    },
    {
        id: 10,
        image: "/assets/images/blog/blog-grid-10.jpg",
        category: create,
        date: date,
        title: "Todo sobre el Bitcoin",
        detailsLink: "/item-details",
        authorAvatar: avatar,
        authorName: autor,
        authorLink: "/author-1",
        arrowLink: "#"
    },
    {
        id: 11,
        image: "/assets/images/blog/blog-grid-11.jpg",
        category: create,
        date: date,
        title: "Trading de Criptomonedas",
        detailsLink: "/item-details",
        authorAvatar: avatar,
        authorName: autor,
        authorLink: "/author-1",
        arrowLink: "#"
    },
    {
        id: 12,
        image: "/assets/images/blog/blog-grid-13.jpg",
        category: create,
        date: date,
        title: "Criptomonedas, Blockchain e Inteligencia Artificial",
        detailsLink: "/item-details",
        authorAvatar: avatar,
        authorName: autor,
        authorLink: "/author-1",
        arrowLink: "#"
    },
];

export default function Home() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>

                <div>
                    <div className="flat-title-page">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-12">
                                    <h1 className="heading text-center">Formaciones</h1>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tf-section tf-grid-blog pb-80">
                        <div className="themesflat-container">

                            <BlogList blogPosts={blogPosts}/>
                           


                            
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}
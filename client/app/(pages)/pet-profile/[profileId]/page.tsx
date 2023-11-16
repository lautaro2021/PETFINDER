import { getPetData } from "@/app/utils/getPetData";
import { redirect } from 'next/navigation'
import styles from '@/app/layouts/pet-profile/pet-profile.module.css'
import InfoRow from "@/app/components/pet-card/InfoRow";

export default async function PetProfile({params}:{params:{profileId:string}}){
  const petData = await getPetData(params.profileId);
  const petOwner = petData.pet_owner
  if(!petData) return redirect(`/pet-profile/add?newId=${params.profileId}`)

  return (
    <main className={`main_container ${styles.MainPetProfile}`}>
      <section className={styles.PetProfileSection}>
        <div className={styles.PetProfileHeader}>
          <div className={styles.PetProfileHeaderData}>
            <img src={petData.picture} alt="Pet Profile Photo" className={styles.PetProfileImg}/>
            <div>
              <h1>{petData.name}</h1>
              <div className={styles.RowInfoContainer}>
                <InfoRow icon={1} text={petData.race} />
                <InfoRow icon={2} text={petOwner?.location} />
              </div>
            </div>
          </div>
          <div className={styles.PetOwnerDataCard}>
            <div className={styles.PetOwnerInfo}>
              <label>Dueño</label>
              <h2>{petOwner?.name}</h2>
              <InfoRow icon={2} text={petOwner?.phone} />
              <InfoRow icon={2} text={petOwner?.phone} />
            </div>
            <a className={styles.PetOwnerContactBtn}>
              Contactar
            </a>
          </div>
        </div>
        <div className={styles.PetProfileInfo}>
          <h4>Información</h4>
          <div className={styles.PetInfoCardsContainer}>
            <article className={styles.PetInfoCard}>
              <label>Sexo</label>
              <p>{petData.gender}</p>
            </article>
            <article className={styles.PetInfoCard}>
              <label>Castrado</label>
              <p>{petData.castrated}</p>
            </article>
            <article className={styles.PetInfoCard}>
              <label>Vacunas</label>
              <p>{petData.vaccines}</p>
            </article>
            <article className={styles.PetInfoCard}>
              <label>PetShop amigo</label>
              <p>{petData.petshop}</p>
            </article>
            <article className={styles.PetInfoCard}>
              <label>¿Posee enfermedades?</label>
              <p>{petData.disease} <br></br> {petData.diseaseType}</p>
            </article>
            <article className={styles.PetInfoCard}>
              <label>¿Se encuentra en tratamiento?</label>
              <p>{petData.treatment} <br></br> {petData.treatmentType}</p>
            </article>
            <article className={styles.PetInfoCard}>
              <label>Veterinario amigo</label>
              <p>{petData.veterinary}</p>
            </article>
            <article className={styles.PetInfoCard}>
              <label>Observaciones</label>
              <p>{petData.veterinary}</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}
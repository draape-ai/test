import Image from "next/image";
import styles from "./index.module.css";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <main className={styles.main}>
        <div className={styles.content}>
            {/* <div className={styles.logo_container}>
                <Image
                className={styles.logo}
                src="/draape_logo.jpg"
                alt="/drape Logo"
                width={400}
                height={80}
                priority
                />
            </div> */}

            <div className={styles.description}>
                <p className={styles.main_description}>Clothes should fit.</p>
                <p className={styles.sub1_description}>Get custom Clothing patterns with DraapeAI</p>
                <p className={styles.sub2_description}>DraapeAI saves you time by creating custom patterns from just a scan of your body</p>
            
                <div className={styles.button_container}>
                    <Button route="/designer/test">View Patterns</Button>
                    <Button route="/account/editProfile">Edit Profile</Button>
                </div>
            </div>
        </div>
    </main>
  );
}
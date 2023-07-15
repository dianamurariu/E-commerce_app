import ButtonAdd from '@/components/button-add';
import styles from './product-card.module.css';
import Link from 'next/link';

export default function ProductCard({ img, discount, title, original_price, current_price }) {
    current_price = current_price.split("$")[1];
    let disc;
    if (discount) {
        disc = discount.split("%")[0];
    }
    original_price = disc ? (Number(disc) * Number(current_price) / 100 + Number(current_price)) : Number(current_price);
    const original_price_parts = original_price.toString().split(".");

    return (
        <>
            <div className={styles.wrapper_card}>
                <div className={styles.card_top}>
                    <img className={styles.card_image} src={img} alt="image" />
                    {discount && <span className={styles.discount}>{discount}</span>}
                    <hr className={styles.card_line} />
                </div>

                <div className={styles.card_body}>
                    <Link href="#" className={styles.card_title}>{title}</Link>

                    <div className={styles.card_bottom}>
                        <div className={styles.current_price}>
                            {discount && (
                                <span className={styles.original_price}>
                                    <del>
                                        {original_price_parts[0]}.
                                    </del>
                                    <sup>{original_price_parts[1]}</sup>
                                </span>
                            )}
                            <span className={styles.current_price}>${~~current_price}.
                                <sup>{current_price.split(".")[1]}</sup>
                            </span>
                        </div>
                        <ButtonAdd btncolor="dark" />
                    </div>
                </div>
            </div>
        </>
    );
}

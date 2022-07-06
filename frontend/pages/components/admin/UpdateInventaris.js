import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import styles from "../../../styles/Home.module.css";
import styles1 from "../../../styles/User.module.css";
import axios from 'axios'

const UpdateInventaris = () => {
    //deklarasi variabel yang akan digunakan
    const [_kode, setKode] = useState('');
    const [_nama, setNama] = useState('');
    const [_merk, setMerk] = useState('');
    const [_jumlah, setJumlah] = useState('');
    const [_foto, setFoto] = useState('');
    const [_keterangan, setKeterangan] = useState('');
    const [data, setData] = useState([]);
    const router = useRouter();
    const {kode, nama, merk, jumlah, foto, keterangan} = router.query;

    useEffect(() => {
        if(typeof kode == 'string'){
            setKode(kode);
        }
        if(typeof nama == 'string'){
            setNama(nama);
        }
        if(typeof merk == 'string'){
            setMerk(merk);
        }
        if(typeof jumlah == 'string'){
            setJumlah(jumlah);
        }
        if(typeof foto == 'string'){
            setFoto(foto);
        }
        if(typeof keterangan == 'string'){
            setKeterangan(keterangan);
        }
    }, [kode, nama, merk, jumlah, foto, keterangan]);

    //fungsi untuk mengambil data dari server API
    const submitUpdate = async (e) => {
        e.preventDefault();
        try {
            axios.put(`http://localhost:5000/inventaris/${_kode}`, {
                kode: _kode,
                nama: _nama,
                merk: _merk,
                jumlah: _jumlah,
                foto: _foto,
                keterangan: _keterangan,
            })
                .then(res => {
                    console.log(res);
                }
            );
            alert('Data berhasil diubah')
            Router.push('/admin/formulir');
        }
        catch (err) {
            console.log(err);
        }
    }
        
    return (
        <div>
            <div className={styles.contentcontainer}>
                <div className={styles1.row}>
                    <div className="">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="">Update Inventaris</h4>
                            </div>
                            <div className="card-body">
                                <div className={styles1.tableresposif}>
                                    <form onSubmit={submitUpdate}>
                                        <div className="form-group">
                                            <label htmlFor="kode">Kode</label>
                                            <input type="text" className="form-control" id="kode" value={_kode} onChange={(e) => setKode(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="nama">Nama</label>
                                            <input type="text" className="form-control" id="nama" value={_nama} onChange={(e) => setNama(e.target.value)} />
                                            </div>
                                        <div className="form-group">
                                            <label htmlFor="merk">Merk</label>
                                            <input type="text" className="form-control" id="merk" value={_merk} onChange={(e) => setMerk(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="jumlah">Jumlah</label>
                                            <input type="text" className="form-control" id="jumlah" value={_jumlah} onChange={(e) => setJumlah(e.target.value)} />
                                            </div>
                                        <div className="form-group">
                                            <label htmlFor="foto">Foto</label>
                                            <input type="text" className="form-control" id="foto" value={_foto} onChange={(e) => setFoto(e.target.value)} />
                                            </div>
                                        <div className="form-group">
                                            <label htmlFor="keterangan">Keterangan</label>
                                            <input type="text" className="form-control" id="keterangan" value={_keterangan} onChange={(e) => setKeterangan(e.target.value)} />
                                            </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UpdateInventaris;
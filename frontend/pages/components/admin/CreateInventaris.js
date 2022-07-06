import React from 'react'
import { useState } from 'react'
import styles from "../../../styles/Home.module.css";
import axios from 'axios'
import Link from 'next/dist/client/link';

const CreateInventaris = () => {
    const [data, setData] = useState([])
    const [kode, setKode] = useState('')
    const [nama, setNama] = useState('')
    const [merk, setMerk] = useState('')
    const [jumlah, setJumlah] = useState('')
    const [foto, setFoto] = useState('')
    const [keterangan, setKeterangan] = useState('')

    async function AddInventarisNew(e) {
        e.preventDefault()
        try {
            axios.post('http://localhost:5000/inventaris', {
                kode,
                nama,
                merk,
                jumlah,
                foto,
                keterangan,
            })
                .then(res => {
                    console.log(res);
                });
            alert('Data berhasil ditambahkan')
            clearForm()
        }
        catch (err) {
            console.log(err);
        }
    }
    const clearForm = () => {
        setKode('')
        setNama('')
        setMerk('')
        setJumlah('')
        setFoto('')
        setKeterangan('')
    }

    return (
        <div>
            <div className={styles.contentcontainer}>
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Add Inventaris</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={AddInventarisNew}>
                            <div className="form-group">
                                <label>Kode Barang</label>
                                <input type="text" className="form-control" value={kode} onChange={(e) => setKode(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Nama Barang</label>
                                <input type="text" className="form-control" value={nama} onChange={(e) => setNama(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Merk Barang</label>
                                <input type="text" className="form-control" value={merk} onChange={(e) => setMerk(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Jumlah Barang</label>
                                <input type="text" className="form-control" value={jumlah} onChange={(e) => setJumlah(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Foto Barang</label>
                                <input type="file" className="form-control" value={foto} onChange={(e) => setFoto(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Keterangan Barang</label>
                                <input type="text" className="form-control" value={keterangan} onChange={(e) => setKeterangan(e.target.value)} />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <button className='btn btn-success'><Link href={'/admin/formulir'}>Kembali</Link></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateInventaris;
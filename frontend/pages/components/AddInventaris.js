import React from 'react'
import { useState } from 'react'
import styles from "../../styles/Home.module.css";
import axios from 'axios'

function AddInventaris() {
    const [data, setData] = useState([])
    const [kode, setKode] = useState('')
    const [nama, setNama] = useState('')
    const [merk, setMerk] = useState('')
    const [jumlah, setJumlah] = useState('')
    const [foto, setFoto] = useState('')
    const [keterangan, setKeterangan] = useState('')

    const AddInventarisNew = () => {
        const data = {
            kode: kode,
            nama: nama,
            merk: merk,
            jumlah: jumlah,
            foto: foto,
            keterangan: keterangan
        }
        axios.post('http://localhost:5000/inventaris', data)
            .then(res => {
                console.log(res)
                alert('Data berhasil ditambahkan')
            }
            )
            .catch(err => {
                console.log(err)
            }
            )
        
    }
    

    return (
        <div>
            <div className={styles.contentcontainer}>
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Add Inventaris</h4>
                    </div>
                    <div className="card-body">
                        <form>
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
                            <button type="button" className="btn btn-primary" onClick={AddInventarisNew}>Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddInventaris

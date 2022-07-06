import React from 'react'
import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import styles from "../../../styles/Home.module.css";
import styles1 from "../../../styles/User.module.css";
import axios from 'axios'

function UpdatePinjam() {
    //deklarasi variabel yang akan digunakan
    const [_kode, setKode] = useState('');
    const [_pegawai, setPegawai] = useState('');
    const [_tanggal, setTanggal] = useState('');
    const [_status, setStatus] = useState('');
    const [_message, setMessage] = useState('');
    const router = useRouter();
    const [data, setData] = useState([])
    const { kode, pegawai, tanggal, status, } = router.query;

    useEffect(() => {
        if (typeof kode === 'string') {
            setKode(kode);
        }
        if (typeof pegawai === 'string') {
            setPegawai(pegawai);
        }
        if (typeof tanggal === 'string') {
            setTanggal(tanggal);
        }
        if (typeof status === 'string') {
            setStatus(status);
        }
    }, [kode, pegawai, tanggal, status]);
    //fungsi untuk mengambil data dari server
    const submitUpdatePinjam = async (e) => {
        e.preventDefault();
        try {
            axios.put(`http://localhost:5000/inventaris/pinjam/${kode}`, {
                kode: _kode,
                pegawai: _pegawai,
                tanggal: _tanggal,
                status: _status,
            })
                .then(res => {
                    console.log(res);
                }
                );
            alert('Data berhasil diubah')
            Router.push('/admin/AddPinjam');
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <div className={styles.contentcontainer}>
                <div className="card">
                    <div className="card-header">
                        <h3>Update Pinjam</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={submitUpdatePinjam}>
                            <div className="form-group">
                                <label>Kode</label>
                                <input type="text" className="form-control" value={_kode} onChange={(e) => setKode(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Pegawai</label>
                                <input type="text" className="form-control" value={_pegawai} onChange={(e) => setPegawai(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Tanggal</label>
                                <input type="date" className="form-control" value={_tanggal} onChange={(e) => setTanggal(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Status</label>
                                <input type="text" className="form-control" value={_status} onChange={(e) => setStatus(e.target.value)} />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdatePinjam
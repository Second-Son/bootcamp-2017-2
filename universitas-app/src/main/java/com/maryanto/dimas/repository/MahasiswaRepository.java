package com.maryanto.dimas.repository;

import com.maryanto.dimas.model.Mahasiswa;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface MahasiswaRepository extends PagingAndSortingRepository<Mahasiswa, Integer> {

    List<Mahasiswa> findAll();
}

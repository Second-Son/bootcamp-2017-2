package com.maryanto.dimas.controller;

import com.maryanto.dimas.model.Mahasiswa;
import com.maryanto.dimas.repository.MahasiswaRepository;
import com.maryanto.dimas.repository.UserRepository;
import net.sf.jasperreports.engine.JREmptyDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/mahasiswa")
public class MahasiswaController {

    @Autowired
    private MahasiswaRepository mahasiswaRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/new")
    public String newMahasiswa(Authentication auth, @ModelAttribute Mahasiswa mahasiswa, Model model) {
        model.addAttribute("mhs", mahasiswa);
        return "/mahasiswa/TambahMahasiswa";
    }

    @PostMapping("/new")
    public String submitNewMahasiswa(@ModelAttribute Mahasiswa mahasiswa) {
        mahasiswaRepository.save(mahasiswa);
        return "redirect:/mahasiswa/new";
    }

    @GetMapping("/list")
    public String listMahasiswa(Model model) {
        model.addAttribute("listMhs", mahasiswaRepository.findAll());
        return "/mahasiswa/listMahasiswa";
    }

    @GetMapping("/hapus")
    public String hapusMahasiswa(
            @RequestParam(name = "idalskdfj", required = true) Mahasiswa mahasiswa) {
        mahasiswaRepository.delete(mahasiswa);
        return "redirect:/mahasiswa/list";
    }

    @GetMapping("/update")
    public String updateMahasiswa(
            Authentication auth,
            @RequestParam(name = "idalskdfj", required = true) Mahasiswa mahasiswa,
            Model model) {
        model.addAttribute("mhs", mahasiswa);
        return "/mahasiswa/editMahasiswa";
    }

    @GetMapping("/report")
    public ModelAndView showReport() {
        ModelAndView mav = new ModelAndView();
        mav.setViewName("report_DaftarMahasiswa");
        mav.addObject("format", "pdf");
        mav.addObject("datasource", new JREmptyDataSource());
        return mav;
    }

}

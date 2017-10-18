package com.maryanto.dimas.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Data
@ToString(exclude = "listRole")
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "s_roles")
public class Role {

    @Id
    @GeneratedValue
    private Integer id;
    private String nama;
    @OneToMany(mappedBy = "role")
    private List<UserRoles> listRole = new ArrayList<>();
}

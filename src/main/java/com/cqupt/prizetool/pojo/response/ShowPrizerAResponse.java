package com.cqupt.prizetool.pojo.response;

import com.cqupt.prizetool.bean.StudentA;
import lombok.AllArgsConstructor;
import lombok.Data;


import java.util.List;


@Data
@AllArgsConstructor
public class ShowPrizerAResponse {

    private int status;
    private String info;
    private int total;
    private String actId;
    private List<StudentA> data;
}

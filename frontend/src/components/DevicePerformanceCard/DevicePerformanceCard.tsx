import { Card, Stack, Box, Typography, useTheme } from "@mui/material";
import { getClasses } from "./style";
import InfoModal from "../InfoModal/InfoModal";
import { Gauge } from "@mui/x-charts/Gauge";

const DevicePerformanceCard = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Card className={classes.cardBox}>
      <Stack direction="row" alignItems="center">
        <Typography variant="h6">Performance</Typography>
        <Box className={classes.modalBtn}>
          <InfoModal
            content="HandleCount  Name                                  Priority  ProcessId  ThreadCount  WorkingSetSize
0            System Idle Process                   0         0          8            8192
4790         System                                8         4          186          15675392
0            Secure System                         8         76         0            29507584
0            Registry                              8         116        4            45400064
58           smss.exe                              11        500        2            1179648
751          csrss.exe                             13        716        11           5238784
149          wininit.exe                           13        804        2            6017024
863          services.exe                          9         928        6            13516800
70           LsaIso.exe                            8         968        2            3149824
1709         lsass.exe                             9         984        10           27201536
1453         svchost.exe                           8         796        20           30035968
40           fontdrvhost.exe                       8         1028       5            3121152
272          WUDFHost.exe                          8         1112       5            6483968
1461         svchost.exe                           8         1160       14           16355328
335          svchost.exe                           8         1220       6            8728576
108          svchost.exe                           8         1376       1            4878336
158          svchost.exe                           8         1528       1            6348800
400          svchost.exe                           8         1540       7            15503360
260          svchost.exe                           8         1548       6            9461760
278          svchost.exe                           8         1556       2            9281536
211          svchost.exe                           8         1568       2            10276864
1060         svchost.exe                           8         1644       15           15642624
227          svchost.exe                           8         1672       6            8052736
178          IntelCpHDCPSvc.exe                    8         1700       4            7086080
229          svchost.exe                           8         1744       2            6086656
301          svchost.exe                           8         1760       8            15138816
127          svchost.exe                           8         1804       5            5439488
202          svchost.exe                           8         1904       5            7725056
155          IntelCpHeciSvc.exe                    8         1956       4            6766592
343          svchost.exe                           8         1768       11           8642560
150          svchost.exe                           8         2196       2            7442432
122          svchost.exe                           8         2204       1            6053888
448          svchost.exe                           8         2368       7            16871424
243          svchost.exe                           8         2404       6            7319552
187          svchost.exe                           8         2460       4            7671808
236          svchost.exe                           8         2472       5            11956224
271          svchost.exe                           8         2496       3            5566464
297          svchost.exe                           8         2572       5            8122368
0            Memory Compression                    8         2660       58           401350656
211          svchost.exe                           8         2676       9            7335936
190          svchost.exe                           8         2700       2            7712768
188          igfxCUIService.exe                    8         2744       2            8572928
202          svchost.exe                           8         2800       9            8949760
210          svchost.exe                           8         2808       2            8011776
300          AppHelperCap.exe                      8         2820       3            14385152
316          DiagsCap.exe                          8         2856       3            14495744
271          NetworkCap.exe                        8         2880       3            12398592
411          SysInfoCap.exe                        8         2892       9            17145856
870          TouchpointAnalyticsClientService.exe  8         2912       10           48447488
411          svchost.exe                           8         3060       8            16240640
333          svchost.exe                           8         3156       7            20213760
246          svchost.exe                           8         3224       8            7753728
393          svchost.exe                           8         3256       8            13467648
530          svchost.exe                           8         3744       14           20402176
167          svchost.exe                           8         3832       3            7249920
213          svchost.exe                           8         3976       3            9428992
476          svchost.exe                           8         3984       7            10706944
215          svchost.exe                           8         4016       3            11337728
417          spoolsv.exe                           8         3428       7            13262848
449          svchost.exe                           8         3492       12           14475264
187          svchost.exe                           8         3588       6            7667712
306          CxAudioSvc.exe                        8         3656       9            23408640
641          svchost.exe                           8         2972       11           35328000
132          CxUIUSvc64.exe                        8         3740       4            6549504
417          svchost.exe                           8         3888       18           33812480
806          OneApp.IGCC.WinService.exe            8         4128       7            36610048
274          HotkeyServiceDSU.exe                  8         4148       4            15601664
373          svchost.exe                           8         4172       5            10309632
151          jhi_service.exe                       8         4192       2            6635520
426          LMS.exe                               8         4280       6            15769600
347          mongod.exe                            8         4304       34           41902080
210          svchost.exe                           8         4328       6            9158656
117          pg_ctl.exe                            8         4344       2            5939200
258          svchost.exe                           8         4384       3            10395648
173          SECOMN64.exe                          8         4404       2            8871936
149          sqlwriter.exe                         8         4420       2            7720960
136          svchost.exe                           8         4440       3            5476352
1226         MsMpEng.exe                           8         4456       36           236060672
278          WMIRegistrationService.exe            8         4480       2            11206656
383          svchost.exe                           8         4488       6            18104320
359          wslservice.exe                        8         4532       2            15986688
478          XtuService.exe                        8         4612       10           42684416
418          svchost.exe                           8         4776       7            13455360
134          svchost.exe                           8         4916       1            6889472
402          postgres.exe                          8         5160       3            14127104
154          conhost.exe                           8         5180       4            7585792
245          LanWlanWwanSwitchingServiceDSU.exe    8         5408       4            10682368
141          svchost.exe                           8         5652       1            6381568
356          postgres.exe                          8         5784       3            7757824
361          postgres.exe                          8         5836       2            9506816
358          postgres.exe                          8         5848       2            9342976
171          AggregatorHost.exe                    8         5920       4            9654272
142          unsecapp.exe                          8         6000       3            7168000
294          WmiPrvSE.exe                          8         6108       5            14430208
359          postgres.exe                          8         6228       2            8765440
361          postgres.exe                          8         6244       2            8765440
361          postgres.exe                          8         6252       2            8654848
229          NisSrv.exe                            8         6588       5            10559488
254          svchost.exe                           8         2620       7            13905920
287          svchost.exe                           8         7152       10           17104896
366          svchost.exe                           8         7352       8            16261120
269          svchost.exe                           8         7572       1            12857344
232          svchost.exe                           8         7652       7            12656640
191          GoogleCrashHandler.exe                6         9496       3            1875968
172          GoogleCrashHandler64.exe              6         9508       3            1069056
213          svchost.exe                           8         9636       5            7114752
397          svchost.exe                           8         10052      3            23482368
890          SearchIndexer.exe                     8         10152      18           45920256
421          svchost.exe                           8         9896       12           15806464
511          SecurityHealthService.exe             8         3928       8            18296832
293          svchost.exe                           8         12724      5            14508032
158          svchost.exe                           8         10392      1            6692864
416          svchost.exe                           8         13352      11           12480512
220          svchost.exe                           8         14224      1            12582912
246          svchost.exe                           8         3756       7            13090816
224          svchost.exe                           8         13500      8            9998336
308          svchost.exe                           8         1512       3            13512704
323          svchost.exe                           8         11056      4            14278656
428          svchost.exe                           8         9696       11           18673664
219          svchost.exe                           8         10104      4            9908224
336          svchost.exe                           8         14920      10           8609792
680          csrss.exe                             13        13684      13           7249920
276          winlogon.exe                          13        10308      3            11403264
40           fontdrvhost.exe                       8         15384      5            5087232
1466         dwm.exe                               13        15832      19           113713152
772          sihost.exe                            8         6464       15           42684416
358          svchost.exe                           8         16268      4            21803008
146          svchost.exe                           8         6848       3            8777728
509          svchost.exe                           8         2092       5            34263040
297          igfxEM.exe                            8         14384      3            12820480
244          taskhostw.exe                         8         11452      6            12341248
5312         explorer.exe                          8         3184       92           272207872
270          dllhost.exe                           8         6888       5            17522688
315          svchost.exe                           8         7364       12           20897792
1633         SearchHost.exe                        8         12312      56           127012864
963          StartMenuExperienceHost.exe           8         12368      16           90288128
847          RuntimeBroker.exe                     8         12552      25           55402496
851          Widgets.exe                           8         15728      13           49012736
344          RuntimeBroker.exe                     8         2564       3            25206784
257          svchost.exe                           8         9972       5            15400960
374          dllhost.exe                           8         12600      10           17076224
141          UserOOBEBroker.exe                    8         12380      1            8818688
700          ctfmon.exe                            13        11844      12           49926144
2248         ShellExperienceHost.exe               8         15624      22           76881920
574          RuntimeBroker.exe                     8         12920      13           29491200
804          ApplicationFrameHost.exe              8         6604       4            37830656
186          svchost.exe                           8         4808       5            11743232
1619         PhoneExperienceHost.exe               8         648        17           139395072
962          TextInputHost.exe                     13        5756       24           66023424
315          WidgetService.exe                     8         6896       4            20557824
206          RuntimeBroker.exe                     8         14180      2            13598720
186          SecurityHealthSystray.exe             8         7580       1            9744384
980          OneDrive.exe                          8         8800       25           105910272
739          msteams.exe                           8         2980       29           18976768
160          RuntimeBroker.exe                     8         4864       2            10891264
1137         msedgewebview2.exe                    8         15616      45           39329792
150          msedgewebview2.exe                    8         9388       7            7274496
464          msedgewebview2.exe                    10        11288      16           7282688
301          msedgewebview2.exe                    8         6284       13           17170432
174          msedgewebview2.exe                    8         6028       9            6742016
309          msedgewebview2.exe                    8         12488      18           50909184
439          svchost.exe                           8         15456      3            19066880
1138         msedgewebview2.exe                    8         7960       44           5406720
150          msedgewebview2.exe                    8         12884      7            7598080
621          msedgewebview2.exe                    10        4260       16           4259840
301          msedgewebview2.exe                    8         7540       13           1441792
175          msedgewebview2.exe                    8         10700      9            16384
345          msedgewebview2.exe                    4         14024      15           2015232
302          SystemSettingsBroker.exe              8         8688       4            20762624
148          svchost.exe                           8         9556       2            9379840
669          HxTsr.exe                             8         11836      15           15405056
201          RuntimeBroker.exe                     8         11592      2            14671872
1055         HxOutlook.exe                         8         6816       30           2703360
1332         SystemSettings.exe                    8         5140       43           2383872
435          FileCoAuth.exe                        8         9684       7            25214976
1137         Code.exe                              8         14520      43           118542336
238          Code.exe                              8         10016      7            29175808
565          Code.exe                              10        7812       14           625352704
291          Code.exe                              8         5576       12           41857024
789          Code.exe                              8         14144      18           525008896
310          Code.exe                              8         10000      19           159223808
280          Code.exe                              8         8364       18           98852864
232          Code.exe                              8         9120       19           80355328
178          Code.exe                              8         1352       9            112959488
599          Code.exe                              8         3860       14           317407232
175          Code.exe                              8         2636       8            79433728
180          Code.exe                              8         8380       8            83324928
1962         chrome.exe                            8         10772      42           212033536
187          chrome.exe                            8         12744      7            7409664
1077         chrome.exe                            10        7988       19           227610624
343          chrome.exe                            8         8116       16           61997056
212          chrome.exe                            8         12996      10           22454272
92           cmd.exe                               8         13936      1            4866048
140          conhost.exe                           8         13488      2            8089600
220          OpenConsole.exe                       8         13392      6            11550720
882          WindowsTerminal.exe                   8         5928       21           83816448
151          RuntimeBroker.exe                     8         10276      1            10485760
193          node.exe                              8         10060      13           24588288
66           cmd.exe                               8         8652       1            4141056
334          node.exe                              8         2380       14           93286400
234          esbuild.exe                           8         12168      38           28377088
311          backgroundTaskHost.exe                8         3424       12           1773568
550          LockApp.exe                           8         4824       14           53153792
464          RuntimeBroker.exe                     8         11860      8            29618176
121          svchost.exe                           8         11480      4            5533696
240          chrome.exe                            8         3856       9            18604032
1497         msedge.exe                            8         16004      48           112664576
179          msedge.exe                            8         10128      7            7614464
468          msedge.exe                            10        2440       16           37810176
304          msedge.exe                            8         13564      15           34799616
180          msedge.exe                            8         13948      10           17231872
351          msedge.exe                            4         3360       17           65064960
281          msedge.exe                            4         1620       16           48070656
219          msedge.exe                            4         9904       15           24121344
206          msedge.exe                            8         16264      9            17018880
249          msedge.exe                            8         13976      9            21991424
264          RuntimeBroker.exe                     8         6156       3            21356544
315          chrome.exe                            4         3992       16           117800960
136          dllhost.exe                           8         7700       4            7741440
142          svchost.exe                           8         5156       2            6901760
373          chrome.exe                            4         2164       15           122667008
871          WhatsApp.exe                          8         2116       24           50962432
248          RuntimeBroker.exe                     8         14848      1            19865600
330          chrome.exe                            4         14016      15           131940352
387          svchost.exe                           8         15680      7            18132992
176          svchost.exe                           8         3152       5            7692288
1311         Taskmgr.exe                           8         7292       28           129642496
162          svchost.exe                           8         7628       5            11272192
313          WmiPrvSE.exe                          8         15872      10           15114240
341          chrome.exe                            8         8920       16           145805312
240          chrome.exe                            4         6820       13           30248960
181          smartscreen.exe                       8         980        8            10899456
88           cmd.exe                               8         15856      1            5218304
148          conhost.exe                           8         15596      4            8761344
293          OpenConsole.exe                       8         2388       11           15372288
179          WMIC.exe                              8         10112      7            12390400"
          />
        </Box>
      </Stack>

      <Box className={classes.contentBox}>
        <Stack direction="row">
          <Box className={classes.gaugeBox}>
            <Gauge
              width={110}
              height={110}
              value={75}
              startAngle={-110}
              endAngle={110}
              text={({ value, valueMax }) => `${value} / ${valueMax}`}
            />
            <Typography variant="subtitle2" className={classes.gaugeSubtitle}>
              CPU
            </Typography>
          </Box>

          <Box className={classes.gaugeBox}>
            <Gauge
              width={110}
              height={110}
              value={75}
              startAngle={-110}
              endAngle={110}
              text={({ value, valueMax }) => `${value} / ${valueMax}`}
            />
            <Typography variant="subtitle2" className={classes.gaugeSubtitle}>
              Memory
            </Typography>
          </Box>

          <Box className={classes.gaugeBox}>
            <Gauge
              width={110}
              height={110}
              value={75}
              startAngle={-110}
              endAngle={110}
              text={({ value, valueMax }) => `${value} / ${valueMax}`}
            />
            <Typography variant="subtitle2" className={classes.gaugeSubtitle}>
              Disk
            </Typography>
          </Box>
        </Stack>
        <Stack direction="row">
          <Box className={classes.gaugeBox}>
            <Gauge
              width={110}
              height={110}
              value={75}
              startAngle={-110}
              endAngle={110}
              text={({ value, valueMax }) => `${value} / ${valueMax}`}
            />
            <Typography variant="subtitle2" className={classes.gaugeSubtitle}>
              Enthernet
            </Typography>
          </Box>
          <Box className={classes.gaugeBox}>
            <Gauge
              width={110}
              height={110}
              value={75}
              startAngle={-110}
              endAngle={110}
              text={({ value, valueMax }) => `${value} / ${valueMax}`}
            />
            <Typography variant="subtitle2" className={classes.gaugeSubtitle}>
              GPU
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Card>
  );
};

export default DevicePerformanceCard;

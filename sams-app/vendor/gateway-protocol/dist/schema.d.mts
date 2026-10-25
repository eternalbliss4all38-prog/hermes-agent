import { _ as ShutdownEventSchema, a as EventFrame, c as GatewayFrame, d as HelloOkSchema, f as RequestFrame, g as ShutdownEvent, h as ResponseFrameSchema, i as ErrorShapeSchema, l as GatewayFrameSchema, m as ResponseFrame, n as ConnectParamsSchema, o as EventFrameSchema, p as RequestFrameSchema, r as ErrorShape, s as GATEWAY_SERVER_CAPS, t as ConnectParams, u as HelloOk, v as TickEvent, y as TickEventSchema } from "./frames-BPnee-QV.mjs";
import { a as McpAppViewExpiredErrorDetails, c as WizardNotFoundErrorDetails, d as readMissingScopeErrorDetails, i as GatewayErrorDetails, l as isMcpAppViewExpiredError, n as ErrorCodes, o as MissingScopeErrorDetails, r as GatewayErrorDetailCodes, s as UnknownAgentIdErrorDetails, t as ErrorCode, u as readMissingScopeError } from "./gateway-error-details-Btc09cgL.mjs";
import { $ as WorkerHeartbeatResponseFrame, $C as AgentsFilesSetResult, $S as ApprovalTerminalReason, $T as ToolCatalogGroupSchema, $_ as ConversationSendResult, $a as SessionsCompactionBranchResult, $b as BoardWidgetHtmlContentSchema, $c as QuestionResolveParamsSchema, $d as ExecApprovalsNodeSetParams, $f as CronGetParamsSchema, $g as AuditActivityEventV1Schema, $h as TalkSessionOkResult, $i as SessionsViewerPresenceSetResultSchema, $l as NodePendingDrainResultSchema, $m as ChannelsStartParams, $n as TerminalCloseParams, $o as SessionsForkParamsSchema, $p as ConfigApplyParams, $r as TaskSuggestionsCreateResult, $s as SessionDiscussionInfoParamsSchema, $t as PluginCatalogClawHubInstallSchema, $u as GatewaySuspendPrepareBusyResultSchema, $v as SessionsCatalogListParams, $w as SkillsProposalApplyResultSchema, $x as WorkerInferenceCancelResponseFrame, $y as BoardActionParams, A as WORKER_PROTOCOL_FEATURES, AC as AgentKindSchema, AS as ApprovalCancelledReasonSchema, AT as SkillsSearchResult, A_ as AgentsWorkspaceGetResult, Aa as SessionObserverHealthSchema, Ab as BoardTab, Ac as QuestionAnswers, Ad as DevicePairRemoveParamsSchema, Af as WorkerEnvironmentStateSchema, Ag as UsersListResult, Ah as TalkConfigParamsSchema, Ai as SessionMembersListParams, Al as NodeInvokeInputEventSchema, Am as CommandEntrySchema, An as PluginsSessionActionSuccessResultSchema, Ao as SessionsDescribeParams, Ap as SystemAgentSetupActivateResultSchema, Ar as TasksCancelParamsSchema, As as SessionsPreviewParams, At as WorkerTranscriptMessage, Au as ChatHistoryParamsSchema, Av as SessionCatalogDescriptor, Aw as SkillProposalLifecycleEvent, Ax as UiCommandResultSchema, Ay as SessionSuggestionsListParamsSchema, B as WorkerAdmissionFailureReason, BC as AgentsDeleteResultSchema, BS as ApprovalHistoryParamsSchema, BT as SkillsStatusParams, B_ as AgentIdentityResult, Ba as SessionsBranchesListParamsSchema, Bb as BoardViewTicketSchema, Bc as QuestionOption, Bd as DeviceTokenRevokeParamsSchema, Bf as CronRunLogEntry, Bg as UsersSetDisplayNameParams, Bh as TalkSessionCancelOutputParamsSchema, Bi as SessionVisibilitySetParams, Bl as NodePairApproveParams, Bm as ChannelsPairingApproveResult, Bn as PluginsUninstallParamsSchema, Bo as SessionsFilesListParams, Bp as SystemAgentSetupVerifyParamsSchema, Br as TasksListResultSchema, Bs as SessionsSearchHit, Bt as WizardNextParamsSchema, Bu as ChatSendParamsSchema, Bv as SessionCatalogSessionSchema, Bw as SkillsCuratorStatusParams, Bx as SkillsProposalHistoryScanResultSchema, By as SessionTypingParamsSchema, C as WorktreesRemoveResult, CC as TerminalApprovalSnapshotSchema, CS as validateWorkerInferenceTerminalFrame, CT as SkillsProposalUpdateParamsSchema, C_ as ArtifactsListResultSchema, Ca as SessionFileRelevance, Cb as BoardPluginActionParamsSchema, Cc as SecretsReloadParamsSchema, Cd as DevicePairApproveParams, Cf as EnvironmentsStatusParams, Cg as UserProfileSchema, Ch as TalkClientToolCallParams, Ci as SessionMemberAddParams, Cl as NodeDescribeParams, Cm as COMMAND_ARG_NAME_MAX_LENGTH, Cn as PluginsSearchResult, Co as SessionsCompanionStateResult, Cp as SystemAgentChatQuestion, Cr as TerminalUploadParams, Cs as SessionsObserverVisibilityResultSchema, Ct as WorkerTranscriptCommitParamsSchema, Cu as ChatAttachmentSchema, Cv as NonEmptyString, Cw as ModelsProbeParamsSchema, Cx as errorShape, Cy as SessionSuggestionState, D as WORKER_HEARTBEAT_INTERVAL_MS, DS as ApprovalAllowDecision, DT as SkillsProposalsListResultSchema, D_ as AgentsWorkspaceFileSchema, Da as SessionObserverDigest, Db as BoardSizeSchema, Dc as SecretsResolveResult, Dd as DevicePairRejectParams, Df as WorkerEnvironmentMetadata, Dg as UsersLinkEmailResultSchema, Dh as TalkClientTranscriptParams, Di as SessionMemberRemoveParams, Dl as NodeEventResult, Dm as COMMAND_LIST_MAX_ITEMS, Dn as PluginsSessionActionParamsSchema, Do as SessionsCreateResultSchema, Dp as SystemAgentSetupActivateParams, Dr as TaskSummary, Ds as SessionsPluginPatchParamsSchema, Dt as WorkerTranscriptCommitResponseFrameSchema, Du as ChatEvent, Dv as SessionCatalog, Dw as ModelsProbeTargetResultSchema, Dx as UiCommandParams, Dy as SessionSuggestionsAddResult, E as WorktreesRestoreParamsSchema, ES as AllowedApprovalSnapshotSchema, ET as SkillsProposalsListResult, E_ as AgentsWorkspaceFile, Ea as SessionGroupSchema, Eb as BoardSetChatDockCommandSchema, Ec as SecretsResolveParamsSchema, Ed as DevicePairListParamsSchema, Ef as EnvironmentsStatusResultSchema, Eg as UsersLinkEmailResult, Eh as TalkClientToolCallResultSchema, Ei as SessionMemberMutationResultSchema, El as NodeEventParamsSchema, Em as COMMAND_DESCRIPTION_MAX_LENGTH, En as PluginsSessionActionParams, Eo as SessionsCreateResult, Ep as SystemAgentChatResultSchema, Er as TerminalUploadResultSchema, Es as SessionsPluginPatchParams, Et as WorkerTranscriptCommitResponseFrame, Eu as ChatErrorEventSchema, Ev as SessionLabelString, Ew as ModelsProbeTargetResult, Ex as UiCommand, Ey as SessionSuggestionsAddParamsSchema, F as WORKER_RPC_SET_VERSION, FC as AgentsCreateResult, FS as ApprovalGetParams, FT as SkillsSecurityVerdictsResultSchema, F_ as AgentsWorkspaceListResultSchema, Fa as SessionWorktreeInfo, Fb as BoardTabUpdateOpSchema, Fc as QuestionGetResultSchema, Fd as DevicePairSetupCodeParams, Ff as CronDeclarativeAddResult, Fg as UsersSelfResultSchema, Fh as TalkModeParams, Fi as SessionSharingActionSchema, Fl as NodeInvokeRequestEventSchema, Fm as TalkSessionAcknowledgeMarkParams, Fn as PluginsUiDescriptorsParams, Fo as SessionsDiffResultSchema, Fp as SystemAgentSetupDetectParams, Fr as TasksGetResult, Fs as SessionsResolveParamsSchema, Ft as WorkerAdmissionFailureReasonSchema, Fu as ChatMessageGetResultSchema, Fv as SessionCatalogLocatorSchema, Fw as SkillsBinsResultSchema, Fx as UiSidebarCommandSchema, Fy as SessionSuggestionsResolveResult, G as WorkerConnectParams, GC as AgentsFilesGetResult, GS as ApprovalPresentation, GT as SkillsUploadBeginParamsSchema, G_ as ConversationListItem, Ga as SessionsBranchesSwitchResult, Gb as BoardWidgetAppViewResultSchema, Gc as QuestionRequestParamsSchema, Gd as ExecApprovalRequestParams, Gf as CronScratchSetParams, Gg as AuditEventSchema, Gh as TalkSessionCreateParams, Gi as SessionSharingRole, Gl as NodePairRejectParamsSchema, Gm as ChannelsPairingDismissResultSchema, Gn as PluginApprovalResolveParams, Go as SessionsFilesRevealParamsSchema, Gp as SystemChangeKind, Gr as TaskSuggestionResolutionSchema, Gs as SessionsSearchResultSchema, Gt as WizardStartResult, Gu as ChatToolTitlesResult, Gv as SessionsCatalogArchiveResult, Gw as SkillsDetailParamsSchema, Gx as WORKER_INFERENCE_MAX_CONTEXT_MESSAGES, Gy as SessionRow, H as WorkerAdmissionHandshakeSchema, HC as AgentsFileEntrySchema, HS as ApprovalHistoryResultSchema, HT as SkillsUpdateParams, H_ as AgentParamsSchema, Ha as SessionsBranchesListResultSchema, Hb as BoardWidgetAppViewParams, Hc as QuestionRecord, Hd as DeviceTokenRotateParamsSchema, Hf as CronRunsParams, Hg as UsersSetDisplayNameResult, Hh as TalkSessionCancelTurnParamsSchema, Hi as SessionVisibilitySetResult, Hl as NodePairListParams, Hm as ChannelsPairingDismissParams, Hn as PluginsUninstallResultSchema, Ho as SessionsFilesListResult, Hp as SystemAgentSetupVerifyResultSchema, Hr as TaskSuggestionEvent, Hs as SessionsSearchParams, Ht as WizardNextResultSchema, Hu as ChatStatusEventSchema, Hv as SessionCatalogTranscriptItemSchema, Hw as SkillsCuratorStatusResult, Hx as SkillsProposalHistoryStatusParamsSchema, Hy as SessionTypingResultSchema, I as WORKER_TRANSCRIPT_COMMIT_PROTOCOL_FEATURE, IC as AgentsCreateResultSchema, IS as ApprovalGetParamsSchema, IT as SkillsSkillCardParams, I_ as AgentEvent, Ia as SessionWorktreeInfoSchema, Ib as BoardTabsReorderOpSchema, Ic as QuestionListParams, Id as DevicePairSetupCodeParamsSchema, If as CronGetParams, Ig as UsersSetAvatarParams, Ih as TalkModeParamsSchema, Ii as SessionSharingEvent, Il as NodeInvokeResultParams, Im as TalkSessionAcknowledgeMarkParamsSchema, In as PluginsUiDescriptorsParamsSchema, Io as SessionsFilesGetParams, Ip as SystemAgentSetupDetectParamsSchema, Ir as TasksGetResultSchema, Is as SessionsRewindParams, It as WorkerProtocolCloseReasonSchema, Iu as ChatMetadataParams, Iv as SessionCatalogPullRequestSummary, Iw as SkillsCuratorActionParams, Ix as UiSplitCommandSchema, Iy as SessionSuggestionsResolveResultSchema, J as WorkerErrorShape, JC as AgentsFilesListParamsSchema, JS as ApprovalResolveParamsSchema, JT as SkillsUploadCommitParams, J_ as ConversationListParamsSchema, Ja as SessionsCleanupParamsSchema, Jb as BoardWidgetDeclared, Jc as QuestionRequestResult, Jd as ExecApprovalResolveParamsSchema, Jf as CronUpdateParams, Jg as AuditListResult, Jh as TalkSessionCreateResultSchema, Ji as SessionVisibilitySchema, Jl as NodePendingAckParams, Jm as ChannelsPairingListResult, Jn as TerminalAckResultSchema, Jo as SessionsFilesSetParams, Jp as SystemChangeSourceSchema, Jr as TaskSuggestionsAcceptParamsSchema, Js as SessionsUsageParams, Jt as WizardStatusParamsSchema, Ju as LogsTailParamsSchema, Jv as SessionsCatalogContinueParamsSchema, Jw as SkillsInstallParams, Jx as WORKER_INFERENCE_PROTOCOL_FEATURE, Jy as SessionToolOverridesSchema, K as WorkerConnectRequestFrame, KC as AgentsFilesGetResultSchema, KS as ApprovalPresentationSchema, KT as SkillsUploadChunkParams, K_ as ConversationListItemSchema, Ka as SessionsBranchesSwitchResultSchema, Kb as BoardWidgetContent, Kc as QuestionRequestQuestion, Kd as ExecApprovalRequestParamsSchema, Kf as CronScratchSetResult, Kg as AuditListParams, Kh as TalkSessionCreateParamsSchema, Ki as SessionSharingRoleSchema, Kl as NodePairRemoveParams, Km as ChannelsPairingListParams, Kn as PluginApprovalResolveParamsSchema, Ko as SessionsFilesRevealResult, Kp as SystemChangeKindSchema, Kr as TaskSuggestionSchema, Ks as SessionsSendParams, Kt as WizardStartResultSchema, Ku as ChatToolTitlesResultSchema, Kv as SessionsCatalogArchiveResultSchema, Kw as SkillsDetailResult, Kx as WORKER_INFERENCE_MAX_OUTPUT_TOKENS, Ky as SessionRowSchema, L as WORKER_TRANSCRIPT_MAX_BATCH_MESSAGES, LC as AgentsDeleteParams, LS as ApprovalGetResult, LT as SkillsSkillCardParamsSchema, L_ as AgentEventSchema, La as SessionsAbortParams, Lb as BoardTicketEventParamsSchema, Lc as QuestionListParamsSchema, Ld as DevicePairSetupCodeResult, Lf as CronJob, Lg as UsersSetAvatarParamsSchema, Lh as TalkSessionAppendAudioParams, Li as SessionSharingEventSchema, Ll as NodeInvokeResultParamsSchema, Lm as ChannelsPairingAccount, Ln as PluginsUiDescriptorsResult, Lo as SessionsFilesGetParamsSchema, Lp as SystemAgentSetupDetectResult, Lr as TasksListParams, Ls as SessionsRewindParamsSchema, Lt as WizardCancelParams, Lu as ChatMetadataParamsSchema, Lv as SessionCatalogPullRequestSummarySchema, Lw as SkillsCuratorActionParamsSchema, Lx as SkillsProposalHistoryScanParams, Ly as SessionTypingEvent, M as WORKER_PROTOCOL_MAX_FEATURE_LENGTH, MC as AgentSummarySchema, MS as ApprovalDecisionSchema, MT as SkillsSecurityVerdictsParams, M_ as AgentsWorkspaceListParams, Ma as SessionObserverPlanProgressSchema, Mb as BoardTabDeleteOpSchema, Mc as QuestionGetParams, Md as DevicePairRenameParamsSchema, Mf as WorkerTunnelStatusSchema, Mg as UsersSelfParams, Mh as TalkConfigResultSchema, Mi as SessionMembersListResult, Ml as NodeInvokeParamsSchema, Mm as CommandsListParamsSchema, Mn as PluginsSetEnabledParamsSchema, Mo as SessionsDiffParams, Mp as SystemAgentSetupAuthStartParamsSchema, Mr as TasksCancelResultSchema, Ms as SessionsResetParams, Mt as WORKER_PROTOCOL_MAX_FRAME_ID_LENGTH, Mu as ChatInjectParamsSchema, Mv as SessionCatalogHost, Mw as SkillsBinsParams, Mx as UiFocusCommandSchema, My as SessionSuggestionsListResultSchema, N as WORKER_PROTOCOL_MAX_METHOD_LENGTH, NC as AgentsCreateParams, NS as ApprovalDeniedReasonSchema, NT as SkillsSecurityVerdictsParamsSchema, N_ as AgentsWorkspaceListParamsSchema, Na as SessionOperationEvent, Nb as BoardTabIdSchema, Nc as QuestionGetParamsSchema, Nd as DevicePairRequestedEventSchema, Nf as CronAddParams, Ng as UsersSelfParamsSchema, Nh as TalkEvent, Ni as SessionMembersListResultSchema, Nl as NodeInvokeProgressParams, Nm as CommandsListResult, Nn as PluginsSetEnabledResult, No as SessionsDiffParamsSchema, Np as SystemAgentSetupAuthStartResult, Nr as TasksGetParams, Ns as SessionsResetParamsSchema, Nt as WORKER_PROTOCOL_MAX_IDENTIFIER_LENGTH, Nu as ChatMessageGetParamsSchema, Nv as SessionCatalogHostSchema, Nw as SkillsBinsParamsSchema, Nx as UiNavigateCommandSchema, Ny as SessionSuggestionsResolveParams, O as WORKER_LAUNCH_V2_PROTOCOL_FEATURE, OS as ApprovalAllowDecisionSchema, OT as SkillsSearchParams, O_ as AgentsWorkspaceGetParams, Oa as SessionObserverDigestSchema, Ob as BoardSnapshot, Oc as SecretsResolveResultSchema, Od as DevicePairRejectParamsSchema, Of as WorkerEnvironmentMetadataSchema, Og as UsersListParams, Oh as TalkClientTranscriptParamsSchema, Oi as SessionMemberRemoveParamsSchema, Ol as NodeEventResultSchema, Om as COMMAND_NAME_MAX_LENGTH, On as PluginsSessionActionResult, Oo as SessionsDeleteParams, Op as SystemAgentSetupActivateParamsSchema, Or as TaskSummarySchema, Os as SessionsPluginPatchResult, Ot as WorkerTranscriptCommitResult, Ou as ChatEventSchema, Ov as SessionCatalogCapabilities, Ow as SkillProposalEvaluation, Ox as UiCommandParamsSchema, Oy as SessionSuggestionsAddResultSchema, P as WORKER_PROTOCOL_METHODS, PC as AgentsCreateParamsSchema, PS as ApprovalExpiredReasonSchema, PT as SkillsSecurityVerdictsResult, P_ as AgentsWorkspaceListResult, Pa as SessionOperationEventSchema, Pb as BoardTabSchema, Pc as QuestionGetResult, Pd as DevicePairResolvedEventSchema, Pf as CronAddResult, Pg as UsersSelfResult, Ph as TalkEventSchema, Pi as SessionSharingAction, Pl as NodeInvokeProgressParamsSchema, Pm as CommandsListResultSchema, Pn as PluginsSetEnabledResultSchema, Po as SessionsDiffResult, Pp as SystemAgentSetupAuthStartResultSchema, Pr as TasksGetParamsSchema, Ps as SessionsResolveParams, Pt as WORKER_PROTOCOL_MAX_PAYLOAD_BYTES, Pu as ChatMessageGetResult, Pv as SessionCatalogLocator, Pw as SkillsBinsResult, Px as UiPanelCommandSchema, Py as SessionSuggestionsResolveParamsSchema, Q as WorkerHeartbeatRequestFrameSchema, QC as AgentsFilesSetParamsSchema, QS as ApprovalSnapshotSchema, QT as ToolCatalogGroup, Q_ as ConversationSendParamsSchema, Qa as SessionsCompactionBranchParamsSchema, Qb as BoardWidgetHeightModeSchema, Qc as QuestionResolveParams, Qd as ExecApprovalsNodeGetParamsSchema, Qf as CronDeliverySchema, Qg as AuditActivityEventV1, Qh as TalkSessionJoinResultSchema, Qi as SessionsViewerPresenceSetResult, Ql as NodePendingDrainResult, Qm as ChannelsLogoutParamsSchema, Qn as TerminalAttachResultSchema, Qo as SessionsForkParams, Qp as SystemChangesListResultSchema, Qr as TaskSuggestionsCreateParamsSchema, Qs as SessionDiscussionInfoParams, Qt as WizardStepSchema, Qu as GatewaySuspendBlockerSchema, Qv as SessionsCatalogHostEventSchema, Qw as SkillsProposalApplyResult, Qx as WorkerInferenceCancelRequestFrameSchema, Qy as BOARD_WIDGET_TOOL_MAX_LENGTH, R as WORKER_TRANSCRIPT_MAX_CONTENT_PARTS, RC as AgentsDeleteParamsSchema, RS as ApprovalGetResultSchema, RT as SkillsSkillCardResult, R_ as AgentIdentityParams, Ra as SessionsAbortParamsSchema, Rb as BoardUpdateParams, Rc as QuestionListResult, Rd as DevicePairSetupCodeResultSchema, Rf as CronListParams, Rg as UsersSetAvatarResult, Rh as TalkSessionAppendAudioParamsSchema, Ri as SessionSharingIdentity, Rl as NodeListParams, Rm as ChannelsPairingApproveParams, Rn as PluginsUiDescriptorsResultSchema, Ro as SessionsFilesGetResult, Rp as SystemAgentSetupDetectResultSchema, Rr as TasksListParamsSchema, Rs as SessionsRewindResult, Rt as WizardCancelParamsSchema, Ru as ChatRunStartupPhase, Rv as SessionCatalogSchema, Rw as SkillsCuratorActionResult, Rx as SkillsProposalHistoryScanParamsSchema, Ry as SessionTypingEventSchema, S as WorktreesRemoveParamsSchema, SC as TerminalApprovalSnapshot, SS as validateWorkerInferenceStartParams, ST as SkillsProposalUpdateParams, S_ as ArtifactsListResult, Sa as SessionFilePreviewKindSchema, Sb as BoardOpSchema, Sc as isCloudWorkerPlacementState, Sd as FsListDirResultSchema, Sf as EnvironmentsListResultSchema, Sg as UserProfileAvatarMimeSchema, Sh as TalkClientSteerParamsSchema, Si as SessionMember, Sl as WebPushVapidPublicKeyParamsSchema, Sm as COMMAND_ARG_DESCRIPTION_MAX_LENGTH, Sn as PluginsSearchParamsSchema, So as SessionsCompanionStateParamsSchema, Sp as SystemAgentChatParamsSchema, Sr as TerminalTextResultSchema, Ss as SessionsObserverVisibilityResult, St as WorkerTranscriptCommitParams, Su as ChatAbortedEventSchema, Sv as InputProvenanceSchema, Sw as ModelsProbeParams, Sx as buildMissingScopeErrorDetails, Sy as SessionSuggestionSchema, T as WorktreesRestoreParams, TC as isWellFormedApprovalId, TS as AllowedApprovalSnapshot, TT as SkillsProposalsListParamsSchema, T_ as AgentsWorkspaceEntrySchema, Ta as SessionGroup, Tb as BoardPromptAuthorizeParamsSchema, Tc as SecretsResolveParams, Td as DevicePairListParams, Tf as EnvironmentsStatusResult, Tg as UsersLinkEmailParamsSchema, Th as TalkClientToolCallResult, Ti as SessionMemberMutationResult, Tl as NodeEventParams, Tm as COMMAND_CHOICE_VALUE_MAX_LENGTH, Tn as PluginsSessionActionFailureResultSchema, To as SessionsCreateParams, Tp as SystemAgentChatResult, Tr as TerminalUploadResult, Ts as SessionsPatchParamsSchema, Tt as WorkerTranscriptCommitRequestFrameSchema, Tu as ChatDeltaEventSchema, Tv as SecretRefSchema, Tw as ModelsProbeResultSchema, Tx as UiClosePaneCommandSchema, Ty as SessionSuggestionsAddParams, U as WorkerAdmissionResponseFrame, UC as AgentsFilesGetParams, US as ApprovalKind, UT as SkillsUpdateParamsSchema, U_ as AgentWaitParams, Ua as SessionsBranchesSwitchParams, Ub as BoardWidgetAppViewParamsSchema, Uc as QuestionRecordSchema, Ud as ExecApprovalGetParams, Uf as CronScratchGetParams, Ug as UsersSetDisplayNameResultSchema, Uh as TalkSessionCloseParams, Ui as SessionVisibilitySetResultSchema, Ul as NodePairListParamsSchema, Um as ChannelsPairingDismissParamsSchema, Un as PluginApprovalRequestParams, Uo as SessionsFilesListResultSchema, Up as SystemChangeEntry, Ur as TaskSuggestionEventSchema, Us as SessionsSearchParamsSchema, Ut as WizardStartParams, Uu as ChatToolTitlesParams, Uv as SessionsCatalogArchiveParams, Uw as SkillsCuratorStatusResultSchema, Ux as validateSkillsProposalHistoryScanParams, Uy as SessionCreatedActor, V as WorkerAdmissionHandshake, VC as AgentsFileEntry, VS as ApprovalHistoryResult, VT as SkillsStatusParamsSchema, V_ as AgentIdentityResultSchema, Va as SessionsBranchesListResult, Vb as BoardWidget, Vc as QuestionOptionSchema, Vd as DeviceTokenRotateParams, Vf as CronRunParams, Vg as UsersSetDisplayNameParamsSchema, Vh as TalkSessionCancelTurnParams, Vi as SessionVisibilitySetParamsSchema, Vl as NodePairApproveParamsSchema, Vm as ChannelsPairingApproveResultSchema, Vn as PluginsUninstallResult, Vo as SessionsFilesListParamsSchema, Vp as SystemAgentSetupVerifyResult, Vr as TaskSuggestion, Vs as SessionsSearchHitSchema, Vt as WizardNextResult, Vu as ChatStatusEvent, Vv as SessionCatalogTranscriptItem, Vw as SkillsCuratorStatusParamsSchema, Vx as SkillsProposalHistoryStatusParams, Vy as SessionTypingResult, W as WorkerAdmissionResponseFrameSchema, WC as AgentsFilesGetParamsSchema, WS as ApprovalKindSchema, WT as SkillsUploadBeginParams, W_ as AgentWaitParamsSchema, Wa as SessionsBranchesSwitchParamsSchema, Wb as BoardWidgetAppViewResult, Wc as QuestionRequestParams, Wd as ExecApprovalGetParamsSchema, Wf as CronScratchGetResult, Wg as AuditEvent, Wh as TalkSessionCloseParamsSchema, Wi as SESSION_VISIBILITY_VALUES, Wl as NodePairRejectParams, Wm as ChannelsPairingDismissResult, Wn as PluginApprovalRequestParamsSchema, Wo as SessionsFilesRevealParams, Wp as SystemChangeEntrySchema, Wr as TaskSuggestionResolution, Ws as SessionsSearchResult, Wt as WizardStartParamsSchema, Wu as ChatToolTitlesParamsSchema, Wv as SessionsCatalogArchiveParamsSchema, Ww as SkillsDetailParams, Wx as validateSkillsProposalHistoryStatusParams, Wy as SessionCreatedActorSchema, X as WorkerHeartbeatParamsSchema, XC as AgentsFilesListResultSchema, XS as ApprovalResolveResultSchema, XT as ToolCatalogEntry, X_ as ConversationListResultSchema, Xa as SessionsCompactParamsSchema, Xb as BoardWidgetGrantParams, Xc as QuestionRequestedEvent, Xd as ExecApprovalsGetParamsSchema, Xf as CronAddResultSchema, Xg as AuditActivityAgentRunV1, Xh as TalkSessionJoinParamsSchema, Xi as SessionsViewerPresenceSetParams, Xl as NodePendingDrainParams, Xm as ChannelsPairingRequest, Xn as TerminalAttachParamsSchema, Xo as SessionsFilesSetResult, Xp as SystemChangesListParamsSchema, Xr as TaskSuggestionsAcceptResultSchema, Xs as SessionsCreateParamsSchema, Xt as WizardStatusResultSchema, Xu as LogsTailResultSchema, Xv as SessionsCatalogContinueResultSchema, Xw as SkillsProposalActionParams, Xx as WorkerInferenceCancelParams, Xy as BOARD_CRON_TRIGGER_PREFIX, Y as WorkerHeartbeatParams, YC as AgentsFilesListResult, YS as ApprovalResolveResult, YT as SkillsUploadCommitParamsSchema, Y_ as ConversationListResult, Ya as SessionsCompactParams, Yb as BoardWidgetDeclaredSchema, Yc as QuestionRequestResultSchema, Yd as ExecApprovalsGetParams, Yf as CronAddParamsSchema, Yg as AuditListResultSchema, Yh as TalkSessionJoinParams, Yi as SESSION_VIEWER_PRESENCE_MAX_KEYS, Yl as NodePendingAckParamsSchema, Ym as ChannelsPairingListResultSchema, Yn as TerminalAttachParams, Yo as SessionsFilesSetParamsSchema, Yp as SystemChangesListParams, Yr as TaskSuggestionsAcceptResult, Ys as SessionsUsageParamsSchema, Yt as WizardStatusResult, Yu as LogsTailResult, Yv as SessionsCatalogContinueResult, Yw as SkillsInstallParamsSchema, Yx as WORKER_PROTOCOL_MAX_INFERENCE_PAYLOAD_BYTES, Yy as BOARD_CRON_JOB_ID_MAX_LENGTH, Z as WorkerHeartbeatRequestFrame, ZC as AgentsFilesSetParams, ZS as ApprovalSnapshot, ZT as ToolCatalogEntrySchema, Z_ as ConversationSendParams, Za as SessionsCompactionBranchParams, Zb as BoardWidgetGrantParamsSchema, Zc as QuestionRequestedEventSchema, Zd as ExecApprovalsNodeGetParams, Zf as CronDeclarativeAddResultSchema, Zg as AuditActivityAgentRunV1Schema, Zh as TalkSessionJoinResult, Zi as SessionsViewerPresenceSetParamsSchema, Zl as NodePendingDrainParamsSchema, Zm as ChannelsLogoutParams, Zn as TerminalAttachResult, Zo as SessionsFilesSetResultSchema, Zp as SystemChangesListResult, Zr as TaskSuggestionsCreateParams, Zs as SessionDiscussionInfo, Zt as WizardStep, Zu as GatewaySuspendBlocker, Zv as SessionsCatalogHostEvent, Zw as SkillsProposalActionParamsSchema, Zx as WorkerInferenceCancelRequestFrame, Zy as BOARD_DATA_BINDING_ID_MAX_LENGTH, _ as WorktreesListParams, _C as SessionApprovalEventSchema, _E as ToolsInvokeParams, _S as WorkerInferenceTerminalFrame, _T as SkillsProposalRequestRevisionParamsSchema, __ as ArtifactsGetParamsSchema, _a as SessionFileEntry, _b as BoardGetParamsSchema, _c as SessionsReclaimParams, _d as FsDirEntry, _f as EnvironmentsDestroyResult, _g as WebLoginStartParams, _h as TalkClientCreateResult, _i as PresenceEntrySchema, _l as WebPushTestParams, _m as UpdateStatusParams, _n as PluginsRefreshParams, _o as SessionsCompanionResetParams, _p as SystemAgentChatHistoryResult, _r as TerminalSessionInfo, _s as SessionsMessagesSubscribeParamsSchema, _t as WorkerProtocolCloseReason, _u as NodeSkillDescriptorSchema, _v as WakeParamsSchema, _w as ModelsAuthStatusParamsSchema, _x as GatewayErrorDetailsSchema, _y as SessionSuggestionActionSchema, a as WorktreeRepositoryStatus, aC as ExecApprovalPresentation, aE as ToolsCatalogResultSchema, aS as WorkerInferenceEventFrame, aT as SkillsProposalEvaluateResultSchema, a_ as AuditActivityListResultSchema, aa as SessionCompanionExchange, ab as BoardChatDockSchema, ac as SessionDiscussionOpenResult, ad as GatewaySuspendResumeParams, af as ExecApprovalsSnapshot, ag as TalkSessionTurnParams, ah as ChannelsStopParams, ai as TaskSuggestionsListParams, al as QuestionStatus, am as ConfigSchemaLookupParams, an as PluginControlUiDescriptorSchema, ao as SessionsCompactionListParams, ap as CronRunLogEntrySchema, ar as TerminalExitEvent, as as SessionsGroupsListParamsSchema, at as WorkerLiveEventErrorDetailsSchema, au as NodePluginToolDescriptorSchema, av as ConversationTurnParams, aw as AgentsUpdateParams, ax as BoardWidgetNameSchema, ay as SessionsCatalogReadResult, b as WorktreesListResultSchema, bC as SystemAgentApprovalPresentation, bE as ToolsInvokeResultSchema, bS as validateWorkerInferenceCancelParams, bT as SkillsProposalReviseParams, b_ as ArtifactsListParams, ba as SessionFileKindSchema, bb as BoardMcpAppDescriptorSchema, bc as SessionsReclaimResultSchema, bd as FsListDirParamsSchema, bf as EnvironmentsListParamsSchema, bg as WebLoginWaitParamsSchema, bh as TalkClientMutationResultSchema, bi as StateVersion, bl as WebPushUnsubscribeParamsSchema, bm as COMMAND_ARGS_MAX_ITEMS, bn as PluginsRefreshResultSchema, bo as SessionsCompanionResetResultSchema, bp as SystemAgentChatHistoryTurnSchema, br as TerminalTextParamsSchema, bs as SessionsObserverVisibilityParams, bt as WorkerTranscriptCommitErrorShape, bu as ChatAbortParams, bv as GatewayClientIdSchema, bw as ModelsListResult, bx as UnknownAgentIdErrorDetailsSchema, by as SessionSuggestionResolution, c as WorktreesBranchesParamsSchema, cC as ExpiredApprovalSnapshotSchema, cE as ToolsEffectiveGroup, cS as WorkerInferenceModelRefSchema, cT as SkillsProposalEventsListResult, c_ as AuditActivityToolActionV1, ca as SessionDiffFileSchema, cb as BoardCommandEventSchema, cc as SessionDiscussionStateSchema, cd as GatewaySuspendResumeResultSchema, cf as EnvironmentStatusSchema, cg as TalkSessionTurnResultSchema, ch as TalkAgentControlResultSchema, ci as TaskSuggestionsListResultSchema, cl as QuestionWaitAnswerParamsSchema, cm as ConfigSchemaLookupResultSchema, cn as PluginSearchResultEntrySchema, co as SessionsCompactionListResultSchema, cp as CronScratchGetParamsSchema, cr as TerminalInputParamsSchema, cs as SessionsGroupsMutationResult, ct as WorkerLiveEventParams, cu as NodePresenceActivityPayload, cv as ConversationTurnReplySchema, cw as AgentsUpdateResultSchema, cx as BoardWidgetPluginPropsSchema, cy as MemoryMigrationItem, d as WorktreesCreateParams, dC as PendingSessionApprovalEventSchema, dE as ToolsEffectiveNoticeSchema, dS as WorkerInferenceStartParams, dT as SkillsProposalInspectParamsSchema, d_ as ArtifactSummarySchema, da as SessionFileBrowserEntry, db as BoardDataReadParams, dc as SessionPlacementSchema, dd as GatewaySuspendStatusReadyResultSchema, df as EnvironmentsCreateParams, dg as TalkSpeakResult, dh as TalkCatalogResult, di as validateSystemEventParams, dl as PushTestParams, dm as ConfigSchemaResponse, dn as PluginsInstallResult, do as SessionsCompactionRestoreResult, dp as CronScratchSetParamsSchema, dr as TerminalOpenParams, ds as SessionsGroupsPutParamsSchema, dt as WorkerLiveEventRequestFrameSchema, du as NodePresenceAlivePayloadSchema, dv as MessageActionParams, dw as GatewayAgentRuntime, dx as BoardWidgetPutContentSchema, dy as MigrationsMemoryApplyParamsSchema, eC as ApprovalTerminalReasonSchema, eE as ToolCatalogProfile, eS as WorkerInferenceCancelResponseFrameSchema, eT as SkillsProposalCreateParams, e_ as AuditActivityInboundMessageV1, ea as SESSION_OBSERVER_HEALTH_VALUES, eb as BoardActionParamsSchema, ec as SessionDiscussionInfoResult, ed as GatewaySuspendPrepareParams, ef as ExecApprovalsNodeSetParamsSchema, eg as TalkSessionOkResultSchema, eh as ChannelsStartParamsSchema, ei as TaskSuggestionsCreateResultSchema, el as QuestionResolveResult, em as ConfigApplyParamsSchema, en as PluginCatalogEntry, eo as SessionsCompactionBranchResultSchema, ep as CronJobSchema, er as TerminalCloseParamsSchema, es as SessionsForkResult, et as WorkerHeartbeatResponseFrameSchema, eu as NodePendingEnqueueParams, ev as ConversationSendResultSchema, ew as AgentsFilesSetResultSchema, ex as BoardWidgetMaterializedContent, ey as SessionsCatalogListParamsSchema, f as WorktreesCreateParamsSchema, fC as PluginApprovalPresentation, fE as ToolsEffectiveParams, fS as WorkerInferenceStartRequestFrame, fT as SkillsProposalInspectResult, f_ as ArtifactsDownloadParams, fa as SessionFileBrowserEntrySchema, fb as BoardDataReadParamsSchema, fc as SessionPlacementStateSchema, fd as GatewaySuspendStatusResult, ff as EnvironmentsCreateParamsSchema, fg as TalkSpeakResultSchema, fh as TalkCatalogResultSchema, fi as SystemInfoParams, fl as PushTestParamsSchema, fm as ConfigSchemaResponseSchema, fn as PluginsInstallResultSchema, fo as SessionsCompactionRestoreResultSchema, fp as CronScratchSetResultSchema, fr as TerminalOpenParamsSchema, fs as SessionsGroupsRenameParams, ft as WorkerLiveEventResponseFrame, fu as NodePresenceAliveReason, fv as MessageActionParamsSchema, fw as ModelChoice, fx as BoardWidgetPutParams, fy as MigrationsMemoryApplyResult, g as WorktreesGcResultSchema, gC as SessionApprovalEvent, gE as ToolsInvokeErrorSchema, gS as WorkerInferenceStartResult, gT as SkillsProposalRequestRevisionParams, g_ as ArtifactsGetParams, ga as SessionFileContentEncodingSchema, gb as BoardGetParams, gc as SessionsDispatchResultSchema, gd as GatewaySuspendTaskBlockerSchema, gf as EnvironmentsDestroyParamsSchema, gg as TtsSpeakResultSchema, gh as TalkClientCreateParamsSchema, gi as PresenceEntry, gl as WebPushSubscribeParamsSchema, gm as UpdateRunParamsSchema, gn as PluginsListResultSchema, go as SessionsCompanionAskResultSchema, gp as SystemAgentChatHistoryParamsSchema, gr as TerminalResizeParamsSchema, gs as SessionsMessagesSubscribeParams, gt as WorkerLiveEventSchema, gu as NodeSkillDescriptor, gv as WakeParams, gw as ModelsAuthStatusParams, gx as BoardWidgetSchema, gy as SessionSuggestionAction, h as WorktreesGcResult, hC as PluginApprovalSeveritySchema, hE as ToolsEffectiveResultSchema, hS as WorkerInferenceStartResponseFrameSchema, hT as SkillsProposalRecordResultSchema, h_ as ArtifactsDownloadResultSchema, ha as SessionFileContentEncoding, hb as BoardFocusTabCommandSchema, hc as SessionsDispatchResult, hd as GatewaySuspendTaskBlocker, hf as EnvironmentsDestroyParams, hg as TtsSpeakResult, hh as TalkClientCreateParams, hi as SystemInfoResultSchema, hl as WebPushSubscribeParams, hm as UpdateRunParams, hn as PluginsListResult, ho as SessionsCompanionAskResult, hp as SystemAgentChatHistoryParams, hr as TerminalResizeParams, hs as SessionsListParamsSchema, ht as WorkerLiveEventResultSchema, hu as NodeRenameParamsSchema, hv as SendParamsSchema, hw as ModelsAuthLogoutParamsSchema, hx as BoardWidgetResizeOpSchema, hy as SessionSuggestion, i as WorktreeRecordSchema, iC as DeniedApprovalSnapshotSchema, iE as ToolsCatalogResult, iS as WorkerInferenceErrorShape, iT as SkillsProposalEvaluateResult, i_ as AuditActivityListResult, ia as SessionCompactionCheckpointSchema, ib as BoardChangedEventSchema, ic as SessionDiscussionOpenParamsSchema, id as GatewaySuspendPrepareResultSchema, if as ExecApprovalsSetParamsSchema, ig as TalkSessionSubmitToolResultParamsSchema, ih as ChannelsStatusResultSchema, ii as TaskSuggestionsDismissResultSchema, il as QuestionSchema, im as ConfigPatchParamsSchema, in as PluginControlUiDescriptor, io as SessionsCompactionGetResultSchema, ip as CronRemoveParamsSchema, ir as TerminalEventSchema, is as SessionsGroupsListParams, it as WorkerLiveEventErrorDetails, iu as NodePluginToolDescriptor, iv as ConversationTurnCancelResultSchema, iw as AgentsListResultSchema, ix as BoardWidgetMoveOpSchema, iy as SessionsCatalogReadParamsSchema, j as WORKER_PROTOCOL_MAX_FEATURES, jC as AgentSummary, jS as ApprovalDecision, jT as SkillsSearchResultSchema, j_ as AgentsWorkspaceGetResultSchema, ja as SessionObserverPlanProgress, jb as BoardTabCreateOpSchema, jc as QuestionAnswersSchema, jd as DevicePairRenameParams, jf as WorkerTunnelStatus, jg as UsersListResultSchema, jh as TalkConfigResult, ji as SessionMembersListParamsSchema, jl as NodeInvokeParams, jm as CommandsListParams, jn as PluginsSetEnabledParams, jo as SessionsDescribeParamsSchema, jp as SystemAgentSetupAuthStartParams, jr as TasksCancelResult, js as SessionsPreviewParamsSchema, jt as WorkerTranscriptMessageSchema, ju as ChatInjectParams, jv as SessionCatalogDescriptorSchema, jw as SkillProposalLifecycleEventSchema, jx as UiCommandSchema, jy as SessionSuggestionsListResult, k as WORKER_LIVE_EVENT_PROTOCOL_FEATURE, kC as AgentKind, kS as ApprovalAllowedReasonSchema, kT as SkillsSearchParamsSchema, k_ as AgentsWorkspaceGetParamsSchema, ka as SessionObserverHealth, kb as BoardSnapshotSchema, kc as Question, kd as DevicePairRemoveParams, kf as WorkerEnvironmentState, kg as UsersListParamsSchema, kh as TalkConfigParams, ki as SessionMemberSchema, kl as NodeInvokeInputEvent, km as CommandEntry, kn as PluginsSessionActionResultSchema, ko as SessionsDeleteParamsSchema, kp as SystemAgentSetupActivateResult, kr as TasksCancelParams, ks as SessionsPluginPatchResultSchema, kt as WorkerTranscriptCommitResultSchema, ku as ChatFinalEventSchema, kv as SessionCatalogCapabilitiesSchema, kw as SkillProposalEvaluationSchema, kx as UiCommandResult, ky as SessionSuggestionsListParams, l as WorktreesBranchesResult, lC as PendingApprovalSnapshot, lE as ToolsEffectiveGroupSchema, lS as WorkerInferenceOptions, lT as SkillsProposalEventsListResultSchema, l_ as AuditActivityToolActionV1Schema, la as SessionDiffFileStatus, lb as BoardCommandSchema, lc as SessionPlacement, ld as GatewaySuspendStatusParams, lf as EnvironmentSummary, lg as TalkSpeakParams, lh as TalkCatalogParams, li as SYSTEM_PRESENCE_CLEAR_LAST_INPUT_TAG, ll as QuestionWaitAnswerResult, lm as ConfigSchemaParams, ln as PluginsInstallParams, lo as SessionsCompactionRestoreParams, lp as CronScratchGetResultSchema, lr as TerminalListResult, ls as SessionsGroupsMutationResultSchema, lt as WorkerLiveEventParamsSchema, lu as NodePresenceActivityPayloadSchema, lv as ConversationTurnResult, lw as AuthProbeStatus, lx as BoardWidgetPresentationSchema, ly as MemoryMigrationProviderPlan, m as WorktreesGcParamsSchema, mC as PluginApprovalSeverity, mE as ToolsEffectiveResult, mS as WorkerInferenceStartResponseFrame, mT as SkillsProposalRecordResult, m_ as ArtifactsDownloadResult, ma as SessionFileBrowserResultSchema, mb as BoardEventParamsSchema, mc as SessionsDispatchParamsSchema, md as GatewaySuspendStatusRunningResultSchema, mf as EnvironmentsCreateResultSchema, mg as TtsSpeakParamsSchema, mh as TalkClientCloseParamsSchema, mi as SystemInfoResult, ml as PushTestResultSchema, mm as ConfigSetParamsSchema, mn as PluginsListParamsSchema, mo as SessionsCompanionAskParamsSchema, mp as CronUpdateParamsSchema, mr as TerminalOpenResultSchema, ms as SessionsListParams, mt as WorkerLiveEventResult, mu as NodeRenameParams, mv as PollParamsSchema, mw as ModelsAuthLogoutParams, mx as BoardWidgetRemoveOpSchema, my as MigrationsMemoryPlanResult, n as WorktreeBranchSchema, nC as CancelledApprovalSnapshotSchema, nE as ToolsCatalogParams, nS as WorkerInferenceContext, nT as SkillsProposalEvaluateParams, n_ as AuditActivityListParams, na as SessionBranchSchema, nb as BoardCanvasDocumentSourceSchema, nc as SessionDiscussionInfoSchema, nd as GatewaySuspendPrepareReadyResultSchema, nf as ExecApprovalsNodeSnapshotSchema, ng as TalkSessionSteerParamsSchema, nh as ChannelsStatusParamsSchema, ni as TaskSuggestionsDismissParamsSchema, nl as QuestionResolvedEvent, nm as ConfigGetParamsSchema, nn as PluginCatalogInstallActionSchema, no as SessionsCompactionGetParamsSchema, np as CronListParamsSchema, nr as TerminalDataEventSchema, ns as SessionsGroupsDeleteParams, nt as WorkerHelloOk, nu as NodePendingEnqueueResult, nv as ConversationTurnCancelParamsSchema, nw as AgentsListParamsSchema, nx as BoardWidgetMcpAppContentSchema, ny as SessionsCatalogListResultSchema, o as WorktreeRepositoryStatusSchema, oC as ExecApprovalPresentationSchema, oE as ToolsEffectiveEntry, oS as WorkerInferenceEventParams, oT as SkillsProposalEventsListParams, o_ as AuditActivityOutboundMessageV1, oa as SessionCompanionExchangeSchema, ob as BoardCommand, oc as SessionDiscussionOpenResultSchema, od as GatewaySuspendResumeParamsSchema, of as ExecApprovalsSnapshotSchema, og as TalkSessionTurnParamsSchema, oh as ChannelsStopParamsSchema, oi as TaskSuggestionsListParamsSchema, ol as QuestionStatusSchema, om as ConfigSchemaLookupParamsSchema, on as PluginJsonValueSchema, oo as SessionsCompactionListParamsSchema, op as CronRunParamsSchema, or as TerminalExitEventSchema, os as SessionsGroupsListResult, ot as WorkerLiveEventErrorShape, ou as NodePluginToolsUpdateParams, ov as ConversationTurnParamsSchema, ow as AgentsUpdateParamsSchema, ox as BoardWidgetPluginContentSchema, oy as SessionsCatalogReadResultSchema, p as WorktreesGcParams, pC as PluginApprovalPresentationSchema, pE as ToolsEffectiveParamsSchema, pS as WorkerInferenceStartRequestFrameSchema, pT as SkillsProposalInspectResultSchema, p_ as ArtifactsDownloadParamsSchema, pa as SessionFileBrowserResult, pb as BoardEventParams, pc as SessionsDispatchParams, pd as GatewaySuspendStatusResultSchema, pf as EnvironmentsCreateResult, pg as TtsSpeakParams, ph as TalkClientCloseParams, pi as SystemInfoParamsSchema, pl as PushTestResult, pm as ConfigSetParams, pn as PluginsListParams, po as SessionsCompanionAskParams, pp as CronStatusParamsSchema, pr as TerminalOpenResult, ps as SessionsGroupsRenameParamsSchema, pt as WorkerLiveEventResponseFrameSchema, pu as NodePresenceAliveReasonSchema, pv as PollParams, pw as ModelChoiceSchema, px as BoardWidgetPutParamsSchema, py as MigrationsMemoryPlanParamsSchema, q as WorkerConnectRequestFrameSchema, qC as AgentsFilesListParams, qS as ApprovalResolveParams, qT as SkillsUploadChunkParamsSchema, q_ as ConversationListParams, qa as SessionsCleanupParams, qb as BoardWidgetContentSchema, qc as QuestionRequestQuestionSchema, qd as ExecApprovalResolveParams, qf as CronStatusParams, qg as AuditListParamsSchema, qh as TalkSessionCreateResult, qi as SessionVisibility, ql as NodePairRemoveParamsSchema, qm as ChannelsPairingListParamsSchema, qn as TerminalAckResult, qo as SessionsFilesRevealResultSchema, qp as SystemChangeSource, qr as TaskSuggestionsAcceptParams, qs as SessionsSendParamsSchema, qt as WizardStatusParams, qu as LogsTailParams, qv as SessionsCatalogContinueParams, qw as SkillsDetailResultSchema, qx as WORKER_INFERENCE_METHODS, qy as SessionToolOverrides, r as WorktreeRecord, rC as DeniedApprovalSnapshot, rE as ToolsCatalogParamsSchema, rS as WorkerInferenceErrorReason, rT as SkillsProposalEvaluateParamsSchema, r_ as AuditActivityListParamsSchema, ra as SessionCompactionCheckpoint, rb as BoardChangedEvent, rc as SessionDiscussionOpenParams, rd as GatewaySuspendPrepareResult, rf as ExecApprovalsSetParams, rg as TalkSessionSubmitToolResultParams, rh as ChannelsStatusResult, ri as TaskSuggestionsDismissResult, rl as QuestionResolvedEventSchema, rm as ConfigPatchParams, rn as PluginCatalogOfficialInstallSchema, ro as SessionsCompactionGetResult, rp as CronPacingSchema, rr as TerminalEvent, rs as SessionsGroupsDeleteParamsSchema, rt as WorkerLiveEvent, ru as NodePendingEnqueueResultSchema, rv as ConversationTurnCancelResult, rw as AgentsListResult, rx as BoardWidgetMcpAppPutContentSchema, ry as SessionsCatalogReadParams, s as WorktreesBranchesParams, sC as ExpiredApprovalSnapshot, sE as ToolsEffectiveEntrySchema, sS as WorkerInferenceModelRef, sT as SkillsProposalEventsListParamsSchema, s_ as AuditActivityOutboundMessageV1Schema, sa as SessionDiffFile, sb as BoardCommandEvent, sc as SessionDiscussionState, sd as GatewaySuspendResumeResult, sf as EnvironmentStatus, sg as TalkSessionTurnResult, sh as TalkAgentControlResult, si as TaskSuggestionsListResult, sl as QuestionWaitAnswerParams, sm as ConfigSchemaLookupResult, sn as PluginSearchPackageSchema, so as SessionsCompactionListResult, sp as CronRunsParamsSchema, sr as TerminalInputParams, ss as SessionsGroupsListResultSchema, st as WorkerLiveEventErrorShapeSchema, su as NodePluginToolsUpdateParamsSchema, sv as ConversationTurnReply, sw as AgentsUpdateResult, sx as BoardWidgetPluginKindSchema, sy as MAX_MEMORY_MIGRATION_ITEMS, t as WorktreeBranch, tC as CancelledApprovalSnapshot, tE as ToolCatalogProfileSchema, tS as WorkerInferenceCancelResult, tT as SkillsProposalCreateParamsSchema, t_ as AuditActivityInboundMessageV1Schema, ta as SessionBranch, tb as BoardCanvasDocumentSource, tc as SessionDiscussionInfoResultSchema, td as GatewaySuspendPrepareParamsSchema, tf as ExecApprovalsNodeSnapshot, tg as TalkSessionSteerParams, th as ChannelsStatusParams, ti as TaskSuggestionsDismissParams, tl as QuestionResolveResultSchema, tm as ConfigGetParams, tn as PluginCatalogEntrySchema, to as SessionsCompactionGetParams, tp as CronJobStateSchema, tr as TerminalDataEvent, ts as SessionsForkResultSchema, tt as WorkerHeartbeatResult, tu as NodePendingEnqueueParamsSchema, tv as ConversationTurnCancelParams, tw as AgentsListParams, tx as BoardWidgetMaterializedPutParams, ty as SessionsCatalogListResult, u as WorktreesBranchesResultSchema, uC as PendingApprovalSnapshotSchema, uE as ToolsEffectiveNotice, uS as WorkerInferenceOptionsSchema, uT as SkillsProposalInspectParams, u_ as ArtifactSummary, ua as SessionDiffFileStatusSchema, ub as BoardCronActionParamsSchema, uc as SessionPlacementProtocolSchemas, ud as GatewaySuspendStatusParamsSchema, uf as EnvironmentSummarySchema, ug as TalkSpeakParamsSchema, uh as TalkCatalogParamsSchema, ui as SYSTEM_PRESENCE_LEGACY_CLEAR_LAST_INPUT_SECONDS, ul as QuestionWaitAnswerResultSchema, um as ConfigSchemaParamsSchema, un as PluginsInstallParamsSchema, uo as SessionsCompactionRestoreParamsSchema, up as CronScratchSchema, ur as TerminalListResultSchema, us as SessionsGroupsPutParams, ut as WorkerLiveEventRequestFrame, uu as NodePresenceAlivePayload, uv as ConversationTurnResultSchema, uw as AuthProbeStatusSchema, ux as BoardWidgetPutContent, uy as MigrationProtocolSchemas, v as WorktreesListParamsSchema, vC as SessionApprovalReplay, vE as ToolsInvokeParamsSchema, vS as WorkerInferenceTerminalOutcome, vT as SkillsProposalRequestRevisionResult, v_ as ArtifactsGetResult, va as SessionFileEntrySchema, vb as BoardLegacyEventParamsSchema, vc as SessionsReclaimParamsSchema, vd as FsDirEntrySchema, vf as EnvironmentsDestroyResultSchema, vg as WebLoginStartParamsSchema, vh as TalkClientCreateResultSchema, vi as Snapshot, vl as WebPushTestParamsSchema, vm as UpdateStatusParamsSchema, vn as PluginsRefreshParamsSchema, vo as SessionsCompanionResetParamsSchema, vp as SystemAgentChatHistoryResultSchema, vr as TerminalSessionInfoSchema, vs as SessionsMessagesUnsubscribeParams, vt as WorkerTranscriptCommitErrorReason, vu as NodeSkillsUpdateParams, vv as CHAT_SEND_SESSION_KEY_MAX_LENGTH, vw as ModelsListParams, vx as McpAppViewExpiredErrorDetailsSchema, vy as SessionSuggestionEvent, w as WorktreesRemoveResultSchema, wC as TerminalSessionApprovalEventSchema, wS as validateWorkerInferenceTerminalOutcome, wT as SkillsProposalsListParams, w_ as AgentsWorkspaceEntry, wa as SessionFileRelevanceSchema, wb as BoardPromptAuthorizeParams, wc as SecretsResolveAssignmentSchema, wd as DevicePairApproveParamsSchema, wf as EnvironmentsStatusParamsSchema, wg as UsersLinkEmailParams, wh as TalkClientToolCallParamsSchema, wi as SessionMemberAddParamsSchema, wl as NodeDescribeParamsSchema, wm as COMMAND_CHOICE_LABEL_MAX_LENGTH, wn as PluginsSearchResultSchema, wo as SessionsCompanionStateResultSchema, wp as SystemAgentChatQuestionSchema, wr as TerminalUploadParamsSchema, ws as SessionsPatchParams, wt as WorkerTranscriptCommitRequestFrame, wu as ChatAttachmentsSchema, wv as SecretInputSchema, ww as ModelsProbeResult, wx as missingScopeErrorShape, wy as SessionSuggestionStateSchema, x as WorktreesRemoveParams, xC as SystemAgentApprovalPresentationSchema, xS as validateWorkerInferenceEventFrame, xT as SkillsProposalReviseParamsSchema, x_ as ArtifactsListParamsSchema, xa as SessionFilePreviewKind, xb as BoardOp, xc as SessionPlacementState, xd as FsListDirResult, xf as EnvironmentsListResult, xg as UserProfile, xh as TalkClientSteerParams, xi as StateVersionSchema, xl as WebPushVapidPublicKeyParams, xm as COMMAND_ARG_CHOICES_MAX_ITEMS, xn as PluginsSearchParams, xo as SessionsCompanionStateParams, xp as SystemAgentChatParams, xr as TerminalTextResult, xs as SessionsObserverVisibilityParamsSchema, xt as WorkerTranscriptCommitErrorShapeSchema, xu as ChatAbortParamsSchema, xv as GatewayClientModeSchema, xw as ModelsListResultSchema, xx as WizardNotFoundErrorDetailsSchema, xy as SessionSuggestionResolutionSchema, y as WorktreesListResult, yC as SessionApprovalReplaySchema, yE as ToolsInvokeResult, yS as WorkerInferenceTerminalParams, yT as SkillsProposalRequestRevisionResultSchema, y_ as ArtifactsGetResultSchema, ya as SessionFileKind, yb as BoardMcpAppDescriptor, yc as SessionsReclaimResult, yd as FsListDirParams, yf as EnvironmentsListParams, yg as WebLoginWaitParams, yh as TalkClientMutationResult, yi as SnapshotSchema, yl as WebPushUnsubscribeParams, ym as COMMAND_ALIAS_MAX_ITEMS, yn as PluginsRefreshResult, yo as SessionsCompanionResetResult, yp as SystemAgentChatHistoryTurn, yr as TerminalTextParams, ys as SessionsMessagesUnsubscribeParamsSchema, yt as WorkerTranscriptCommitErrorReasonSchema, yu as NodeSkillsUpdateParamsSchema, yv as ChatSendSessionKeyString, yw as ModelsListParamsSchema, yx as MissingScopeErrorDetailsSchema, yy as SessionSuggestionEventSchema, z as WORKER_TRANSCRIPT_MAX_JSON_DEPTH, zC as AgentsDeleteResult, zS as ApprovalHistoryParams, zT as SkillsSkillCardResultSchema, z_ as AgentIdentityParamsSchema, za as SessionsBranchesListParams, zb as BoardUpdateParamsSchema, zc as QuestionListResultSchema, zd as DeviceTokenRevokeParams, zf as CronRemoveParams, zg as UsersSetAvatarResultSchema, zh as TalkSessionCancelOutputParams, zi as SessionSharingIdentitySchema, zl as NodeListParamsSchema, zm as ChannelsPairingApproveParamsSchema, zn as PluginsUninstallParams, zo as SessionsFilesGetResultSchema, zp as SystemAgentSetupVerifyParams, zr as TasksListResult, zs as SessionsRewindResultSchema, zt as WizardNextParams, zu as ChatRunStartupPhaseSchema, zv as SessionCatalogSession, zw as SkillsCuratorActionResultSchema, zx as SkillsProposalHistoryScanResult, zy as SessionTypingParams } from "./schema-modules-DldUMfpk.mjs";
import { i as PROTOCOL_VERSION, n as MIN_NODE_PROTOCOL_VERSION, r as MIN_PROBE_PROTOCOL_VERSION, t as MIN_CLIENT_PROTOCOL_VERSION } from "./version-COV9CEyr.mjs";

//#region src/schema/protocol-schemas.d.ts
/** Public schema registry keyed by stable protocol schema name. */
declare const ProtocolSchemas: {
  readonly BoardTab: import("typebox").TObject<{
    tabId: import("typebox").TString;
    title: import("typebox").TString;
    position: import("typebox").TInteger;
    chatDock: import("typebox").TUnion<[import("typebox").TLiteral<"left">, import("typebox").TLiteral<"right">, import("typebox").TLiteral<"bottom">, import("typebox").TLiteral<"hidden">]>;
  }>;
  readonly BoardWidget: import("typebox").TObject<{
    name: import("typebox").TString;
    tabId: import("typebox").TString;
    title: import("typebox").TOptional<import("typebox").TString>;
    contentKind: import("typebox").TUnion<[import("typebox").TLiteral<"html">, import("typebox").TLiteral<"mcp-app">, import("typebox").TLiteral<"plugin">]>;
    pluginKind: import("typebox").TOptional<import("typebox").TString>;
    props: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TUnknown>>;
    presentation: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"card">, import("typebox").TLiteral<"full-bleed">, import("typebox").TLiteral<"frameless">]>>;
    heightMode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"auto">, import("typebox").TLiteral<"fixed">]>>;
    sizeW: import("typebox").TInteger;
    sizeH: import("typebox").TInteger;
    position: import("typebox").TInteger;
    grantState: import("typebox").TUnion<[import("typebox").TLiteral<"none">, import("typebox").TLiteral<"pending">, import("typebox").TLiteral<"granted">, import("typebox").TLiteral<"rejected">]>;
    revision: import("typebox").TInteger;
    instanceId: import("typebox").TOptional<import("typebox").TString>;
    declaredSummary: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    declared: import("typebox").TOptional<import("typebox").TObject<{
      netOrigins: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
      tools: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    }>>;
    frameUrl: import("typebox").TOptional<import("typebox").TString>;
    viewTicket: import("typebox").TOptional<import("typebox").TString>;
    viewTicketTtlMs: import("typebox").TOptional<import("typebox").TInteger>;
    viewGeneration: import("typebox").TOptional<import("typebox").TString>;
    sandboxUrl: import("typebox").TOptional<import("typebox").TString>;
    sandboxPort: import("typebox").TOptional<import("typebox").TInteger>;
    sandboxOrigin: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly BoardWidgetDeclared: import("typebox").TObject<{
    netOrigins: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    tools: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
  }>;
  readonly BoardSnapshot: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
    revision: import("typebox").TInteger;
    tabs: import("typebox").TArray<import("typebox").TObject<{
      tabId: import("typebox").TString;
      title: import("typebox").TString;
      position: import("typebox").TInteger;
      chatDock: import("typebox").TUnion<[import("typebox").TLiteral<"left">, import("typebox").TLiteral<"right">, import("typebox").TLiteral<"bottom">, import("typebox").TLiteral<"hidden">]>;
    }>>;
    widgets: import("typebox").TArray<import("typebox").TObject<{
      name: import("typebox").TString;
      tabId: import("typebox").TString;
      title: import("typebox").TOptional<import("typebox").TString>;
      contentKind: import("typebox").TUnion<[import("typebox").TLiteral<"html">, import("typebox").TLiteral<"mcp-app">, import("typebox").TLiteral<"plugin">]>;
      pluginKind: import("typebox").TOptional<import("typebox").TString>;
      props: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TUnknown>>;
      presentation: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"card">, import("typebox").TLiteral<"full-bleed">, import("typebox").TLiteral<"frameless">]>>;
      heightMode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"auto">, import("typebox").TLiteral<"fixed">]>>;
      sizeW: import("typebox").TInteger;
      sizeH: import("typebox").TInteger;
      position: import("typebox").TInteger;
      grantState: import("typebox").TUnion<[import("typebox").TLiteral<"none">, import("typebox").TLiteral<"pending">, import("typebox").TLiteral<"granted">, import("typebox").TLiteral<"rejected">]>;
      revision: import("typebox").TInteger;
      instanceId: import("typebox").TOptional<import("typebox").TString>;
      declaredSummary: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
      declared: import("typebox").TOptional<import("typebox").TObject<{
        netOrigins: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
        tools: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
      }>>;
      frameUrl: import("typebox").TOptional<import("typebox").TString>;
      viewTicket: import("typebox").TOptional<import("typebox").TString>;
      viewTicketTtlMs: import("typebox").TOptional<import("typebox").TInteger>;
      viewGeneration: import("typebox").TOptional<import("typebox").TString>;
      sandboxUrl: import("typebox").TOptional<import("typebox").TString>;
      sandboxPort: import("typebox").TOptional<import("typebox").TInteger>;
      sandboxOrigin: import("typebox").TOptional<import("typebox").TString>;
    }>>;
  }>;
  readonly BoardTabCreateOp: import("typebox").TObject<{
    kind: import("typebox").TLiteral<"tab_create">;
    tabId: import("typebox").TString;
    title: import("typebox").TString;
    chatDock: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"left">, import("typebox").TLiteral<"right">, import("typebox").TLiteral<"bottom">, import("typebox").TLiteral<"hidden">]>>;
  }>;
  readonly BoardTabUpdateOp: import("typebox").TObject<{
    kind: import("typebox").TLiteral<"tab_update">;
    tabId: import("typebox").TString;
    title: import("typebox").TOptional<import("typebox").TString>;
    chatDock: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"left">, import("typebox").TLiteral<"right">, import("typebox").TLiteral<"bottom">, import("typebox").TLiteral<"hidden">]>>;
    position: import("typebox").TOptional<import("typebox").TInteger>;
  }>;
  readonly BoardTabDeleteOp: import("typebox").TObject<{
    kind: import("typebox").TLiteral<"tab_delete">;
    tabId: import("typebox").TString;
  }>;
  readonly BoardTabsReorderOp: import("typebox").TObject<{
    kind: import("typebox").TLiteral<"tabs_reorder">;
    tabIds: import("typebox").TArray<import("typebox").TString>;
  }>;
  readonly BoardWidgetMoveOp: import("typebox").TObject<{
    kind: import("typebox").TLiteral<"widget_move">;
    name: import("typebox").TString;
    tabId: import("typebox").TOptional<import("typebox").TString>;
    position: import("typebox").TOptional<import("typebox").TInteger>;
    after: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly BoardWidgetResizeOp: import("typebox").TObject<{
    kind: import("typebox").TLiteral<"widget_resize">;
    name: import("typebox").TString;
    sizeW: import("typebox").TInteger;
    sizeH: import("typebox").TInteger;
    heightMode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"auto">, import("typebox").TLiteral<"fixed">]>>;
  }>;
  readonly BoardWidgetRemoveOp: import("typebox").TObject<{
    kind: import("typebox").TLiteral<"widget_remove">;
    name: import("typebox").TString;
  }>;
  readonly BoardOp: import("typebox").TUnion<[import("typebox").TObject<{
    kind: import("typebox").TLiteral<"tab_create">;
    tabId: import("typebox").TString;
    title: import("typebox").TString;
    chatDock: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"left">, import("typebox").TLiteral<"right">, import("typebox").TLiteral<"bottom">, import("typebox").TLiteral<"hidden">]>>;
  }>, import("typebox").TObject<{
    kind: import("typebox").TLiteral<"tab_update">;
    tabId: import("typebox").TString;
    title: import("typebox").TOptional<import("typebox").TString>;
    chatDock: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"left">, import("typebox").TLiteral<"right">, import("typebox").TLiteral<"bottom">, import("typebox").TLiteral<"hidden">]>>;
    position: import("typebox").TOptional<import("typebox").TInteger>;
  }>, import("typebox").TObject<{
    kind: import("typebox").TLiteral<"tab_delete">;
    tabId: import("typebox").TString;
  }>, import("typebox").TObject<{
    kind: import("typebox").TLiteral<"tabs_reorder">;
    tabIds: import("typebox").TArray<import("typebox").TString>;
  }>, import("typebox").TObject<{
    kind: import("typebox").TLiteral<"widget_move">;
    name: import("typebox").TString;
    tabId: import("typebox").TOptional<import("typebox").TString>;
    position: import("typebox").TOptional<import("typebox").TInteger>;
    after: import("typebox").TOptional<import("typebox").TString>;
  }>, import("typebox").TObject<{
    kind: import("typebox").TLiteral<"widget_resize">;
    name: import("typebox").TString;
    sizeW: import("typebox").TInteger;
    sizeH: import("typebox").TInteger;
    heightMode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"auto">, import("typebox").TLiteral<"fixed">]>>;
  }>, import("typebox").TObject<{
    kind: import("typebox").TLiteral<"widget_remove">;
    name: import("typebox").TString;
  }>]>;
  readonly BoardMcpAppDescriptor: import("typebox").TObject<{
    serverName: import("typebox").TString;
    toolName: import("typebox").TString;
    uiResourceUri: import("typebox").TString;
    toolCallId: import("typebox").TString;
  }>;
  readonly BoardWidgetHtmlContent: import("typebox").TObject<{
    kind: import("typebox").TLiteral<"html">;
    html: import("typebox").TString;
  }>;
  readonly BoardWidgetMcpAppContent: import("typebox").TObject<{
    kind: import("typebox").TLiteral<"mcp-app">;
    descriptor: import("typebox").TObject<{
      serverName: import("typebox").TString;
      toolName: import("typebox").TString;
      uiResourceUri: import("typebox").TString;
      toolCallId: import("typebox").TString;
    }>;
  }>;
  readonly BoardWidgetMcpAppPutContent: import("typebox").TObject<{
    kind: import("typebox").TLiteral<"mcp-app">;
    viewId: import("typebox").TString;
  }>;
  readonly BoardWidgetPluginContent: import("typebox").TObject<{
    kind: import("typebox").TLiteral<"plugin">;
    pluginKind: import("typebox").TString;
    props: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TUnknown>>;
  }>;
  readonly BoardCanvasDocumentSource: import("typebox").TObject<{
    kind: import("typebox").TLiteral<"canvas-doc">;
    docId: import("typebox").TString;
  }>;
  readonly BoardWidgetContent: import("typebox").TUnion<[import("typebox").TObject<{
    kind: import("typebox").TLiteral<"html">;
    html: import("typebox").TString;
  }>, import("typebox").TObject<{
    kind: import("typebox").TLiteral<"mcp-app">;
    descriptor: import("typebox").TObject<{
      serverName: import("typebox").TString;
      toolName: import("typebox").TString;
      uiResourceUri: import("typebox").TString;
      toolCallId: import("typebox").TString;
    }>;
  }>, import("typebox").TObject<{
    kind: import("typebox").TLiteral<"plugin">;
    pluginKind: import("typebox").TString;
    props: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TUnknown>>;
  }>]>;
  readonly BoardWidgetPutContent: import("typebox").TUnion<[import("typebox").TObject<{
    kind: import("typebox").TLiteral<"html">;
    html: import("typebox").TString;
  }>, import("typebox").TObject<{
    kind: import("typebox").TLiteral<"mcp-app">;
    viewId: import("typebox").TString;
  }>, import("typebox").TObject<{
    kind: import("typebox").TLiteral<"plugin">;
    pluginKind: import("typebox").TString;
    props: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TUnknown>>;
  }>, import("typebox").TObject<{
    kind: import("typebox").TLiteral<"canvas-doc">;
    docId: import("typebox").TString;
  }>]>;
  readonly BoardGetParams: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
  }>;
  readonly BoardUpdateParams: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
    ops: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TObject<{
      kind: import("typebox").TLiteral<"tab_create">;
      tabId: import("typebox").TString;
      title: import("typebox").TString;
      chatDock: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"left">, import("typebox").TLiteral<"right">, import("typebox").TLiteral<"bottom">, import("typebox").TLiteral<"hidden">]>>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"tab_update">;
      tabId: import("typebox").TString;
      title: import("typebox").TOptional<import("typebox").TString>;
      chatDock: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"left">, import("typebox").TLiteral<"right">, import("typebox").TLiteral<"bottom">, import("typebox").TLiteral<"hidden">]>>;
      position: import("typebox").TOptional<import("typebox").TInteger>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"tab_delete">;
      tabId: import("typebox").TString;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"tabs_reorder">;
      tabIds: import("typebox").TArray<import("typebox").TString>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"widget_move">;
      name: import("typebox").TString;
      tabId: import("typebox").TOptional<import("typebox").TString>;
      position: import("typebox").TOptional<import("typebox").TInteger>;
      after: import("typebox").TOptional<import("typebox").TString>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"widget_resize">;
      name: import("typebox").TString;
      sizeW: import("typebox").TInteger;
      sizeH: import("typebox").TInteger;
      heightMode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"auto">, import("typebox").TLiteral<"fixed">]>>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"widget_remove">;
      name: import("typebox").TString;
    }>]>>;
  }>;
  readonly BoardWidgetPutParams: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
    name: import("typebox").TString;
    title: import("typebox").TOptional<import("typebox").TString>;
    content: import("typebox").TUnion<[import("typebox").TObject<{
      kind: import("typebox").TLiteral<"html">;
      html: import("typebox").TString;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"mcp-app">;
      viewId: import("typebox").TString;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"plugin">;
      pluginKind: import("typebox").TString;
      props: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TUnknown>>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"canvas-doc">;
      docId: import("typebox").TString;
    }>]>;
    presentation: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"card">, import("typebox").TLiteral<"full-bleed">, import("typebox").TLiteral<"frameless">]>>;
    heightMode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"auto">, import("typebox").TLiteral<"fixed">]>>;
    placement: import("typebox").TOptional<import("typebox").TObject<{
      tabId: import("typebox").TOptional<import("typebox").TString>;
      size: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"sm">, import("typebox").TLiteral<"md">, import("typebox").TLiteral<"lg">, import("typebox").TLiteral<"xl">, import("typebox").TLiteral<"full">]>>;
      after: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    declared: import("typebox").TOptional<import("typebox").TObject<{
      netOrigins: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
      tools: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    }>>;
  }>;
  readonly BoardWidgetGrantParams: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
    name: import("typebox").TString;
    decision: import("typebox").TUnion<[import("typebox").TLiteral<"granted">, import("typebox").TLiteral<"rejected">]>;
    revision: import("typebox").TInteger;
    instanceId: import("typebox").TString;
  }>;
  readonly BoardWidgetAppViewParams: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
    name: import("typebox").TString;
    revision: import("typebox").TInteger;
    instanceId: import("typebox").TString;
  }>;
  readonly BoardWidgetAppViewResult: import("typebox").TObject<{
    viewId: import("typebox").TString;
    expiresAtMs: import("typebox").TInteger;
  }>;
  readonly BoardEventParams: import("typebox").TUnion<[import("typebox").TObject<{
    sessionKey: import("typebox").TString;
    widget: import("typebox").TString;
    payload: import("typebox").TUnknown;
  }>, import("typebox").TObject<{
    ticket: import("typebox").TString;
    payload: import("typebox").TUnknown;
  }>]>;
  readonly BoardPromptAuthorizeParams: import("typebox").TObject<{
    ticket: import("typebox").TString;
  }>;
  readonly BoardDataReadParams: import("typebox").TObject<{
    ticket: import("typebox").TString;
    bindingId: import("typebox").TString;
    params: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TUnknown>>;
  }>;
  readonly BoardActionParams: import("typebox").TUnion<[import("typebox").TObject<{
    ticket: import("typebox").TString;
    action: import("typebox").TLiteral<"cron.trigger">;
    jobId: import("typebox").TString;
  }>, import("typebox").TObject<{
    ticket: import("typebox").TString;
    action: import("typebox").TString;
    params: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TUnknown>>;
  }>]>;
  readonly BoardChangedEvent: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
    revision: import("typebox").TInteger;
    widget: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly BoardFocusTabCommand: import("typebox").TObject<{
    kind: import("typebox").TLiteral<"focus_tab">;
    tabId: import("typebox").TString;
  }>;
  readonly BoardSetChatDockCommand: import("typebox").TObject<{
    kind: import("typebox").TLiteral<"set_chat_dock">;
    dock: import("typebox").TUnion<[import("typebox").TLiteral<"left">, import("typebox").TLiteral<"right">, import("typebox").TLiteral<"bottom">, import("typebox").TLiteral<"hidden">]>;
  }>;
  readonly BoardCommand: import("typebox").TUnion<[import("typebox").TObject<{
    kind: import("typebox").TLiteral<"focus_tab">;
    tabId: import("typebox").TString;
  }>, import("typebox").TObject<{
    kind: import("typebox").TLiteral<"set_chat_dock">;
    dock: import("typebox").TUnion<[import("typebox").TLiteral<"left">, import("typebox").TLiteral<"right">, import("typebox").TLiteral<"bottom">, import("typebox").TLiteral<"hidden">]>;
  }>]>;
  readonly BoardCommandEvent: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
    command: import("typebox").TUnion<[import("typebox").TObject<{
      kind: import("typebox").TLiteral<"focus_tab">;
      tabId: import("typebox").TString;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"set_chat_dock">;
      dock: import("typebox").TUnion<[import("typebox").TLiteral<"left">, import("typebox").TLiteral<"right">, import("typebox").TLiteral<"bottom">, import("typebox").TLiteral<"hidden">]>;
    }>]>;
  }>;
  readonly AuthProbeStatus: import("typebox").TUnion<[import("typebox").TLiteral<"ok">, import("typebox").TLiteral<"auth">, import("typebox").TLiteral<"rate_limit">, import("typebox").TLiteral<"billing">, import("typebox").TLiteral<"timeout">, import("typebox").TLiteral<"format">, import("typebox").TLiteral<"unknown">, import("typebox").TLiteral<"no_model">]>;
} & {
  readonly ConnectParams: import("typebox").TObject<{
    minProtocol: import("typebox").TInteger;
    maxProtocol: import("typebox").TInteger;
    client: import("typebox").TObject<{
      id: import("typebox").TEnum<["webchat-ui", "openclaw-control-ui", "openclaw-browser-copilot", "openclaw-tui", "webchat", "cli", "gateway-client", "openclaw-macos", "openclaw-linux", "openclaw-ios", "openclaw-watchos", "openclaw-android", "node-host", "openclaw-worker", "test", "fingerprint", "openclaw-probe"]>;
      displayName: import("typebox").TOptional<import("typebox").TString>;
      version: import("typebox").TString;
      platform: import("typebox").TString;
      deviceFamily: import("typebox").TOptional<import("typebox").TString>;
      modelIdentifier: import("typebox").TOptional<import("typebox").TString>;
      mode: import("typebox").TEnum<["webchat", "cli", "worker", "test", "probe", "ui", "backend", "node"]>;
      instanceId: import("typebox").TOptional<import("typebox").TString>;
    }>;
    caps: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    commands: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    permissions: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TBoolean>>;
    pathEnv: import("typebox").TOptional<import("typebox").TString>;
    role: import("typebox").TOptional<import("typebox").TString>;
    scopes: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    device: import("typebox").TOptional<import("typebox").TObject<{
      id: import("typebox").TString;
      publicKey: import("typebox").TString;
      signature: import("typebox").TString;
      signedAt: import("typebox").TInteger;
      nonce: import("typebox").TString;
    }>>;
    auth: import("typebox").TOptional<import("typebox").TObject<{
      token: import("typebox").TOptional<import("typebox").TString>;
      bootstrapToken: import("typebox").TOptional<import("typebox").TString>;
      deviceToken: import("typebox").TOptional<import("typebox").TString>;
      password: import("typebox").TOptional<import("typebox").TString>;
      approvalRuntimeToken: import("typebox").TOptional<import("typebox").TString>;
      agentRuntimeIdentityToken: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    locale: import("typebox").TOptional<import("typebox").TString>;
    userAgent: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly WorkerAdmissionHandshake: import("typebox").TObject<{
    bundleHash: import("typebox").TString;
    openclawVersion: import("typebox").TString;
    protocolFeatures: import("typebox").TArray<import("typebox").TString>;
  }>;
  readonly HelloOk: import("typebox").TObject<{
    type: import("typebox").TLiteral<"hello-ok">;
    protocol: import("typebox").TInteger;
    server: import("typebox").TObject<{
      version: import("typebox").TString;
      connId: import("typebox").TString;
    }>;
    features: import("typebox").TObject<{
      methods: import("typebox").TArray<import("typebox").TString>;
      events: import("typebox").TArray<import("typebox").TString>;
      capabilities: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    }>;
    snapshot: import("typebox").TObject<{
      presence: import("typebox").TArray<import("typebox").TObject<{
        host: import("typebox").TOptional<import("typebox").TString>;
        ip: import("typebox").TOptional<import("typebox").TString>;
        version: import("typebox").TOptional<import("typebox").TString>;
        platform: import("typebox").TOptional<import("typebox").TString>;
        deviceFamily: import("typebox").TOptional<import("typebox").TString>;
        modelIdentifier: import("typebox").TOptional<import("typebox").TString>;
        mode: import("typebox").TOptional<import("typebox").TString>;
        lastInputSeconds: import("typebox").TOptional<import("typebox").TInteger>;
        reason: import("typebox").TOptional<import("typebox").TString>;
        tags: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
        text: import("typebox").TOptional<import("typebox").TString>;
        ts: import("typebox").TInteger;
        deviceId: import("typebox").TOptional<import("typebox").TString>;
        roles: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
        scopes: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
        instanceId: import("typebox").TOptional<import("typebox").TString>;
        user: import("typebox").TOptional<import("typebox").TObject<{
          id: import("typebox").TString;
          email: import("typebox").TOptional<import("typebox").TString>;
          name: import("typebox").TOptional<import("typebox").TString>;
          avatarUrl: import("typebox").TOptional<import("typebox").TString>;
        }>>;
        watchedSessions: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
      }>>;
      health: import("typebox").TObject<{
        ok: import("typebox").TOptional<import("typebox").TLiteral<true>>;
        ts: import("typebox").TOptional<import("typebox").TInteger>;
        durationMs: import("typebox").TOptional<import("typebox").TInteger>;
        eventLoop: import("typebox").TOptional<import("typebox").TObject<{
          degraded: import("typebox").TBoolean;
          reasons: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"event_loop_delay">, import("typebox").TLiteral<"event_loop_utilization">, import("typebox").TLiteral<"cpu">]>>;
          intervalMs: import("typebox").TNumber;
          delayP99Ms: import("typebox").TNumber;
          delayMaxMs: import("typebox").TNumber;
          utilization: import("typebox").TNumber;
          cpuCoreRatio: import("typebox").TNumber;
        }>>;
        plugins: import("typebox").TOptional<import("typebox").TObject<{
          loaded: import("typebox").TArray<import("typebox").TString>;
          errors: import("typebox").TArray<import("typebox").TObject<{
            id: import("typebox").TString;
            origin: import("typebox").TString;
            activated: import("typebox").TBoolean;
            activationSource: import("typebox").TOptional<import("typebox").TString>;
            activationReason: import("typebox").TOptional<import("typebox").TString>;
            failurePhase: import("typebox").TOptional<import("typebox").TString>;
            error: import("typebox").TString;
          }>>;
          unavailable: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
            id: import("typebox").TString;
            state: import("typebox").TLiteral<"configured-unavailable">;
            diagnostic: import("typebox").TObject<{
              kind: import("typebox").TLiteral<"plugin-verification">;
              reason: import("typebox").TString;
              detail: import("typebox").TString;
            }>;
          }>>>;
        }>>;
        contextEngines: import("typebox").TOptional<import("typebox").TObject<{
          quarantined: import("typebox").TArray<import("typebox").TObject<{
            engineId: import("typebox").TString;
            owner: import("typebox").TOptional<import("typebox").TString>;
            operation: import("typebox").TString;
            reason: import("typebox").TString;
            failedAt: import("typebox").TInteger;
          }>>;
        }>>;
        deliveryQueues: import("typebox").TOptional<import("typebox").TObject<{
          failed: import("typebox").TArray<import("typebox").TObject<{
            queueName: import("typebox").TString;
            count: import("typebox").TInteger;
            oldestFailedAt: import("typebox").TOptional<import("typebox").TInteger>;
          }>>;
        }>>;
        modelPricing: import("typebox").TOptional<import("typebox").TObject<{
          state: import("typebox").TUnion<[import("typebox").TLiteral<"ok">, import("typebox").TLiteral<"degraded">, import("typebox").TLiteral<"disabled">]>;
          sources: import("typebox").TArray<import("typebox").TObject<{
            source: import("typebox").TUnion<[import("typebox").TLiteral<"openrouter">, import("typebox").TLiteral<"litellm">, import("typebox").TLiteral<"bootstrap">, import("typebox").TLiteral<"refresh">]>;
            state: import("typebox").TUnion<[import("typebox").TLiteral<"ok">, import("typebox").TLiteral<"degraded">]>;
            lastFailureAt: import("typebox").TOptional<import("typebox").TInteger>;
            detail: import("typebox").TOptional<import("typebox").TString>;
          }>>;
          lastFailureAt: import("typebox").TOptional<import("typebox").TInteger>;
          detail: import("typebox").TOptional<import("typebox").TString>;
        }>>;
        configReload: import("typebox").TOptional<import("typebox").TObject<{
          hotReloadStatus: import("typebox").TUnion<[import("typebox").TLiteral<"active">, import("typebox").TLiteral<"disabled">]>;
        }>>;
        channels: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TUnknown>>;
        channelOrder: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
        channelLabels: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TString>>;
        heartbeatSeconds: import("typebox").TOptional<import("typebox").TInteger>;
        defaultAgentId: import("typebox").TOptional<import("typebox").TString>;
        agents: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
          agentId: import("typebox").TString;
          name: import("typebox").TOptional<import("typebox").TString>;
          isDefault: import("typebox").TBoolean;
          heartbeat: import("typebox").TObject<{
            enabled: import("typebox").TBoolean;
            every: import("typebox").TString;
            everyMs: import("typebox").TUnion<[import("typebox").TInteger, import("typebox").TNull]>;
            prompt: import("typebox").TString;
            target: import("typebox").TString;
            model: import("typebox").TOptional<import("typebox").TString>;
            ackMaxChars: import("typebox").TInteger;
          }>;
          sessions: import("typebox").TObject<{
            path: import("typebox").TString;
            count: import("typebox").TInteger;
            recent: import("typebox").TArray<import("typebox").TObject<{
              key: import("typebox").TString;
              updatedAt: import("typebox").TUnion<[import("typebox").TInteger, import("typebox").TNull]>;
              age: import("typebox").TUnion<[import("typebox").TInteger, import("typebox").TNull]>;
            }>>;
          }>;
        }>>>;
        sessions: import("typebox").TOptional<import("typebox").TObject<{
          path: import("typebox").TString;
          count: import("typebox").TInteger;
          recent: import("typebox").TArray<import("typebox").TObject<{
            key: import("typebox").TString;
            updatedAt: import("typebox").TUnion<[import("typebox").TInteger, import("typebox").TNull]>;
            age: import("typebox").TUnion<[import("typebox").TInteger, import("typebox").TNull]>;
          }>>;
        }>>;
      }>;
      stateVersion: import("typebox").TObject<{
        presence: import("typebox").TInteger;
        health: import("typebox").TInteger;
      }>;
      uptimeMs: import("typebox").TInteger;
      appliedConfigHash: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      configPath: import("typebox").TOptional<import("typebox").TString>;
      stateDir: import("typebox").TOptional<import("typebox").TString>;
      sessionDefaults: import("typebox").TOptional<import("typebox").TObject<{
        defaultAgentId: import("typebox").TString;
        mainKey: import("typebox").TString;
        mainSessionKey: import("typebox").TString;
        scope: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      authMode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"none">, import("typebox").TLiteral<"token">, import("typebox").TLiteral<"password">, import("typebox").TLiteral<"trusted-proxy">]>>;
      updateAvailable: import("typebox").TOptional<import("typebox").TObject<{
        currentVersion: import("typebox").TString;
        latestVersion: import("typebox").TString;
        channel: import("typebox").TString;
      }>>;
    }>;
    controlUiTabs: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
      pluginId: import("typebox").TString;
      id: import("typebox").TString;
      label: import("typebox").TString;
      description: import("typebox").TOptional<import("typebox").TString>;
      icon: import("typebox").TOptional<import("typebox").TString>;
      path: import("typebox").TOptional<import("typebox").TString>;
      requiresGatewayAuth: import("typebox").TOptional<import("typebox").TBoolean>;
      group: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"control">, import("typebox").TLiteral<"agent">]>>;
      order: import("typebox").TOptional<import("typebox").TNumber>;
    }>>>;
    controlUiWidgetKinds: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
      pluginId: import("typebox").TString;
      kind: import("typebox").TString;
      label: import("typebox").TString;
    }>>>;
    pluginSurfaceUrls: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TString>>;
    deviceAuthMigration: import("typebox").TOptional<import("typebox").TObject<{
      pending: import("typebox").TLiteral<true>;
    }>>;
    auth: import("typebox").TObject<{
      deviceToken: import("typebox").TOptional<import("typebox").TString>;
      role: import("typebox").TString;
      scopes: import("typebox").TArray<import("typebox").TString>;
      issuedAtMs: import("typebox").TOptional<import("typebox").TInteger>;
      deviceTokens: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
        deviceToken: import("typebox").TString;
        role: import("typebox").TString;
        scopes: import("typebox").TArray<import("typebox").TString>;
        issuedAtMs: import("typebox").TInteger;
      }>>>;
    }>;
    policy: import("typebox").TObject<{
      maxPayload: import("typebox").TInteger;
      maxBufferedBytes: import("typebox").TInteger;
      tickIntervalMs: import("typebox").TInteger;
      allowedSessionVisibilities: import("typebox").TOptional<import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"shared">, import("typebox").TLiteral<"read-only">, import("typebox").TLiteral<"suggest">, import("typebox").TLiteral<"draft">]>>>;
      hasMultipleSessionSharingIdentities: import("typebox").TOptional<import("typebox").TBoolean>;
    }>;
  }>;
  readonly RequestFrame: import("typebox").TObject<{
    type: import("typebox").TLiteral<"req">;
    id: import("typebox").TString;
    method: import("typebox").TString;
    params: import("typebox").TOptional<import("typebox").TUnknown>;
    traceparent: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly ResponseFrame: import("typebox").TObject<{
    type: import("typebox").TLiteral<"res">;
    id: import("typebox").TString;
    ok: import("typebox").TBoolean;
    payload: import("typebox").TOptional<import("typebox").TUnknown>;
    error: import("typebox").TOptional<import("typebox").TObject<{
      code: import("typebox").TString;
      message: import("typebox").TString;
      details: import("typebox").TOptional<import("typebox").TUnknown>;
      retryable: import("typebox").TOptional<import("typebox").TBoolean>;
      retryAfterMs: import("typebox").TOptional<import("typebox").TInteger>;
    }>>;
  }>;
  readonly EventFrame: import("typebox").TObject<{
    type: import("typebox").TLiteral<"event">;
    event: import("typebox").TString;
    payload: import("typebox").TOptional<import("typebox").TUnknown>;
    seq: import("typebox").TOptional<import("typebox").TInteger>;
    stateVersion: import("typebox").TOptional<import("typebox").TObject<{
      presence: import("typebox").TInteger;
      health: import("typebox").TInteger;
    }>>;
  }>;
  readonly GatewayFrame: import("typebox").TUnion<[import("typebox").TObject<{
    type: import("typebox").TLiteral<"req">;
    id: import("typebox").TString;
    method: import("typebox").TString;
    params: import("typebox").TOptional<import("typebox").TUnknown>;
    traceparent: import("typebox").TOptional<import("typebox").TString>;
  }>, import("typebox").TObject<{
    type: import("typebox").TLiteral<"res">;
    id: import("typebox").TString;
    ok: import("typebox").TBoolean;
    payload: import("typebox").TOptional<import("typebox").TUnknown>;
    error: import("typebox").TOptional<import("typebox").TObject<{
      code: import("typebox").TString;
      message: import("typebox").TString;
      details: import("typebox").TOptional<import("typebox").TUnknown>;
      retryable: import("typebox").TOptional<import("typebox").TBoolean>;
      retryAfterMs: import("typebox").TOptional<import("typebox").TInteger>;
    }>>;
  }>, import("typebox").TObject<{
    type: import("typebox").TLiteral<"event">;
    event: import("typebox").TString;
    payload: import("typebox").TOptional<import("typebox").TUnknown>;
    seq: import("typebox").TOptional<import("typebox").TInteger>;
    stateVersion: import("typebox").TOptional<import("typebox").TObject<{
      presence: import("typebox").TInteger;
      health: import("typebox").TInteger;
    }>>;
  }>]>;
  readonly PresenceEntry: import("typebox").TObject<{
    host: import("typebox").TOptional<import("typebox").TString>;
    ip: import("typebox").TOptional<import("typebox").TString>;
    version: import("typebox").TOptional<import("typebox").TString>;
    platform: import("typebox").TOptional<import("typebox").TString>;
    deviceFamily: import("typebox").TOptional<import("typebox").TString>;
    modelIdentifier: import("typebox").TOptional<import("typebox").TString>;
    mode: import("typebox").TOptional<import("typebox").TString>;
    lastInputSeconds: import("typebox").TOptional<import("typebox").TInteger>;
    reason: import("typebox").TOptional<import("typebox").TString>;
    tags: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    text: import("typebox").TOptional<import("typebox").TString>;
    ts: import("typebox").TInteger;
    deviceId: import("typebox").TOptional<import("typebox").TString>;
    roles: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    scopes: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    instanceId: import("typebox").TOptional<import("typebox").TString>;
    user: import("typebox").TOptional<import("typebox").TObject<{
      id: import("typebox").TString;
      email: import("typebox").TOptional<import("typebox").TString>;
      name: import("typebox").TOptional<import("typebox").TString>;
      avatarUrl: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    watchedSessions: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
  }>;
  readonly StateVersion: import("typebox").TObject<{
    presence: import("typebox").TInteger;
    health: import("typebox").TInteger;
  }>;
  readonly Snapshot: import("typebox").TObject<{
    presence: import("typebox").TArray<import("typebox").TObject<{
      host: import("typebox").TOptional<import("typebox").TString>;
      ip: import("typebox").TOptional<import("typebox").TString>;
      version: import("typebox").TOptional<import("typebox").TString>;
      platform: import("typebox").TOptional<import("typebox").TString>;
      deviceFamily: import("typebox").TOptional<import("typebox").TString>;
      modelIdentifier: import("typebox").TOptional<import("typebox").TString>;
      mode: import("typebox").TOptional<import("typebox").TString>;
      lastInputSeconds: import("typebox").TOptional<import("typebox").TInteger>;
      reason: import("typebox").TOptional<import("typebox").TString>;
      tags: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
      text: import("typebox").TOptional<import("typebox").TString>;
      ts: import("typebox").TInteger;
      deviceId: import("typebox").TOptional<import("typebox").TString>;
      roles: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
      scopes: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
      instanceId: import("typebox").TOptional<import("typebox").TString>;
      user: import("typebox").TOptional<import("typebox").TObject<{
        id: import("typebox").TString;
        email: import("typebox").TOptional<import("typebox").TString>;
        name: import("typebox").TOptional<import("typebox").TString>;
        avatarUrl: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      watchedSessions: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    }>>;
    health: import("typebox").TObject<{
      ok: import("typebox").TOptional<import("typebox").TLiteral<true>>;
      ts: import("typebox").TOptional<import("typebox").TInteger>;
      durationMs: import("typebox").TOptional<import("typebox").TInteger>;
      eventLoop: import("typebox").TOptional<import("typebox").TObject<{
        degraded: import("typebox").TBoolean;
        reasons: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"event_loop_delay">, import("typebox").TLiteral<"event_loop_utilization">, import("typebox").TLiteral<"cpu">]>>;
        intervalMs: import("typebox").TNumber;
        delayP99Ms: import("typebox").TNumber;
        delayMaxMs: import("typebox").TNumber;
        utilization: import("typebox").TNumber;
        cpuCoreRatio: import("typebox").TNumber;
      }>>;
      plugins: import("typebox").TOptional<import("typebox").TObject<{
        loaded: import("typebox").TArray<import("typebox").TString>;
        errors: import("typebox").TArray<import("typebox").TObject<{
          id: import("typebox").TString;
          origin: import("typebox").TString;
          activated: import("typebox").TBoolean;
          activationSource: import("typebox").TOptional<import("typebox").TString>;
          activationReason: import("typebox").TOptional<import("typebox").TString>;
          failurePhase: import("typebox").TOptional<import("typebox").TString>;
          error: import("typebox").TString;
        }>>;
        unavailable: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
          id: import("typebox").TString;
          state: import("typebox").TLiteral<"configured-unavailable">;
          diagnostic: import("typebox").TObject<{
            kind: import("typebox").TLiteral<"plugin-verification">;
            reason: import("typebox").TString;
            detail: import("typebox").TString;
          }>;
        }>>>;
      }>>;
      contextEngines: import("typebox").TOptional<import("typebox").TObject<{
        quarantined: import("typebox").TArray<import("typebox").TObject<{
          engineId: import("typebox").TString;
          owner: import("typebox").TOptional<import("typebox").TString>;
          operation: import("typebox").TString;
          reason: import("typebox").TString;
          failedAt: import("typebox").TInteger;
        }>>;
      }>>;
      deliveryQueues: import("typebox").TOptional<import("typebox").TObject<{
        failed: import("typebox").TArray<import("typebox").TObject<{
          queueName: import("typebox").TString;
          count: import("typebox").TInteger;
          oldestFailedAt: import("typebox").TOptional<import("typebox").TInteger>;
        }>>;
      }>>;
      modelPricing: import("typebox").TOptional<import("typebox").TObject<{
        state: import("typebox").TUnion<[import("typebox").TLiteral<"ok">, import("typebox").TLiteral<"degraded">, import("typebox").TLiteral<"disabled">]>;
        sources: import("typebox").TArray<import("typebox").TObject<{
          source: import("typebox").TUnion<[import("typebox").TLiteral<"openrouter">, import("typebox").TLiteral<"litellm">, import("typebox").TLiteral<"bootstrap">, import("typebox").TLiteral<"refresh">]>;
          state: import("typebox").TUnion<[import("typebox").TLiteral<"ok">, import("typebox").TLiteral<"degraded">]>;
          lastFailureAt: import("typebox").TOptional<import("typebox").TInteger>;
          detail: import("typebox").TOptional<import("typebox").TString>;
        }>>;
        lastFailureAt: import("typebox").TOptional<import("typebox").TInteger>;
        detail: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      configReload: import("typebox").TOptional<import("typebox").TObject<{
        hotReloadStatus: import("typebox").TUnion<[import("typebox").TLiteral<"active">, import("typebox").TLiteral<"disabled">]>;
      }>>;
      channels: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TUnknown>>;
      channelOrder: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
      channelLabels: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TString>>;
      heartbeatSeconds: import("typebox").TOptional<import("typebox").TInteger>;
      defaultAgentId: import("typebox").TOptional<import("typebox").TString>;
      agents: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
        agentId: import("typebox").TString;
        name: import("typebox").TOptional<import("typebox").TString>;
        isDefault: import("typebox").TBoolean;
        heartbeat: import("typebox").TObject<{
          enabled: import("typebox").TBoolean;
          every: import("typebox").TString;
          everyMs: import("typebox").TUnion<[import("typebox").TInteger, import("typebox").TNull]>;
          prompt: import("typebox").TString;
          target: import("typebox").TString;
          model: import("typebox").TOptional<import("typebox").TString>;
          ackMaxChars: import("typebox").TInteger;
        }>;
        sessions: import("typebox").TObject<{
          path: import("typebox").TString;
          count: import("typebox").TInteger;
          recent: import("typebox").TArray<import("typebox").TObject<{
            key: import("typebox").TString;
            updatedAt: import("typebox").TUnion<[import("typebox").TInteger, import("typebox").TNull]>;
            age: import("typebox").TUnion<[import("typebox").TInteger, import("typebox").TNull]>;
          }>>;
        }>;
      }>>>;
      sessions: import("typebox").TOptional<import("typebox").TObject<{
        path: import("typebox").TString;
        count: import("typebox").TInteger;
        recent: import("typebox").TArray<import("typebox").TObject<{
          key: import("typebox").TString;
          updatedAt: import("typebox").TUnion<[import("typebox").TInteger, import("typebox").TNull]>;
          age: import("typebox").TUnion<[import("typebox").TInteger, import("typebox").TNull]>;
        }>>;
      }>>;
    }>;
    stateVersion: import("typebox").TObject<{
      presence: import("typebox").TInteger;
      health: import("typebox").TInteger;
    }>;
    uptimeMs: import("typebox").TInteger;
    appliedConfigHash: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    configPath: import("typebox").TOptional<import("typebox").TString>;
    stateDir: import("typebox").TOptional<import("typebox").TString>;
    sessionDefaults: import("typebox").TOptional<import("typebox").TObject<{
      defaultAgentId: import("typebox").TString;
      mainKey: import("typebox").TString;
      mainSessionKey: import("typebox").TString;
      scope: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    authMode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"none">, import("typebox").TLiteral<"token">, import("typebox").TLiteral<"password">, import("typebox").TLiteral<"trusted-proxy">]>>;
    updateAvailable: import("typebox").TOptional<import("typebox").TObject<{
      currentVersion: import("typebox").TString;
      latestVersion: import("typebox").TString;
      channel: import("typebox").TString;
    }>>;
  }>;
  readonly ErrorShape: import("typebox").TObject<{
    code: import("typebox").TString;
    message: import("typebox").TString;
    details: import("typebox").TOptional<import("typebox").TUnknown>;
    retryable: import("typebox").TOptional<import("typebox").TBoolean>;
    retryAfterMs: import("typebox").TOptional<import("typebox").TInteger>;
  }>;
  readonly MissingScopeErrorDetails: import("typebox").TObject<{
    code: import("typebox").TLiteral<"MISSING_SCOPE">;
    missingScope: import("typebox").TString;
    requiredScopes: import("typebox").TArray<import("typebox").TString>;
  }>;
  readonly McpAppViewExpiredErrorDetails: import("typebox").TObject<{
    code: import("typebox").TLiteral<"MCP_APP_VIEW_EXPIRED">;
  }>;
  readonly UnknownAgentIdErrorDetails: import("typebox").TObject<{
    code: import("typebox").TLiteral<"UNKNOWN_AGENT_ID">;
    agentId: import("typebox").TString;
  }>;
  readonly WizardNotFoundErrorDetails: import("typebox").TObject<{
    code: import("typebox").TLiteral<"WIZARD_NOT_FOUND">;
  }>;
  readonly GatewayErrorDetails: import("typebox").TUnion<[import("typebox").TObject<{
    code: import("typebox").TLiteral<"MISSING_SCOPE">;
    missingScope: import("typebox").TString;
    requiredScopes: import("typebox").TArray<import("typebox").TString>;
  }>, import("typebox").TObject<{
    code: import("typebox").TLiteral<"MCP_APP_VIEW_EXPIRED">;
  }>, import("typebox").TObject<{
    code: import("typebox").TLiteral<"UNKNOWN_AGENT_ID">;
    agentId: import("typebox").TString;
  }>, import("typebox").TObject<{
    code: import("typebox").TLiteral<"WIZARD_NOT_FOUND">;
  }>]>;
  readonly GatewaySuspendTaskBlocker: import("typebox").TObject<{
    taskId: import("typebox").TString;
    status: import("typebox").TLiteral<"running">;
    runtime: import("typebox").TUnion<[import("typebox").TLiteral<"subagent">, import("typebox").TLiteral<"acp">, import("typebox").TLiteral<"cli">, import("typebox").TLiteral<"cron">]>;
    runId: import("typebox").TOptional<import("typebox").TString>;
    label: import("typebox").TOptional<import("typebox").TString>;
    title: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly GatewaySuspendBlocker: import("typebox").TObject<{
    kind: import("typebox").TUnion<[import("typebox").TLiteral<"queue">, import("typebox").TLiteral<"reply">, import("typebox").TLiteral<"embedded-run">, import("typebox").TLiteral<"background-exec">, import("typebox").TLiteral<"cron-run">, import("typebox").TLiteral<"task">, import("typebox").TLiteral<"root-request">, import("typebox").TLiteral<"session-admission">, import("typebox").TLiteral<"session-mutation">, import("typebox").TLiteral<"chat-run">, import("typebox").TLiteral<"queued-turn">, import("typebox").TLiteral<"terminal-persistence">, import("typebox").TLiteral<"terminal-session">]>;
    count: import("typebox").TInteger;
    message: import("typebox").TString;
    task: import("typebox").TOptional<import("typebox").TObject<{
      taskId: import("typebox").TString;
      status: import("typebox").TLiteral<"running">;
      runtime: import("typebox").TUnion<[import("typebox").TLiteral<"subagent">, import("typebox").TLiteral<"acp">, import("typebox").TLiteral<"cli">, import("typebox").TLiteral<"cron">]>;
      runId: import("typebox").TOptional<import("typebox").TString>;
      label: import("typebox").TOptional<import("typebox").TString>;
      title: import("typebox").TOptional<import("typebox").TString>;
    }>>;
  }>;
  readonly GatewaySuspendPrepareParams: import("typebox").TObject<{
    requestId: import("typebox").TString;
  }>;
  readonly GatewaySuspendPrepareBusyResult: import("typebox").TObject<{
    status: import("typebox").TLiteral<"busy">;
    reason: import("typebox").TUnion<[import("typebox").TLiteral<"active-work">, import("typebox").TLiteral<"gateway-draining">]>;
    retryAfterMs: import("typebox").TInteger;
    activeCount: import("typebox").TInteger;
    blockers: import("typebox").TArray<import("typebox").TObject<{
      kind: import("typebox").TUnion<[import("typebox").TLiteral<"queue">, import("typebox").TLiteral<"reply">, import("typebox").TLiteral<"embedded-run">, import("typebox").TLiteral<"background-exec">, import("typebox").TLiteral<"cron-run">, import("typebox").TLiteral<"task">, import("typebox").TLiteral<"root-request">, import("typebox").TLiteral<"session-admission">, import("typebox").TLiteral<"session-mutation">, import("typebox").TLiteral<"chat-run">, import("typebox").TLiteral<"queued-turn">, import("typebox").TLiteral<"terminal-persistence">, import("typebox").TLiteral<"terminal-session">]>;
      count: import("typebox").TInteger;
      message: import("typebox").TString;
      task: import("typebox").TOptional<import("typebox").TObject<{
        taskId: import("typebox").TString;
        status: import("typebox").TLiteral<"running">;
        runtime: import("typebox").TUnion<[import("typebox").TLiteral<"subagent">, import("typebox").TLiteral<"acp">, import("typebox").TLiteral<"cli">, import("typebox").TLiteral<"cron">]>;
        runId: import("typebox").TOptional<import("typebox").TString>;
        label: import("typebox").TOptional<import("typebox").TString>;
        title: import("typebox").TOptional<import("typebox").TString>;
      }>>;
    }>>;
  }>;
  readonly GatewaySuspendPrepareReadyResult: import("typebox").TObject<{
    status: import("typebox").TLiteral<"ready">;
    suspensionId: import("typebox").TString;
    expiresAtMs: import("typebox").TInteger;
    activeCount: import("typebox").TInteger;
    blockers: import("typebox").TArray<import("typebox").TObject<{
      kind: import("typebox").TUnion<[import("typebox").TLiteral<"queue">, import("typebox").TLiteral<"reply">, import("typebox").TLiteral<"embedded-run">, import("typebox").TLiteral<"background-exec">, import("typebox").TLiteral<"cron-run">, import("typebox").TLiteral<"task">, import("typebox").TLiteral<"root-request">, import("typebox").TLiteral<"session-admission">, import("typebox").TLiteral<"session-mutation">, import("typebox").TLiteral<"chat-run">, import("typebox").TLiteral<"queued-turn">, import("typebox").TLiteral<"terminal-persistence">, import("typebox").TLiteral<"terminal-session">]>;
      count: import("typebox").TInteger;
      message: import("typebox").TString;
      task: import("typebox").TOptional<import("typebox").TObject<{
        taskId: import("typebox").TString;
        status: import("typebox").TLiteral<"running">;
        runtime: import("typebox").TUnion<[import("typebox").TLiteral<"subagent">, import("typebox").TLiteral<"acp">, import("typebox").TLiteral<"cli">, import("typebox").TLiteral<"cron">]>;
        runId: import("typebox").TOptional<import("typebox").TString>;
        label: import("typebox").TOptional<import("typebox").TString>;
        title: import("typebox").TOptional<import("typebox").TString>;
      }>>;
    }>>;
  }>;
  readonly GatewaySuspendPrepareResult: import("typebox").TUnion<[import("typebox").TObject<{
    status: import("typebox").TLiteral<"busy">;
    reason: import("typebox").TUnion<[import("typebox").TLiteral<"active-work">, import("typebox").TLiteral<"gateway-draining">]>;
    retryAfterMs: import("typebox").TInteger;
    activeCount: import("typebox").TInteger;
    blockers: import("typebox").TArray<import("typebox").TObject<{
      kind: import("typebox").TUnion<[import("typebox").TLiteral<"queue">, import("typebox").TLiteral<"reply">, import("typebox").TLiteral<"embedded-run">, import("typebox").TLiteral<"background-exec">, import("typebox").TLiteral<"cron-run">, import("typebox").TLiteral<"task">, import("typebox").TLiteral<"root-request">, import("typebox").TLiteral<"session-admission">, import("typebox").TLiteral<"session-mutation">, import("typebox").TLiteral<"chat-run">, import("typebox").TLiteral<"queued-turn">, import("typebox").TLiteral<"terminal-persistence">, import("typebox").TLiteral<"terminal-session">]>;
      count: import("typebox").TInteger;
      message: import("typebox").TString;
      task: import("typebox").TOptional<import("typebox").TObject<{
        taskId: import("typebox").TString;
        status: import("typebox").TLiteral<"running">;
        runtime: import("typebox").TUnion<[import("typebox").TLiteral<"subagent">, import("typebox").TLiteral<"acp">, import("typebox").TLiteral<"cli">, import("typebox").TLiteral<"cron">]>;
        runId: import("typebox").TOptional<import("typebox").TString>;
        label: import("typebox").TOptional<import("typebox").TString>;
        title: import("typebox").TOptional<import("typebox").TString>;
      }>>;
    }>>;
  }>, import("typebox").TObject<{
    status: import("typebox").TLiteral<"ready">;
    suspensionId: import("typebox").TString;
    expiresAtMs: import("typebox").TInteger;
    activeCount: import("typebox").TInteger;
    blockers: import("typebox").TArray<import("typebox").TObject<{
      kind: import("typebox").TUnion<[import("typebox").TLiteral<"queue">, import("typebox").TLiteral<"reply">, import("typebox").TLiteral<"embedded-run">, import("typebox").TLiteral<"background-exec">, import("typebox").TLiteral<"cron-run">, import("typebox").TLiteral<"task">, import("typebox").TLiteral<"root-request">, import("typebox").TLiteral<"session-admission">, import("typebox").TLiteral<"session-mutation">, import("typebox").TLiteral<"chat-run">, import("typebox").TLiteral<"queued-turn">, import("typebox").TLiteral<"terminal-persistence">, import("typebox").TLiteral<"terminal-session">]>;
      count: import("typebox").TInteger;
      message: import("typebox").TString;
      task: import("typebox").TOptional<import("typebox").TObject<{
        taskId: import("typebox").TString;
        status: import("typebox").TLiteral<"running">;
        runtime: import("typebox").TUnion<[import("typebox").TLiteral<"subagent">, import("typebox").TLiteral<"acp">, import("typebox").TLiteral<"cli">, import("typebox").TLiteral<"cron">]>;
        runId: import("typebox").TOptional<import("typebox").TString>;
        label: import("typebox").TOptional<import("typebox").TString>;
        title: import("typebox").TOptional<import("typebox").TString>;
      }>>;
    }>>;
  }>]>;
  readonly GatewaySuspendStatusParams: import("typebox").TObject<{
    suspensionId: import("typebox").TString;
  }>;
  readonly GatewaySuspendStatusRunningResult: import("typebox").TObject<{
    status: import("typebox").TLiteral<"running">;
  }>;
  readonly GatewaySuspendStatusReadyResult: import("typebox").TObject<{
    status: import("typebox").TLiteral<"ready">;
    expiresAtMs: import("typebox").TInteger;
  }>;
  readonly GatewaySuspendStatusResult: import("typebox").TUnion<[import("typebox").TObject<{
    status: import("typebox").TLiteral<"running">;
  }>, import("typebox").TObject<{
    status: import("typebox").TLiteral<"ready">;
    expiresAtMs: import("typebox").TInteger;
  }>]>;
  readonly GatewaySuspendResumeParams: import("typebox").TObject<{
    suspensionId: import("typebox").TString;
  }>;
  readonly GatewaySuspendResumeResult: import("typebox").TObject<{
    ok: import("typebox").TLiteral<true>;
    status: import("typebox").TLiteral<"running">;
    resumed: import("typebox").TBoolean;
  }>;
} & {
  readonly EnvironmentStatus: import("typebox").TString;
  readonly WorkerEnvironmentState: import("typebox").TUnion<[import("typebox").TLiteral<"requested">, import("typebox").TLiteral<"provisioning">, import("typebox").TLiteral<"bootstrapping">, import("typebox").TLiteral<"ready">, import("typebox").TLiteral<"attached">, import("typebox").TLiteral<"idle">, import("typebox").TLiteral<"draining">, import("typebox").TLiteral<"destroying">, import("typebox").TLiteral<"destroyed">, import("typebox").TLiteral<"failed">, import("typebox").TLiteral<"orphaned">]>;
  readonly WorkerTunnelStatus: import("typebox").TUnion<[import("typebox").TLiteral<"stopped">, import("typebox").TLiteral<"connecting">, import("typebox").TLiteral<"connected">, import("typebox").TLiteral<"reconnecting">]>;
  readonly WorkerEnvironmentMetadata: import("typebox").TObject<{
    providerId: import("typebox").TString;
    leaseId: import("typebox").TOptional<import("typebox").TString>;
    state: import("typebox").TUnion<[import("typebox").TLiteral<"requested">, import("typebox").TLiteral<"provisioning">, import("typebox").TLiteral<"bootstrapping">, import("typebox").TLiteral<"ready">, import("typebox").TLiteral<"attached">, import("typebox").TLiteral<"idle">, import("typebox").TLiteral<"draining">, import("typebox").TLiteral<"destroying">, import("typebox").TLiteral<"destroyed">, import("typebox").TLiteral<"failed">, import("typebox").TLiteral<"orphaned">]>;
    ageMs: import("typebox").TInteger;
    idleMs: import("typebox").TOptional<import("typebox").TInteger>;
    attachedSessionIds: import("typebox").TArray<import("typebox").TString>;
    tunnelStatus: import("typebox").TUnion<[import("typebox").TLiteral<"stopped">, import("typebox").TLiteral<"connecting">, import("typebox").TLiteral<"connected">, import("typebox").TLiteral<"reconnecting">]>;
  }>;
  readonly EnvironmentSummary: import("typebox").TObject<{
    id: import("typebox").TString;
    type: import("typebox").TString;
    label: import("typebox").TOptional<import("typebox").TString>;
    status: import("typebox").TString;
    capabilities: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    worker: import("typebox").TOptional<import("typebox").TObject<{
      providerId: import("typebox").TString;
      leaseId: import("typebox").TOptional<import("typebox").TString>;
      state: import("typebox").TUnion<[import("typebox").TLiteral<"requested">, import("typebox").TLiteral<"provisioning">, import("typebox").TLiteral<"bootstrapping">, import("typebox").TLiteral<"ready">, import("typebox").TLiteral<"attached">, import("typebox").TLiteral<"idle">, import("typebox").TLiteral<"draining">, import("typebox").TLiteral<"destroying">, import("typebox").TLiteral<"destroyed">, import("typebox").TLiteral<"failed">, import("typebox").TLiteral<"orphaned">]>;
      ageMs: import("typebox").TInteger;
      idleMs: import("typebox").TOptional<import("typebox").TInteger>;
      attachedSessionIds: import("typebox").TArray<import("typebox").TString>;
      tunnelStatus: import("typebox").TUnion<[import("typebox").TLiteral<"stopped">, import("typebox").TLiteral<"connecting">, import("typebox").TLiteral<"connected">, import("typebox").TLiteral<"reconnecting">]>;
    }>>;
  }>;
  readonly EnvironmentsCreateParams: import("typebox").TObject<{
    profileId: import("typebox").TString;
    idempotencyKey: import("typebox").TString;
  }>;
  readonly EnvironmentsCreateResult: import("typebox").TObject<{
    id: import("typebox").TString;
    type: import("typebox").TString;
    label: import("typebox").TOptional<import("typebox").TString>;
    status: import("typebox").TString;
    capabilities: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    worker: import("typebox").TOptional<import("typebox").TObject<{
      providerId: import("typebox").TString;
      leaseId: import("typebox").TOptional<import("typebox").TString>;
      state: import("typebox").TUnion<[import("typebox").TLiteral<"requested">, import("typebox").TLiteral<"provisioning">, import("typebox").TLiteral<"bootstrapping">, import("typebox").TLiteral<"ready">, import("typebox").TLiteral<"attached">, import("typebox").TLiteral<"idle">, import("typebox").TLiteral<"draining">, import("typebox").TLiteral<"destroying">, import("typebox").TLiteral<"destroyed">, import("typebox").TLiteral<"failed">, import("typebox").TLiteral<"orphaned">]>;
      ageMs: import("typebox").TInteger;
      idleMs: import("typebox").TOptional<import("typebox").TInteger>;
      attachedSessionIds: import("typebox").TArray<import("typebox").TString>;
      tunnelStatus: import("typebox").TUnion<[import("typebox").TLiteral<"stopped">, import("typebox").TLiteral<"connecting">, import("typebox").TLiteral<"connected">, import("typebox").TLiteral<"reconnecting">]>;
    }>>;
  }>;
  readonly EnvironmentsDestroyParams: import("typebox").TObject<{
    environmentId: import("typebox").TString;
    force: import("typebox").TOptional<import("typebox").TBoolean>;
  }>;
  readonly EnvironmentsDestroyResult: import("typebox").TObject<{
    id: import("typebox").TString;
    type: import("typebox").TString;
    label: import("typebox").TOptional<import("typebox").TString>;
    status: import("typebox").TString;
    capabilities: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    worker: import("typebox").TOptional<import("typebox").TObject<{
      providerId: import("typebox").TString;
      leaseId: import("typebox").TOptional<import("typebox").TString>;
      state: import("typebox").TUnion<[import("typebox").TLiteral<"requested">, import("typebox").TLiteral<"provisioning">, import("typebox").TLiteral<"bootstrapping">, import("typebox").TLiteral<"ready">, import("typebox").TLiteral<"attached">, import("typebox").TLiteral<"idle">, import("typebox").TLiteral<"draining">, import("typebox").TLiteral<"destroying">, import("typebox").TLiteral<"destroyed">, import("typebox").TLiteral<"failed">, import("typebox").TLiteral<"orphaned">]>;
      ageMs: import("typebox").TInteger;
      idleMs: import("typebox").TOptional<import("typebox").TInteger>;
      attachedSessionIds: import("typebox").TArray<import("typebox").TString>;
      tunnelStatus: import("typebox").TUnion<[import("typebox").TLiteral<"stopped">, import("typebox").TLiteral<"connecting">, import("typebox").TLiteral<"connected">, import("typebox").TLiteral<"reconnecting">]>;
    }>>;
  }>;
  readonly EnvironmentsListParams: import("typebox").TObject<{}>;
  readonly EnvironmentsListResult: import("typebox").TObject<{
    environments: import("typebox").TArray<import("typebox").TObject<{
      id: import("typebox").TString;
      type: import("typebox").TString;
      label: import("typebox").TOptional<import("typebox").TString>;
      status: import("typebox").TString;
      capabilities: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
      worker: import("typebox").TOptional<import("typebox").TObject<{
        providerId: import("typebox").TString;
        leaseId: import("typebox").TOptional<import("typebox").TString>;
        state: import("typebox").TUnion<[import("typebox").TLiteral<"requested">, import("typebox").TLiteral<"provisioning">, import("typebox").TLiteral<"bootstrapping">, import("typebox").TLiteral<"ready">, import("typebox").TLiteral<"attached">, import("typebox").TLiteral<"idle">, import("typebox").TLiteral<"draining">, import("typebox").TLiteral<"destroying">, import("typebox").TLiteral<"destroyed">, import("typebox").TLiteral<"failed">, import("typebox").TLiteral<"orphaned">]>;
        ageMs: import("typebox").TInteger;
        idleMs: import("typebox").TOptional<import("typebox").TInteger>;
        attachedSessionIds: import("typebox").TArray<import("typebox").TString>;
        tunnelStatus: import("typebox").TUnion<[import("typebox").TLiteral<"stopped">, import("typebox").TLiteral<"connecting">, import("typebox").TLiteral<"connected">, import("typebox").TLiteral<"reconnecting">]>;
      }>>;
    }>>;
    profiles: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
      id: import("typebox").TString;
      providerId: import("typebox").TString;
    }>>>;
  }>;
  readonly EnvironmentsStatusParams: import("typebox").TObject<{
    environmentId: import("typebox").TString;
  }>;
  readonly EnvironmentsStatusResult: import("typebox").TObject<{
    id: import("typebox").TString;
    type: import("typebox").TString;
    label: import("typebox").TOptional<import("typebox").TString>;
    status: import("typebox").TString;
    capabilities: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    worker: import("typebox").TOptional<import("typebox").TObject<{
      providerId: import("typebox").TString;
      leaseId: import("typebox").TOptional<import("typebox").TString>;
      state: import("typebox").TUnion<[import("typebox").TLiteral<"requested">, import("typebox").TLiteral<"provisioning">, import("typebox").TLiteral<"bootstrapping">, import("typebox").TLiteral<"ready">, import("typebox").TLiteral<"attached">, import("typebox").TLiteral<"idle">, import("typebox").TLiteral<"draining">, import("typebox").TLiteral<"destroying">, import("typebox").TLiteral<"destroyed">, import("typebox").TLiteral<"failed">, import("typebox").TLiteral<"orphaned">]>;
      ageMs: import("typebox").TInteger;
      idleMs: import("typebox").TOptional<import("typebox").TInteger>;
      attachedSessionIds: import("typebox").TArray<import("typebox").TString>;
      tunnelStatus: import("typebox").TUnion<[import("typebox").TLiteral<"stopped">, import("typebox").TLiteral<"connecting">, import("typebox").TLiteral<"connected">, import("typebox").TLiteral<"reconnecting">]>;
    }>>;
  }>;
  readonly SystemInfoParams: import("typebox").TObject<{}>;
  readonly SystemInfoResult: import("typebox").TObject<{
    machineName: import("typebox").TString;
    hostname: import("typebox").TString;
    platform: import("typebox").TString;
    release: import("typebox").TString;
    arch: import("typebox").TString;
    osLabel: import("typebox").TString;
    lanAddress: import("typebox").TOptional<import("typebox").TString>;
    port: import("typebox").TOptional<import("typebox").TInteger>;
    nodeVersion: import("typebox").TString;
    pid: import("typebox").TInteger;
    processInstanceId: import("typebox").TOptional<import("typebox").TString>;
    uptimeMs: import("typebox").TInteger;
    cpuCount: import("typebox").TInteger;
    cpuModel: import("typebox").TOptional<import("typebox").TString>;
    loadAverage: import("typebox").TOptional<import("typebox").TTuple<[import("typebox").TNumber, import("typebox").TNumber, import("typebox").TNumber]>>;
    memoryTotalBytes: import("typebox").TInteger;
    memoryFreeBytes: import("typebox").TInteger;
    diskTotalBytes: import("typebox").TOptional<import("typebox").TInteger>;
    diskAvailableBytes: import("typebox").TOptional<import("typebox").TInteger>;
    diskPath: import("typebox").TOptional<import("typebox").TString>;
    defaultAgentUtilityModel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TObject<{
      status: import("typebox").TLiteral<"auto">;
      model: import("typebox").TString;
    }>, import("typebox").TObject<{
      status: import("typebox").TLiteral<"configured">;
      model: import("typebox").TString;
    }>, import("typebox").TObject<{
      status: import("typebox").TLiteral<"disabled">;
    }>, import("typebox").TObject<{
      status: import("typebox").TLiteral<"unavailable">;
    }>]>>;
  }>;
  readonly AgentEvent: import("typebox").TObject<{
    runId: import("typebox").TString;
    seq: import("typebox").TInteger;
    stream: import("typebox").TString;
    ts: import("typebox").TInteger;
    spawnedBy: import("typebox").TOptional<import("typebox").TString>;
    isHeartbeat: import("typebox").TOptional<import("typebox").TBoolean>;
    data: import("typebox").TRecord<"^.*$", import("typebox").TUnknown>;
  }>;
  readonly ConversationSendParams: import("typebox").TObject<{
    agentId: import("typebox").TString;
    sourceSessionKey: import("typebox").TOptional<import("typebox").TString>;
    operationId: import("typebox").TString;
    conversationRef: import("typebox").TString;
    message: import("typebox").TString;
  }>;
  readonly ConversationSendResult: import("typebox").TObject<{
    status: import("typebox").TUnion<[import("typebox").TLiteral<"sent">, import("typebox").TLiteral<"queued">, import("typebox").TLiteral<"suppressed">, import("typebox").TLiteral<"unknown">]>;
    conversationRef: import("typebox").TString;
    channel: import("typebox").TString;
    messageId: import("typebox").TOptional<import("typebox").TString>;
    queueId: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly ConversationListItem: import("typebox").TObject<{
    conversationRef: import("typebox").TString;
    channel: import("typebox").TString;
    accountId: import("typebox").TString;
    kind: import("typebox").TUnion<[import("typebox").TLiteral<"direct">, import("typebox").TLiteral<"group">, import("typebox").TLiteral<"channel">]>;
    target: import("typebox").TString;
    threadId: import("typebox").TOptional<import("typebox").TString>;
    label: import("typebox").TOptional<import("typebox").TString>;
    firstSeenAt: import("typebox").TInteger;
    lastSeenAt: import("typebox").TInteger;
  }>;
  readonly ConversationListParams: import("typebox").TObject<{
    agentId: import("typebox").TString;
    channel: import("typebox").TOptional<import("typebox").TString>;
    query: import("typebox").TOptional<import("typebox").TString>;
    limit: import("typebox").TOptional<import("typebox").TInteger>;
  }>;
  readonly ConversationListResult: import("typebox").TObject<{
    conversations: import("typebox").TArray<import("typebox").TObject<{
      conversationRef: import("typebox").TString;
      channel: import("typebox").TString;
      accountId: import("typebox").TString;
      kind: import("typebox").TUnion<[import("typebox").TLiteral<"direct">, import("typebox").TLiteral<"group">, import("typebox").TLiteral<"channel">]>;
      target: import("typebox").TString;
      threadId: import("typebox").TOptional<import("typebox").TString>;
      label: import("typebox").TOptional<import("typebox").TString>;
      firstSeenAt: import("typebox").TInteger;
      lastSeenAt: import("typebox").TInteger;
    }>>;
  }>;
  readonly ConversationTurnCancelParams: import("typebox").TObject<{
    agentId: import("typebox").TString;
    turnId: import("typebox").TString;
  }>;
  readonly ConversationTurnCancelResult: import("typebox").TObject<{
    cancelled: import("typebox").TBoolean;
  }>;
  readonly ConversationTurnParams: import("typebox").TObject<{
    agentId: import("typebox").TString;
    sourceSessionKey: import("typebox").TOptional<import("typebox").TString>;
    turnId: import("typebox").TString;
    conversationRef: import("typebox").TString;
    message: import("typebox").TString;
    timeoutMs: import("typebox").TInteger;
  }>;
  readonly ConversationTurnReply: import("typebox").TObject<{
    conversationRef: import("typebox").TString;
    messageId: import("typebox").TString;
    replyToId: import("typebox").TOptional<import("typebox").TString>;
    threadId: import("typebox").TOptional<import("typebox").TString>;
    text: import("typebox").TString;
    timestamp: import("typebox").TInteger;
    transcriptArtifactId: import("typebox").TOptional<import("typebox").TString>;
    transcriptMessageId: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly ConversationTurnResult: import("typebox").TUnion<[import("typebox").TObject<{
    status: import("typebox").TLiteral<"replied">;
    reply: import("typebox").TObject<{
      conversationRef: import("typebox").TString;
      messageId: import("typebox").TString;
      replyToId: import("typebox").TOptional<import("typebox").TString>;
      threadId: import("typebox").TOptional<import("typebox").TString>;
      text: import("typebox").TString;
      timestamp: import("typebox").TInteger;
      transcriptArtifactId: import("typebox").TOptional<import("typebox").TString>;
      transcriptMessageId: import("typebox").TOptional<import("typebox").TString>;
    }>;
    conversationRef: import("typebox").TString;
    channel: import("typebox").TString;
    messageId: import("typebox").TString;
    correlationPersisted: import("typebox").TBoolean;
  }>, import("typebox").TObject<{
    status: import("typebox").TLiteral<"timeout">;
    conversationRef: import("typebox").TString;
    channel: import("typebox").TString;
    messageId: import("typebox").TString;
    correlationPersisted: import("typebox").TBoolean;
  }>, import("typebox").TObject<{
    conversationRef: import("typebox").TString;
    channel: import("typebox").TString;
    messageId: import("typebox").TOptional<import("typebox").TString>;
    correlationPersisted: import("typebox").TBoolean;
    status: import("typebox").TUnion<[import("typebox").TLiteral<"sent">, import("typebox").TLiteral<"queued">, import("typebox").TLiteral<"suppressed">, import("typebox").TLiteral<"unknown">]>;
    error: import("typebox").TString;
  }>]>;
  readonly MessageActionParams: import("typebox").TObject<{
    channel: import("typebox").TString;
    action: import("typebox").TString;
    params: import("typebox").TRecord<"^.*$", import("typebox").TUnknown>;
    accountId: import("typebox").TOptional<import("typebox").TString>;
    requesterAccountId: import("typebox").TOptional<import("typebox").TString>;
    requesterSenderId: import("typebox").TOptional<import("typebox").TString>;
    senderIsOwner: import("typebox").TOptional<import("typebox").TBoolean>;
    sessionKey: import("typebox").TOptional<import("typebox").TString>;
    sessionId: import("typebox").TOptional<import("typebox").TString>;
    inboundTurnKind: import("typebox").TOptional<import("typebox").TString>;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    toolContext: import("typebox").TOptional<import("typebox").TObject<{
      currentChannelId: import("typebox").TOptional<import("typebox").TString>;
      currentMessagingTarget: import("typebox").TOptional<import("typebox").TString>;
      currentGraphChannelId: import("typebox").TOptional<import("typebox").TString>;
      currentChannelProvider: import("typebox").TOptional<import("typebox").TString>;
      currentThreadTs: import("typebox").TOptional<import("typebox").TString>;
      currentMessageId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNumber]>>;
      replyToMode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"off">, import("typebox").TLiteral<"first">, import("typebox").TLiteral<"all">, import("typebox").TLiteral<"batched">]>>;
      hasRepliedRef: import("typebox").TOptional<import("typebox").TObject<{
        value: import("typebox").TBoolean;
      }>>;
      sameChannelThreadRequired: import("typebox").TOptional<import("typebox").TBoolean>;
      skipCrossContextDecoration: import("typebox").TOptional<import("typebox").TBoolean>;
    }>>;
    conversationReadOrigin: import("typebox").TOptional<import("typebox").TLiteral<"direct-operator">>;
    idempotencyKey: import("typebox").TString;
  }>;
  readonly SendParams: import("typebox").TObject<{
    to: import("typebox").TString;
    message: import("typebox").TOptional<import("typebox").TString>;
    mediaUrl: import("typebox").TOptional<import("typebox").TString>;
    mediaUrls: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    buffer: import("typebox").TOptional<import("typebox").TString>;
    filename: import("typebox").TOptional<import("typebox").TString>;
    contentType: import("typebox").TOptional<import("typebox").TString>;
    asVoice: import("typebox").TOptional<import("typebox").TBoolean>;
    gifPlayback: import("typebox").TOptional<import("typebox").TBoolean>;
    channel: import("typebox").TOptional<import("typebox").TString>;
    accountId: import("typebox").TOptional<import("typebox").TString>;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    replyToId: import("typebox").TOptional<import("typebox").TString>;
    threadId: import("typebox").TOptional<import("typebox").TString>;
    forceDocument: import("typebox").TOptional<import("typebox").TBoolean>;
    silent: import("typebox").TOptional<import("typebox").TBoolean>;
    parseMode: import("typebox").TOptional<import("typebox").TLiteral<"HTML">>;
    sessionKey: import("typebox").TOptional<import("typebox").TString>;
    idempotencyKey: import("typebox").TString;
  }>;
  readonly PollParams: import("typebox").TObject<{
    to: import("typebox").TString;
    question: import("typebox").TString;
    options: import("typebox").TArray<import("typebox").TString>;
    maxSelections: import("typebox").TOptional<import("typebox").TInteger>;
    durationSeconds: import("typebox").TOptional<import("typebox").TInteger>;
    durationHours: import("typebox").TOptional<import("typebox").TInteger>;
    silent: import("typebox").TOptional<import("typebox").TBoolean>;
    isAnonymous: import("typebox").TOptional<import("typebox").TBoolean>;
    threadId: import("typebox").TOptional<import("typebox").TString>;
    channel: import("typebox").TOptional<import("typebox").TString>;
    accountId: import("typebox").TOptional<import("typebox").TString>;
    idempotencyKey: import("typebox").TString;
  }>;
  readonly AgentParams: import("typebox").TObject<{
    message: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    provider: import("typebox").TOptional<import("typebox").TString>;
    model: import("typebox").TOptional<import("typebox").TString>;
    to: import("typebox").TOptional<import("typebox").TString>;
    replyTo: import("typebox").TOptional<import("typebox").TString>;
    sessionId: import("typebox").TOptional<import("typebox").TString>;
    sessionKey: import("typebox").TOptional<import("typebox").TString>;
    expectedExistingSessionId: import("typebox").TOptional<import("typebox").TString>;
    thinking: import("typebox").TOptional<import("typebox").TString>;
    deliver: import("typebox").TOptional<import("typebox").TBoolean>;
    attachments: import("typebox").TOptional<import("typebox").TArray<import("typebox").TUnknown>>;
    channel: import("typebox").TOptional<import("typebox").TString>;
    replyChannel: import("typebox").TOptional<import("typebox").TString>;
    accountId: import("typebox").TOptional<import("typebox").TString>;
    replyAccountId: import("typebox").TOptional<import("typebox").TString>;
    threadId: import("typebox").TOptional<import("typebox").TString>;
    groupId: import("typebox").TOptional<import("typebox").TString>;
    groupChannel: import("typebox").TOptional<import("typebox").TString>;
    groupSpace: import("typebox").TOptional<import("typebox").TString>;
    timeout: import("typebox").TOptional<import("typebox").TInteger>;
    bestEffortDeliver: import("typebox").TOptional<import("typebox").TBoolean>;
    lane: import("typebox").TOptional<import("typebox").TString>;
    cwd: import("typebox").TOptional<import("typebox").TString>;
    cleanupBundleMcpOnRunEnd: import("typebox").TOptional<import("typebox").TBoolean>;
    modelRun: import("typebox").TOptional<import("typebox").TBoolean>;
    promptMode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"full">, import("typebox").TLiteral<"minimal">, import("typebox").TLiteral<"none">]>>;
    extraSystemPrompt: import("typebox").TOptional<import("typebox").TString>;
    bootstrapContextMode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"full">, import("typebox").TLiteral<"lightweight">]>>;
    bootstrapContextRunKind: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"default">, import("typebox").TLiteral<"heartbeat">, import("typebox").TLiteral<"cron">]>>;
    acpTurnSource: import("typebox").TOptional<import("typebox").TLiteral<"manual_spawn">>;
    internalRuntimeHandoffId: import("typebox").TOptional<import("typebox").TString>;
    execApprovalFollowupExpectedSessionId: import("typebox").TOptional<import("typebox").TString>;
    internalEvents: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
      type: import("typebox").TLiteral<"task_completion">;
      source: import("typebox").TString;
      childSessionKey: import("typebox").TString;
      childSessionId: import("typebox").TOptional<import("typebox").TString>;
      announceType: import("typebox").TString;
      taskLabel: import("typebox").TString;
      status: import("typebox").TString;
      statusLabel: import("typebox").TString;
      result: import("typebox").TString;
      attachments: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
        type: import("typebox").TOptional<import("typebox").TString>;
        path: import("typebox").TOptional<import("typebox").TString>;
        url: import("typebox").TOptional<import("typebox").TString>;
        mediaUrl: import("typebox").TOptional<import("typebox").TString>;
        filePath: import("typebox").TOptional<import("typebox").TString>;
        mimeType: import("typebox").TOptional<import("typebox").TString>;
        name: import("typebox").TOptional<import("typebox").TString>;
        sizeBytes: import("typebox").TOptional<import("typebox").TNumber>;
        durationMs: import("typebox").TOptional<import("typebox").TNumber>;
        width: import("typebox").TOptional<import("typebox").TNumber>;
        height: import("typebox").TOptional<import("typebox").TNumber>;
      }>>>;
      mediaUrls: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
      statsLine: import("typebox").TOptional<import("typebox").TString>;
      replyInstruction: import("typebox").TString;
    }>>>;
    inputProvenance: import("typebox").TOptional<import("typebox").TObject<{
      kind: import("typebox").TString;
      originSessionId: import("typebox").TOptional<import("typebox").TString>;
      sourceSessionKey: import("typebox").TOptional<import("typebox").TString>;
      sourceChannel: import("typebox").TOptional<import("typebox").TString>;
      sourceTool: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    suppressPromptPersistence: import("typebox").TOptional<import("typebox").TBoolean>;
    sessionEffects: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"visible">, import("typebox").TLiteral<"internal">]>>;
    sourceReplyDeliveryMode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"automatic">, import("typebox").TLiteral<"message_tool_only">]>>;
    disableMessageTool: import("typebox").TOptional<import("typebox").TBoolean>;
    swarmCollector: import("typebox").TOptional<import("typebox").TBoolean>;
    swarmOutputSchema: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TUnknown>>;
    forceRestartSafeTools: import("typebox").TOptional<import("typebox").TBoolean>;
    voiceWakeTrigger: import("typebox").TOptional<import("typebox").TString>;
    idempotencyKey: import("typebox").TString;
    label: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly AgentIdentityParams: import("typebox").TObject<{
    agentId: import("typebox").TOptional<import("typebox").TString>;
    sessionKey: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly AgentIdentityResult: import("typebox").TObject<{
    agentId: import("typebox").TString;
    name: import("typebox").TOptional<import("typebox").TString>;
    avatar: import("typebox").TOptional<import("typebox").TString>;
    avatarSource: import("typebox").TOptional<import("typebox").TString>;
    avatarStatus: import("typebox").TOptional<import("typebox").TString>;
    avatarReason: import("typebox").TOptional<import("typebox").TString>;
    emoji: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly AgentWaitParams: import("typebox").TObject<{
    runId: import("typebox").TString;
    timeoutMs: import("typebox").TOptional<import("typebox").TInteger>;
  }>;
  readonly WakeParams: import("typebox").TObject<{
    mode: import("typebox").TUnion<[import("typebox").TLiteral<"now">, import("typebox").TLiteral<"next-heartbeat">]>;
    text: import("typebox").TString;
    sessionKey: import("typebox").TOptional<import("typebox").TString>;
    agentId: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly WorktreeRecord: import("typebox").TObject<{
    id: import("typebox").TString;
    name: import("typebox").TString;
    repoFingerprint: import("typebox").TString;
    repoRoot: import("typebox").TString;
    path: import("typebox").TString;
    branch: import("typebox").TString;
    baseRef: import("typebox").TString;
    ownerKind: import("typebox").TString;
    ownerId: import("typebox").TOptional<import("typebox").TString>;
    snapshotRef: import("typebox").TOptional<import("typebox").TString>;
    createdAt: import("typebox").TInteger;
    lastActiveAt: import("typebox").TInteger;
    removedAt: import("typebox").TOptional<import("typebox").TInteger>;
  }>;
  readonly WorktreesListParams: import("typebox").TObject<{}>;
  readonly WorktreesListResult: import("typebox").TObject<{
    worktrees: import("typebox").TArray<import("typebox").TObject<{
      id: import("typebox").TString;
      name: import("typebox").TString;
      repoFingerprint: import("typebox").TString;
      repoRoot: import("typebox").TString;
      path: import("typebox").TString;
      branch: import("typebox").TString;
      baseRef: import("typebox").TString;
      ownerKind: import("typebox").TString;
      ownerId: import("typebox").TOptional<import("typebox").TString>;
      snapshotRef: import("typebox").TOptional<import("typebox").TString>;
      createdAt: import("typebox").TInteger;
      lastActiveAt: import("typebox").TInteger;
      removedAt: import("typebox").TOptional<import("typebox").TInteger>;
    }>>;
  }>;
  readonly WorktreesCreateParams: import("typebox").TObject<{
    repoRoot: import("typebox").TString;
    name: import("typebox").TOptional<import("typebox").TString>;
    baseRef: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly WorktreesRemoveParams: import("typebox").TObject<{
    id: import("typebox").TString;
    force: import("typebox").TOptional<import("typebox").TBoolean>;
  }>;
  readonly WorktreesRemoveResult: import("typebox").TObject<{
    removed: import("typebox").TBoolean;
    snapshotRef: import("typebox").TOptional<import("typebox").TString>;
    snapshotError: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly WorktreesRestoreParams: import("typebox").TObject<{
    id: import("typebox").TString;
  }>;
  readonly WorktreesGcParams: import("typebox").TObject<{}>;
  readonly WorktreesGcResult: import("typebox").TObject<{
    removed: import("typebox").TArray<import("typebox").TString>;
    orphansDeleted: import("typebox").TInteger;
    snapshotsPruned: import("typebox").TInteger;
  }>;
  readonly WorktreeBranch: import("typebox").TObject<{
    name: import("typebox").TString;
    kind: import("typebox").TUnion<[import("typebox").TLiteral<"local">, import("typebox").TLiteral<"remote">]>;
  }>;
  readonly WorktreeRepositoryStatus: import("typebox").TString;
  readonly WorktreesBranchesParams: import("typebox").TObject<{
    repoRoot: import("typebox").TString;
    includeRepositoryStatus: import("typebox").TOptional<import("typebox").TBoolean>;
  }>;
  readonly WorktreesBranchesResult: import("typebox").TObject<{
    branches: import("typebox").TArray<import("typebox").TObject<{
      name: import("typebox").TString;
      kind: import("typebox").TUnion<[import("typebox").TLiteral<"local">, import("typebox").TLiteral<"remote">]>;
    }>>;
    defaultBranch: import("typebox").TOptional<import("typebox").TString>;
    headBranch: import("typebox").TOptional<import("typebox").TString>;
    repositoryStatus: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly FsDirEntry: import("typebox").TObject<{
    name: import("typebox").TString;
    path: import("typebox").TString;
    hidden: import("typebox").TOptional<import("typebox").TBoolean>;
  }>;
  readonly FsListDirParams: import("typebox").TObject<{
    path: import("typebox").TOptional<import("typebox").TString>;
    nodeId: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly FsListDirResult: import("typebox").TObject<{
    path: import("typebox").TString;
    parent: import("typebox").TOptional<import("typebox").TString>;
    home: import("typebox").TString;
    entries: import("typebox").TArray<import("typebox").TObject<{
      name: import("typebox").TString;
      path: import("typebox").TString;
      hidden: import("typebox").TOptional<import("typebox").TBoolean>;
    }>>;
  }>;
} & {
  readonly NodePendingDrainParams: import("typebox").TObject<{
    maxItems: import("typebox").TOptional<import("typebox").TInteger>;
  }>;
  readonly NodePendingDrainResult: import("typebox").TObject<{
    nodeId: import("typebox").TString;
    revision: import("typebox").TInteger;
    items: import("typebox").TArray<import("typebox").TObject<{
      id: import("typebox").TString;
      type: import("typebox").TString;
      priority: import("typebox").TString;
      createdAtMs: import("typebox").TInteger;
      expiresAtMs: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TInteger, import("typebox").TNull]>>;
      payload: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TUnknown>>;
    }>>;
    hasMore: import("typebox").TBoolean;
  }>;
  readonly NodePendingEnqueueParams: import("typebox").TObject<{
    nodeId: import("typebox").TString;
    type: import("typebox").TString;
    priority: import("typebox").TOptional<import("typebox").TString>;
    expiresInMs: import("typebox").TOptional<import("typebox").TInteger>;
    wake: import("typebox").TOptional<import("typebox").TBoolean>;
  }>;
  readonly NodePendingEnqueueResult: import("typebox").TObject<{
    nodeId: import("typebox").TString;
    revision: import("typebox").TInteger;
    queued: import("typebox").TObject<{
      id: import("typebox").TString;
      type: import("typebox").TString;
      priority: import("typebox").TString;
      createdAtMs: import("typebox").TInteger;
      expiresAtMs: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TInteger, import("typebox").TNull]>>;
      payload: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TUnknown>>;
    }>;
    wakeTriggered: import("typebox").TBoolean;
  }>;
  readonly NodePresenceAliveReason: import("typebox").TString;
  readonly NodePresenceActivityPayload: import("typebox").TUnion<[import("typebox").TObject<{
    idleSeconds: import("typebox").TInteger;
    saturated: import("typebox").TOptional<import("typebox").TBoolean>;
  }>, import("typebox").TObject<{
    action: import("typebox").TLiteral<"clear">;
  }>]>;
  readonly NodeEventParams: import("typebox").TObject<{
    event: import("typebox").TString;
    payload: import("typebox").TOptional<import("typebox").TUnknown>;
    payloadJSON: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly NodeEventResult: import("typebox").TObject<{
    ok: import("typebox").TBoolean;
    event: import("typebox").TString;
    handled: import("typebox").TBoolean;
    reason: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly NodePresenceAlivePayload: import("typebox").TObject<{
    trigger: import("typebox").TString;
    sentAtMs: import("typebox").TOptional<import("typebox").TInteger>;
    displayName: import("typebox").TOptional<import("typebox").TString>;
    version: import("typebox").TOptional<import("typebox").TString>;
    platform: import("typebox").TOptional<import("typebox").TString>;
    deviceFamily: import("typebox").TOptional<import("typebox").TString>;
    modelIdentifier: import("typebox").TOptional<import("typebox").TString>;
    pushTransport: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly NodeInvokeParams: import("typebox").TObject<{
    nodeId: import("typebox").TString;
    command: import("typebox").TString;
    params: import("typebox").TOptional<import("typebox").TUnknown>;
    timeoutMs: import("typebox").TOptional<import("typebox").TInteger>;
    idempotencyKey: import("typebox").TString;
    sessionKey: import("typebox").TOptional<import("typebox").TString>;
    turnSourceChannel: import("typebox").TOptional<import("typebox").TString>;
    turnSourceTo: import("typebox").TOptional<import("typebox").TString>;
    turnSourceAccountId: import("typebox").TOptional<import("typebox").TString>;
    turnSourceThreadId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNumber]>>;
  }>;
  readonly NodeInvokeInputEvent: import("typebox").TObject<{
    id: import("typebox").TString;
    nodeId: import("typebox").TString;
    seq: import("typebox").TInteger;
    payloadJSON: import("typebox").TString;
  }>;
  readonly NodeInvokeProgressParams: import("typebox").TObject<{
    invokeId: import("typebox").TString;
    nodeId: import("typebox").TString;
    seq: import("typebox").TInteger;
    chunk: import("typebox").TString;
  }>;
  readonly NodeInvokeResultParams: import("typebox").TObject<{
    id: import("typebox").TString;
    nodeId: import("typebox").TString;
    ok: import("typebox").TBoolean;
    payload: import("typebox").TOptional<import("typebox").TUnknown>;
    payloadJSON: import("typebox").TOptional<import("typebox").TString>;
    error: import("typebox").TOptional<import("typebox").TObject<{
      code: import("typebox").TOptional<import("typebox").TString>;
      message: import("typebox").TOptional<import("typebox").TString>;
    }>>;
  }>;
  readonly NodeInvokeRequestEvent: import("typebox").TObject<{
    id: import("typebox").TString;
    nodeId: import("typebox").TString;
    command: import("typebox").TString;
    paramsJSON: import("typebox").TOptional<import("typebox").TString>;
    timeoutMs: import("typebox").TOptional<import("typebox").TInteger>;
    idempotencyKey: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly NodePairListParams: import("typebox").TObject<{}>;
  readonly NodePairApproveParams: import("typebox").TObject<{
    requestId: import("typebox").TString;
  }>;
  readonly NodePairRejectParams: import("typebox").TObject<{
    requestId: import("typebox").TString;
  }>;
  readonly NodePairRemoveParams: import("typebox").TObject<{
    nodeId: import("typebox").TString;
  }>;
  readonly NodeRenameParams: import("typebox").TObject<{
    nodeId: import("typebox").TString;
    displayName: import("typebox").TString;
  }>;
  readonly NodeListParams: import("typebox").TObject<{}>;
  readonly NodePluginToolDescriptor: import("typebox").TObject<{
    pluginId: import("typebox").TString;
    name: import("typebox").TString;
    description: import("typebox").TString;
    parameters: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TUnknown>>;
    command: import("typebox").TOptional<import("typebox").TString>;
    mcp: import("typebox").TOptional<import("typebox").TObject<{
      server: import("typebox").TString;
      tool: import("typebox").TString;
    }>>;
  }>;
  readonly NodePluginToolsUpdateParams: import("typebox").TObject<{
    tools: import("typebox").TArray<import("typebox").TObject<{
      pluginId: import("typebox").TString;
      name: import("typebox").TString;
      description: import("typebox").TString;
      parameters: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TUnknown>>;
      command: import("typebox").TOptional<import("typebox").TString>;
      mcp: import("typebox").TOptional<import("typebox").TObject<{
        server: import("typebox").TString;
        tool: import("typebox").TString;
      }>>;
    }>>;
  }>;
  readonly NodeSkillDescriptor: import("typebox").TObject<{
    name: import("typebox").TString;
    description: import("typebox").TString;
    content: import("typebox").TString;
  }>;
  readonly NodeSkillsUpdateParams: import("typebox").TObject<{
    skills: import("typebox").TArray<import("typebox").TObject<{
      name: import("typebox").TString;
      description: import("typebox").TString;
      content: import("typebox").TString;
    }>>;
  }>;
  readonly NodePendingAckParams: import("typebox").TObject<{
    ids: import("typebox").TArray<import("typebox").TString>;
  }>;
  readonly NodeDescribeParams: import("typebox").TObject<{
    nodeId: import("typebox").TString;
  }>;
} & {
  readonly PushTestParams: import("typebox").TObject<{
    nodeId: import("typebox").TString;
    title: import("typebox").TOptional<import("typebox").TString>;
    body: import("typebox").TOptional<import("typebox").TString>;
    environment: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly PushTestResult: import("typebox").TObject<{
    ok: import("typebox").TBoolean;
    status: import("typebox").TInteger;
    apnsId: import("typebox").TOptional<import("typebox").TString>;
    reason: import("typebox").TOptional<import("typebox").TString>;
    tokenSuffix: import("typebox").TString;
    topic: import("typebox").TString;
    environment: import("typebox").TString;
    transport: import("typebox").TString;
  }>;
  readonly UiSplitCommand: import("typebox").TObject<{
    kind: import("typebox").TLiteral<"split">;
    direction: import("typebox").TUnion<[import("typebox").TLiteral<"right">, import("typebox").TLiteral<"down">]>;
    sessionKey: import("typebox").TString;
  }>;
  readonly UiClosePaneCommand: import("typebox").TObject<{
    kind: import("typebox").TLiteral<"close-pane">;
    sessionKey: import("typebox").TString;
  }>;
  readonly UiFocusCommand: import("typebox").TObject<{
    kind: import("typebox").TLiteral<"focus">;
    sessionKey: import("typebox").TString;
  }>;
  readonly UiSidebarCommand: import("typebox").TObject<{
    kind: import("typebox").TLiteral<"sidebar">;
    visible: import("typebox").TBoolean;
  }>;
  readonly UiPanelCommand: import("typebox").TObject<{
    kind: import("typebox").TLiteral<"panel">;
    panel: import("typebox").TUnion<[import("typebox").TLiteral<"terminal">, import("typebox").TLiteral<"browser">]>;
    open: import("typebox").TBoolean;
    dock: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"bottom">, import("typebox").TLiteral<"right">]>>;
    terminalSessionId: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly UiNavigateCommand: import("typebox").TObject<{
    kind: import("typebox").TLiteral<"navigate">;
    sessionKey: import("typebox").TString;
  }>;
  readonly UiCommand: import("typebox").TUnion<[import("typebox").TObject<{
    kind: import("typebox").TLiteral<"split">;
    direction: import("typebox").TUnion<[import("typebox").TLiteral<"right">, import("typebox").TLiteral<"down">]>;
    sessionKey: import("typebox").TString;
  }>, import("typebox").TObject<{
    kind: import("typebox").TLiteral<"close-pane">;
    sessionKey: import("typebox").TString;
  }>, import("typebox").TObject<{
    kind: import("typebox").TLiteral<"focus">;
    sessionKey: import("typebox").TString;
  }>, import("typebox").TObject<{
    kind: import("typebox").TLiteral<"sidebar">;
    visible: import("typebox").TBoolean;
  }>, import("typebox").TObject<{
    kind: import("typebox").TLiteral<"panel">;
    panel: import("typebox").TUnion<[import("typebox").TLiteral<"terminal">, import("typebox").TLiteral<"browser">]>;
    open: import("typebox").TBoolean;
    dock: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"bottom">, import("typebox").TLiteral<"right">]>>;
    terminalSessionId: import("typebox").TOptional<import("typebox").TString>;
  }>, import("typebox").TObject<{
    kind: import("typebox").TLiteral<"navigate">;
    sessionKey: import("typebox").TString;
  }>]>;
  readonly UiCommandParams: import("typebox").TObject<{
    command: import("typebox").TUnion<[import("typebox").TObject<{
      kind: import("typebox").TLiteral<"split">;
      direction: import("typebox").TUnion<[import("typebox").TLiteral<"right">, import("typebox").TLiteral<"down">]>;
      sessionKey: import("typebox").TString;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"close-pane">;
      sessionKey: import("typebox").TString;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"focus">;
      sessionKey: import("typebox").TString;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"sidebar">;
      visible: import("typebox").TBoolean;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"panel">;
      panel: import("typebox").TUnion<[import("typebox").TLiteral<"terminal">, import("typebox").TLiteral<"browser">]>;
      open: import("typebox").TBoolean;
      dock: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"bottom">, import("typebox").TLiteral<"right">]>>;
      terminalSessionId: import("typebox").TOptional<import("typebox").TString>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"navigate">;
      sessionKey: import("typebox").TString;
    }>]>;
    sessionKey: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly UiCommandResult: import("typebox").TObject<{
    ok: import("typebox").TBoolean;
  }>;
  readonly SecretsReloadParams: import("typebox").TObject<{}>;
  readonly SecretsResolveParams: import("typebox").TObject<{
    commandName: import("typebox").TString;
    targetIds: import("typebox").TArray<import("typebox").TString>;
    allowedPaths: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    forcedActivePaths: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    optionalActivePaths: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    providerOverrides: import("typebox").TOptional<import("typebox").TObject<{
      webSearch: import("typebox").TOptional<import("typebox").TString>;
      webFetch: import("typebox").TOptional<import("typebox").TString>;
    }>>;
  }>;
  readonly SecretsResolveAssignment: import("typebox").TObject<{
    path: import("typebox").TOptional<import("typebox").TString>;
    pathSegments: import("typebox").TArray<import("typebox").TString>;
    value: import("typebox").TUnknown;
  }>;
  readonly SecretsResolveResult: import("typebox").TObject<{
    ok: import("typebox").TOptional<import("typebox").TBoolean>;
    assignments: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
      path: import("typebox").TOptional<import("typebox").TString>;
      pathSegments: import("typebox").TArray<import("typebox").TString>;
      value: import("typebox").TUnknown;
    }>>>;
    diagnostics: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    inactiveRefPaths: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
  }>;
} & {
  readonly SessionsListParams: import("typebox").TObject<{
    limit: import("typebox").TOptional<import("typebox").TInteger>;
    offset: import("typebox").TOptional<import("typebox").TInteger>;
    activeMinutes: import("typebox").TOptional<import("typebox").TInteger>;
    requireLastInteraction: import("typebox").TOptional<import("typebox").TBoolean>;
    sortBy: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"updatedAt">, import("typebox").TLiteral<"lastInteractionAt">]>>;
    includeGlobal: import("typebox").TOptional<import("typebox").TBoolean>;
    includeUnknown: import("typebox").TOptional<import("typebox").TBoolean>;
    configuredAgentsOnly: import("typebox").TOptional<import("typebox").TBoolean>;
    includeDerivedTitles: import("typebox").TOptional<import("typebox").TBoolean>;
    includeLastMessage: import("typebox").TOptional<import("typebox").TBoolean>;
    label: import("typebox").TOptional<import("typebox").TString>;
    boardFace: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"chat">, import("typebox").TLiteral<"dashboard">]>>;
    creatorId: import("typebox").TOptional<import("typebox").TString>;
    spawnedBy: import("typebox").TOptional<import("typebox").TString>;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    search: import("typebox").TOptional<import("typebox").TString>;
    archived: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TBoolean, import("typebox").TLiteral<"all">]>>;
  }>;
  readonly SessionCatalogCapabilities: import("typebox").TObject<{
    continueSession: import("typebox").TBoolean;
    archive: import("typebox").TBoolean;
    createSession: import("typebox").TOptional<import("typebox").TObject<{
      model: import("typebox").TString;
    }>>;
    openTerminal: import("typebox").TOptional<import("typebox").TBoolean>;
  }>;
  readonly SessionCatalogDescriptor: import("typebox").TObject<{
    id: import("typebox").TString;
    label: import("typebox").TString;
    capabilities: import("typebox").TObject<{
      continueSession: import("typebox").TBoolean;
      archive: import("typebox").TBoolean;
      createSession: import("typebox").TOptional<import("typebox").TObject<{
        model: import("typebox").TString;
      }>>;
      openTerminal: import("typebox").TOptional<import("typebox").TBoolean>;
    }>;
  }>;
  readonly SessionCatalogPullRequestSummary: import("typebox").TObject<{
    numbers: import("typebox").TArray<import("typebox").TInteger>;
    state: import("typebox").TUnion<[import("typebox").TLiteral<"open">, import("typebox").TLiteral<"draft">, import("typebox").TLiteral<"merged">, import("typebox").TLiteral<"closed">]>;
  }>;
  readonly SessionCatalogSession: import("typebox").TObject<{
    threadId: import("typebox").TString;
    name: import("typebox").TOptional<import("typebox").TString>;
    cwd: import("typebox").TOptional<import("typebox").TString>;
    status: import("typebox").TString;
    createdAt: import("typebox").TOptional<import("typebox").TNumber>;
    updatedAt: import("typebox").TOptional<import("typebox").TNumber>;
    recencyAt: import("typebox").TOptional<import("typebox").TNumber>;
    source: import("typebox").TOptional<import("typebox").TString>;
    modelProvider: import("typebox").TOptional<import("typebox").TString>;
    cliVersion: import("typebox").TOptional<import("typebox").TString>;
    gitBranch: import("typebox").TOptional<import("typebox").TString>;
    customGroup: import("typebox").TOptional<import("typebox").TString>;
    pullRequest: import("typebox").TOptional<import("typebox").TObject<{
      numbers: import("typebox").TArray<import("typebox").TInteger>;
      state: import("typebox").TUnion<[import("typebox").TLiteral<"open">, import("typebox").TLiteral<"draft">, import("typebox").TLiteral<"merged">, import("typebox").TLiteral<"closed">]>;
    }>>;
    archived: import("typebox").TBoolean;
    sessionKey: import("typebox").TOptional<import("typebox").TString>;
    createdActor: import("typebox").TOptional<import("typebox").TObject<{
      type: import("typebox").TUnion<[import("typebox").TLiteral<"human">, import("typebox").TLiteral<"agent">, import("typebox").TLiteral<"system">]>;
      id: import("typebox").TOptional<import("typebox").TString>;
      label: import("typebox").TOptional<import("typebox").TString>;
      avatarUrl: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    canContinue: import("typebox").TBoolean;
    canArchive: import("typebox").TBoolean;
    canOpenTerminal: import("typebox").TOptional<import("typebox").TBoolean>;
  }>;
  readonly SessionCatalogHost: import("typebox").TObject<{
    hostId: import("typebox").TString;
    label: import("typebox").TString;
    kind: import("typebox").TUnion<[import("typebox").TLiteral<"gateway">, import("typebox").TLiteral<"node">]>;
    connected: import("typebox").TBoolean;
    nodeId: import("typebox").TOptional<import("typebox").TString>;
    sessions: import("typebox").TArray<import("typebox").TObject<{
      threadId: import("typebox").TString;
      name: import("typebox").TOptional<import("typebox").TString>;
      cwd: import("typebox").TOptional<import("typebox").TString>;
      status: import("typebox").TString;
      createdAt: import("typebox").TOptional<import("typebox").TNumber>;
      updatedAt: import("typebox").TOptional<import("typebox").TNumber>;
      recencyAt: import("typebox").TOptional<import("typebox").TNumber>;
      source: import("typebox").TOptional<import("typebox").TString>;
      modelProvider: import("typebox").TOptional<import("typebox").TString>;
      cliVersion: import("typebox").TOptional<import("typebox").TString>;
      gitBranch: import("typebox").TOptional<import("typebox").TString>;
      customGroup: import("typebox").TOptional<import("typebox").TString>;
      pullRequest: import("typebox").TOptional<import("typebox").TObject<{
        numbers: import("typebox").TArray<import("typebox").TInteger>;
        state: import("typebox").TUnion<[import("typebox").TLiteral<"open">, import("typebox").TLiteral<"draft">, import("typebox").TLiteral<"merged">, import("typebox").TLiteral<"closed">]>;
      }>>;
      archived: import("typebox").TBoolean;
      sessionKey: import("typebox").TOptional<import("typebox").TString>;
      createdActor: import("typebox").TOptional<import("typebox").TObject<{
        type: import("typebox").TUnion<[import("typebox").TLiteral<"human">, import("typebox").TLiteral<"agent">, import("typebox").TLiteral<"system">]>;
        id: import("typebox").TOptional<import("typebox").TString>;
        label: import("typebox").TOptional<import("typebox").TString>;
        avatarUrl: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      canContinue: import("typebox").TBoolean;
      canArchive: import("typebox").TBoolean;
      canOpenTerminal: import("typebox").TOptional<import("typebox").TBoolean>;
    }>>;
    nextCursor: import("typebox").TOptional<import("typebox").TString>;
    error: import("typebox").TOptional<import("typebox").TObject<{
      code: import("typebox").TString;
      message: import("typebox").TString;
    }>>;
  }>;
  readonly SessionCatalog: import("typebox").TObject<{
    id: import("typebox").TString;
    label: import("typebox").TString;
    capabilities: import("typebox").TObject<{
      continueSession: import("typebox").TBoolean;
      archive: import("typebox").TBoolean;
      createSession: import("typebox").TOptional<import("typebox").TObject<{
        model: import("typebox").TString;
      }>>;
      openTerminal: import("typebox").TOptional<import("typebox").TBoolean>;
    }>;
    hosts: import("typebox").TArray<import("typebox").TObject<{
      hostId: import("typebox").TString;
      label: import("typebox").TString;
      kind: import("typebox").TUnion<[import("typebox").TLiteral<"gateway">, import("typebox").TLiteral<"node">]>;
      connected: import("typebox").TBoolean;
      nodeId: import("typebox").TOptional<import("typebox").TString>;
      sessions: import("typebox").TArray<import("typebox").TObject<{
        threadId: import("typebox").TString;
        name: import("typebox").TOptional<import("typebox").TString>;
        cwd: import("typebox").TOptional<import("typebox").TString>;
        status: import("typebox").TString;
        createdAt: import("typebox").TOptional<import("typebox").TNumber>;
        updatedAt: import("typebox").TOptional<import("typebox").TNumber>;
        recencyAt: import("typebox").TOptional<import("typebox").TNumber>;
        source: import("typebox").TOptional<import("typebox").TString>;
        modelProvider: import("typebox").TOptional<import("typebox").TString>;
        cliVersion: import("typebox").TOptional<import("typebox").TString>;
        gitBranch: import("typebox").TOptional<import("typebox").TString>;
        customGroup: import("typebox").TOptional<import("typebox").TString>;
        pullRequest: import("typebox").TOptional<import("typebox").TObject<{
          numbers: import("typebox").TArray<import("typebox").TInteger>;
          state: import("typebox").TUnion<[import("typebox").TLiteral<"open">, import("typebox").TLiteral<"draft">, import("typebox").TLiteral<"merged">, import("typebox").TLiteral<"closed">]>;
        }>>;
        archived: import("typebox").TBoolean;
        sessionKey: import("typebox").TOptional<import("typebox").TString>;
        createdActor: import("typebox").TOptional<import("typebox").TObject<{
          type: import("typebox").TUnion<[import("typebox").TLiteral<"human">, import("typebox").TLiteral<"agent">, import("typebox").TLiteral<"system">]>;
          id: import("typebox").TOptional<import("typebox").TString>;
          label: import("typebox").TOptional<import("typebox").TString>;
          avatarUrl: import("typebox").TOptional<import("typebox").TString>;
        }>>;
        canContinue: import("typebox").TBoolean;
        canArchive: import("typebox").TBoolean;
        canOpenTerminal: import("typebox").TOptional<import("typebox").TBoolean>;
      }>>;
      nextCursor: import("typebox").TOptional<import("typebox").TString>;
      error: import("typebox").TOptional<import("typebox").TObject<{
        code: import("typebox").TString;
        message: import("typebox").TString;
      }>>;
    }>>;
    error: import("typebox").TOptional<import("typebox").TObject<{
      code: import("typebox").TString;
      message: import("typebox").TString;
    }>>;
  }>;
  readonly SessionCatalogTranscriptItem: import("typebox").TObject<{
    id: import("typebox").TOptional<import("typebox").TString>;
    type: import("typebox").TUnion<[import("typebox").TLiteral<"userMessage">, import("typebox").TLiteral<"agentMessage">, import("typebox").TLiteral<"reasoning">, import("typebox").TLiteral<"toolCall">, import("typebox").TLiteral<"toolResult">, import("typebox").TLiteral<"other">]>;
    text: import("typebox").TOptional<import("typebox").TString>;
    timestamp: import("typebox").TOptional<import("typebox").TString>;
    model: import("typebox").TOptional<import("typebox").TString>;
    truncated: import("typebox").TOptional<import("typebox").TBoolean>;
    raw: import("typebox").TOptional<import("typebox").TUnknown>;
  }>;
  readonly SessionsCatalogListParams: import("typebox").TObject<{
    agentId: import("typebox").TOptional<import("typebox").TString>;
    progressId: import("typebox").TOptional<import("typebox").TString>;
    search: import("typebox").TOptional<import("typebox").TString>;
    limitPerHost: import("typebox").TOptional<import("typebox").TInteger>;
    hostIds: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    catalogId: import("typebox").TOptional<import("typebox").TString>;
    cursors: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TString>>;
  }>;
  readonly SessionsCatalogListResult: import("typebox").TObject<{
    catalogs: import("typebox").TArray<import("typebox").TObject<{
      id: import("typebox").TString;
      label: import("typebox").TString;
      capabilities: import("typebox").TObject<{
        continueSession: import("typebox").TBoolean;
        archive: import("typebox").TBoolean;
        createSession: import("typebox").TOptional<import("typebox").TObject<{
          model: import("typebox").TString;
        }>>;
        openTerminal: import("typebox").TOptional<import("typebox").TBoolean>;
      }>;
      hosts: import("typebox").TArray<import("typebox").TObject<{
        hostId: import("typebox").TString;
        label: import("typebox").TString;
        kind: import("typebox").TUnion<[import("typebox").TLiteral<"gateway">, import("typebox").TLiteral<"node">]>;
        connected: import("typebox").TBoolean;
        nodeId: import("typebox").TOptional<import("typebox").TString>;
        sessions: import("typebox").TArray<import("typebox").TObject<{
          threadId: import("typebox").TString;
          name: import("typebox").TOptional<import("typebox").TString>;
          cwd: import("typebox").TOptional<import("typebox").TString>;
          status: import("typebox").TString;
          createdAt: import("typebox").TOptional<import("typebox").TNumber>;
          updatedAt: import("typebox").TOptional<import("typebox").TNumber>;
          recencyAt: import("typebox").TOptional<import("typebox").TNumber>;
          source: import("typebox").TOptional<import("typebox").TString>;
          modelProvider: import("typebox").TOptional<import("typebox").TString>;
          cliVersion: import("typebox").TOptional<import("typebox").TString>;
          gitBranch: import("typebox").TOptional<import("typebox").TString>;
          customGroup: import("typebox").TOptional<import("typebox").TString>;
          pullRequest: import("typebox").TOptional<import("typebox").TObject<{
            numbers: import("typebox").TArray<import("typebox").TInteger>;
            state: import("typebox").TUnion<[import("typebox").TLiteral<"open">, import("typebox").TLiteral<"draft">, import("typebox").TLiteral<"merged">, import("typebox").TLiteral<"closed">]>;
          }>>;
          archived: import("typebox").TBoolean;
          sessionKey: import("typebox").TOptional<import("typebox").TString>;
          createdActor: import("typebox").TOptional<import("typebox").TObject<{
            type: import("typebox").TUnion<[import("typebox").TLiteral<"human">, import("typebox").TLiteral<"agent">, import("typebox").TLiteral<"system">]>;
            id: import("typebox").TOptional<import("typebox").TString>;
            label: import("typebox").TOptional<import("typebox").TString>;
            avatarUrl: import("typebox").TOptional<import("typebox").TString>;
          }>>;
          canContinue: import("typebox").TBoolean;
          canArchive: import("typebox").TBoolean;
          canOpenTerminal: import("typebox").TOptional<import("typebox").TBoolean>;
        }>>;
        nextCursor: import("typebox").TOptional<import("typebox").TString>;
        error: import("typebox").TOptional<import("typebox").TObject<{
          code: import("typebox").TString;
          message: import("typebox").TString;
        }>>;
      }>>;
      error: import("typebox").TOptional<import("typebox").TObject<{
        code: import("typebox").TString;
        message: import("typebox").TString;
      }>>;
    }>>;
  }>;
  readonly SessionsCatalogReadParams: import("typebox").TObject<{
    limit: import("typebox").TOptional<import("typebox").TInteger>;
    cursor: import("typebox").TOptional<import("typebox").TString>;
    catalogId: import("typebox").TString;
    hostId: import("typebox").TString;
    threadId: import("typebox").TString;
  }>;
  readonly SessionsCatalogReadResult: import("typebox").TObject<{
    hostId: import("typebox").TString;
    label: import("typebox").TOptional<import("typebox").TString>;
    threadId: import("typebox").TString;
    items: import("typebox").TArray<import("typebox").TObject<{
      id: import("typebox").TOptional<import("typebox").TString>;
      type: import("typebox").TUnion<[import("typebox").TLiteral<"userMessage">, import("typebox").TLiteral<"agentMessage">, import("typebox").TLiteral<"reasoning">, import("typebox").TLiteral<"toolCall">, import("typebox").TLiteral<"toolResult">, import("typebox").TLiteral<"other">]>;
      text: import("typebox").TOptional<import("typebox").TString>;
      timestamp: import("typebox").TOptional<import("typebox").TString>;
      model: import("typebox").TOptional<import("typebox").TString>;
      truncated: import("typebox").TOptional<import("typebox").TBoolean>;
      raw: import("typebox").TOptional<import("typebox").TUnknown>;
    }>>;
    nextCursor: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly SessionsCatalogContinueParams: import("typebox").TObject<{
    catalogId: import("typebox").TString;
    hostId: import("typebox").TString;
    threadId: import("typebox").TString;
  }>;
  readonly SessionsCatalogContinueResult: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
  }>;
  readonly SessionsCatalogArchiveParams: import("typebox").TObject<{
    confirmNoOtherRunner: import("typebox").TLiteral<true>;
    catalogId: import("typebox").TString;
    hostId: import("typebox").TString;
    threadId: import("typebox").TString;
  }>;
  readonly SessionsCatalogArchiveResult: import("typebox").TObject<{
    ok: import("typebox").TLiteral<true>;
  }>;
  readonly SessionsCleanupParams: import("typebox").TObject<{
    agent: import("typebox").TOptional<import("typebox").TString>;
    allAgents: import("typebox").TOptional<import("typebox").TBoolean>;
    enforce: import("typebox").TOptional<import("typebox").TBoolean>;
    activeKey: import("typebox").TOptional<import("typebox").TString>;
    fixMissing: import("typebox").TOptional<import("typebox").TBoolean>;
    fixDmScope: import("typebox").TOptional<import("typebox").TBoolean>;
  }>;
  readonly SessionsPreviewParams: import("typebox").TObject<{
    keys: import("typebox").TArray<import("typebox").TString>;
    limit: import("typebox").TOptional<import("typebox").TInteger>;
    maxChars: import("typebox").TOptional<import("typebox").TInteger>;
  }>;
  readonly SessionsDescribeParams: import("typebox").TObject<{
    key: import("typebox").TString;
    includeDerivedTitles: import("typebox").TOptional<import("typebox").TBoolean>;
    includeLastMessage: import("typebox").TOptional<import("typebox").TBoolean>;
  }>;
  readonly SessionsResolveParams: import("typebox").TObject<{
    key: import("typebox").TOptional<import("typebox").TString>;
    sessionId: import("typebox").TOptional<import("typebox").TString>;
    label: import("typebox").TOptional<import("typebox").TString>;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    spawnedBy: import("typebox").TOptional<import("typebox").TString>;
    includeGlobal: import("typebox").TOptional<import("typebox").TBoolean>;
    includeUnknown: import("typebox").TOptional<import("typebox").TBoolean>;
    allowMissing: import("typebox").TOptional<import("typebox").TBoolean>;
  }>;
  readonly SessionsSearchHit: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
    sessionId: import("typebox").TString;
    messageId: import("typebox").TString;
    role: import("typebox").TUnion<[import("typebox").TLiteral<"user">, import("typebox").TLiteral<"assistant">]>;
    timestamp: import("typebox").TInteger;
    snippet: import("typebox").TString;
    score: import("typebox").TNumber;
  }>;
  readonly SessionsSearchParams: import("typebox").TObject<{
    agentId: import("typebox").TOptional<import("typebox").TString>;
    sessionKeys: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    query: import("typebox").TString;
    limit: import("typebox").TOptional<import("typebox").TInteger>;
  }>;
  readonly SessionsSearchResult: import("typebox").TObject<{
    results: import("typebox").TArray<import("typebox").TObject<{
      sessionKey: import("typebox").TString;
      sessionId: import("typebox").TString;
      messageId: import("typebox").TString;
      role: import("typebox").TUnion<[import("typebox").TLiteral<"user">, import("typebox").TLiteral<"assistant">]>;
      timestamp: import("typebox").TInteger;
      snippet: import("typebox").TString;
      score: import("typebox").TNumber;
    }>>;
    indexing: import("typebox").TOptional<import("typebox").TBoolean>;
    truncated: import("typebox").TOptional<import("typebox").TBoolean>;
  }>;
  readonly SessionCompactionCheckpoint: import("typebox").TObject<{
    checkpointId: import("typebox").TString;
    sessionKey: import("typebox").TString;
    sessionId: import("typebox").TString;
    createdAt: import("typebox").TInteger;
    reason: import("typebox").TUnion<[import("typebox").TLiteral<"manual">, import("typebox").TLiteral<"auto-threshold">, import("typebox").TLiteral<"overflow-retry">, import("typebox").TLiteral<"timeout-retry">]>;
    tokensBefore: import("typebox").TOptional<import("typebox").TInteger>;
    tokensAfter: import("typebox").TOptional<import("typebox").TInteger>;
    summary: import("typebox").TOptional<import("typebox").TString>;
    firstKeptEntryId: import("typebox").TOptional<import("typebox").TString>;
    preCompaction: import("typebox").TObject<{
      sessionId: import("typebox").TString;
      sessionFile: import("typebox").TOptional<import("typebox").TString>;
      leafId: import("typebox").TOptional<import("typebox").TString>;
      entryId: import("typebox").TOptional<import("typebox").TString>;
    }>;
    postCompaction: import("typebox").TObject<{
      sessionId: import("typebox").TString;
      sessionFile: import("typebox").TOptional<import("typebox").TString>;
      leafId: import("typebox").TOptional<import("typebox").TString>;
      entryId: import("typebox").TOptional<import("typebox").TString>;
    }>;
  }>;
  readonly SessionOperationEvent: import("typebox").TObject<{
    operationId: import("typebox").TString;
    operation: import("typebox").TLiteral<"compact">;
    phase: import("typebox").TUnion<[import("typebox").TLiteral<"start">, import("typebox").TLiteral<"end">]>;
    sessionKey: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    ts: import("typebox").TInteger;
    completed: import("typebox").TOptional<import("typebox").TBoolean>;
    reason: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly SessionCreatedActor: import("typebox").TObject<{
    type: import("typebox").TUnion<[import("typebox").TLiteral<"human">, import("typebox").TLiteral<"agent">, import("typebox").TLiteral<"system">]>;
    id: import("typebox").TOptional<import("typebox").TString>;
    label: import("typebox").TOptional<import("typebox").TString>;
    avatarUrl: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly SessionObserverHealth: import("typebox").TUnion<[import("typebox").TLiteral<"on-track">, import("typebox").TLiteral<"grinding">, import("typebox").TLiteral<"stuck">, import("typebox").TLiteral<"waiting-on-user">, import("typebox").TLiteral<"wrapping-up">, import("typebox").TLiteral<"done">, import("typebox").TLiteral<"failed">]>;
  readonly SessionObserverPlanProgress: import("typebox").TObject<{
    completed: import("typebox").TInteger;
    total: import("typebox").TInteger;
  }>;
  readonly SessionObserverDigest: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    runId: import("typebox").TOptional<import("typebox").TString>;
    revision: import("typebox").TInteger;
    updatedAt: import("typebox").TInteger;
    headline: import("typebox").TString;
    assessment: import("typebox").TOptional<import("typebox").TString>;
    health: import("typebox").TUnion<[import("typebox").TLiteral<"on-track">, import("typebox").TLiteral<"grinding">, import("typebox").TLiteral<"stuck">, import("typebox").TLiteral<"waiting-on-user">, import("typebox").TLiteral<"wrapping-up">, import("typebox").TLiteral<"done">, import("typebox").TLiteral<"failed">]>;
    planProgress: import("typebox").TOptional<import("typebox").TObject<{
      completed: import("typebox").TInteger;
      total: import("typebox").TInteger;
    }>>;
  }>;
  readonly SessionCompanionExchange: import("typebox").TObject<{
    question: import("typebox").TString;
    answer: import("typebox").TString;
    ts: import("typebox").TInteger;
  }>;
  readonly SessionRow: import("typebox").TObject<{
    key: import("typebox").TString;
    sessionId: import("typebox").TOptional<import("typebox").TString>;
    incognito: import("typebox").TOptional<import("typebox").TLiteral<true>>;
    kind: import("typebox").TUnion<[import("typebox").TLiteral<"direct">, import("typebox").TLiteral<"group">, import("typebox").TLiteral<"global">, import("typebox").TLiteral<"unknown">]>;
    label: import("typebox").TOptional<import("typebox").TString>;
    boardFace: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"chat">, import("typebox").TLiteral<"dashboard">]>>;
    displayName: import("typebox").TOptional<import("typebox").TString>;
    derivedTitle: import("typebox").TOptional<import("typebox").TString>;
    lastMessagePreview: import("typebox").TOptional<import("typebox").TString>;
    channel: import("typebox").TOptional<import("typebox").TString>;
    chatType: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"direct">, import("typebox").TLiteral<"group">, import("typebox").TLiteral<"channel">]>>;
    updatedAt: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TNumber, import("typebox").TNull]>>;
    archived: import("typebox").TOptional<import("typebox").TBoolean>;
    archivedAt: import("typebox").TOptional<import("typebox").TNumber>;
    archivedBy: import("typebox").TOptional<import("typebox").TObject<{
      type: import("typebox").TUnion<[import("typebox").TLiteral<"human">, import("typebox").TLiteral<"agent">, import("typebox").TLiteral<"system">]>;
      id: import("typebox").TOptional<import("typebox").TString>;
      label: import("typebox").TOptional<import("typebox").TString>;
      avatarUrl: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    pinned: import("typebox").TOptional<import("typebox").TBoolean>;
    pinnedAt: import("typebox").TOptional<import("typebox").TNumber>;
    icon: import("typebox").TOptional<import("typebox").TString>;
    unread: import("typebox").TOptional<import("typebox").TBoolean>;
    lastReadAt: import("typebox").TOptional<import("typebox").TNumber>;
    lastActivityAt: import("typebox").TOptional<import("typebox").TNumber>;
    lastInteractionAt: import("typebox").TOptional<import("typebox").TNumber>;
    status: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"running">, import("typebox").TLiteral<"done">, import("typebox").TLiteral<"failed">, import("typebox").TLiteral<"killed">, import("typebox").TLiteral<"timeout">]>>;
    lastRunError: import("typebox").TOptional<import("typebox").TString>;
    activeLeafEntryId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    spawnedBy: import("typebox").TOptional<import("typebox").TString>;
    parentSessionKey: import("typebox").TOptional<import("typebox").TString>;
    controlOwnerSessionKey: import("typebox").TOptional<import("typebox").TString>;
    childSessions: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    forkedFromParent: import("typebox").TOptional<import("typebox").TBoolean>;
    spawnDepth: import("typebox").TOptional<import("typebox").TNumber>;
    subagentRole: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"orchestrator">, import("typebox").TLiteral<"leaf">]>>;
    subagentControlScope: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"children">, import("typebox").TLiteral<"none">]>>;
    swarmGroupId: import("typebox").TOptional<import("typebox").TString>;
    worktree: import("typebox").TOptional<import("typebox").TObject<{
      id: import("typebox").TString;
      branch: import("typebox").TString;
      repoRoot: import("typebox").TString;
    }>>;
    execNode: import("typebox").TOptional<import("typebox").TString>;
    execCwd: import("typebox").TOptional<import("typebox").TString>;
    spawnedWorkspaceDir: import("typebox").TOptional<import("typebox").TString>;
    spawnedCwd: import("typebox").TOptional<import("typebox").TString>;
    createdVia: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"operator">, import("typebox").TLiteral<"spawn">, import("typebox").TLiteral<"channel">, import("typebox").TLiteral<"cron">, import("typebox").TLiteral<"talk">, import("typebox").TLiteral<"run">, import("typebox").TLiteral<"plugin">, import("typebox").TLiteral<"internal">]>>;
    createdActor: import("typebox").TOptional<import("typebox").TObject<{
      type: import("typebox").TUnion<[import("typebox").TLiteral<"human">, import("typebox").TLiteral<"agent">, import("typebox").TLiteral<"system">]>;
      id: import("typebox").TOptional<import("typebox").TString>;
      label: import("typebox").TOptional<import("typebox").TString>;
      avatarUrl: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    visibility: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"shared">, import("typebox").TLiteral<"read-only">, import("typebox").TLiteral<"suggest">, import("typebox").TLiteral<"draft">]>>;
    sharingRole: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"admin">, import("typebox").TLiteral<"owner">, import("typebox").TLiteral<"member">, import("typebox").TLiteral<"viewer">]>>;
    createdAt: import("typebox").TOptional<import("typebox").TNumber>;
    forkSource: import("typebox").TOptional<import("typebox").TObject<{
      sessionKey: import("typebox").TString;
      sessionId: import("typebox").TString;
      entryId: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    previousSessionId: import("typebox").TOptional<import("typebox").TString>;
    inputTokens: import("typebox").TOptional<import("typebox").TNumber>;
    outputTokens: import("typebox").TOptional<import("typebox").TNumber>;
    totalTokens: import("typebox").TOptional<import("typebox").TNumber>;
    totalTokensFresh: import("typebox").TOptional<import("typebox").TBoolean>;
    contextTokens: import("typebox").TOptional<import("typebox").TNumber>;
    estimatedCostUsd: import("typebox").TOptional<import("typebox").TNumber>;
    model: import("typebox").TOptional<import("typebox").TString>;
    modelProvider: import("typebox").TOptional<import("typebox").TString>;
    toolOverrides: import("typebox").TOptional<import("typebox").TObject<{
      mcpServers: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TBoolean>>;
      mcpToolsDeny: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TArray<import("typebox").TString>>>;
      skills: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TBoolean>>;
      webSearch: import("typebox").TOptional<import("typebox").TBoolean>;
    }>>;
  }>;
  readonly SessionsCompanionAskParams: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
    question: import("typebox").TString;
  }>;
  readonly SessionsCompanionAskResult: import("typebox").TObject<{
    answer: import("typebox").TString;
    ts: import("typebox").TInteger;
  }>;
  readonly SessionsCompanionResetParams: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
  }>;
  readonly SessionsCompanionResetResult: import("typebox").TObject<{
    ok: import("typebox").TLiteral<true>;
  }>;
  readonly SessionsCompanionStateParams: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
  }>;
  readonly SessionsCompanionStateResult: import("typebox").TObject<{
    exchanges: import("typebox").TArray<import("typebox").TObject<{
      question: import("typebox").TString;
      answer: import("typebox").TString;
      ts: import("typebox").TInteger;
    }>>;
  }>;
  readonly SessionsObserverVisibilityParams: import("typebox").TObject<{
    visible: import("typebox").TBoolean;
  }>;
  readonly SessionsObserverVisibilityResult: import("typebox").TObject<{
    ok: import("typebox").TLiteral<true>;
  }>;
} & {
  readonly SessionDiscussionState: import("typebox").TUnion<[import("typebox").TLiteral<"none">, import("typebox").TLiteral<"available">, import("typebox").TLiteral<"open">]>;
  readonly SessionDiscussionInfo: import("typebox").TObject<{
    state: import("typebox").TUnion<[import("typebox").TLiteral<"none">, import("typebox").TLiteral<"available">, import("typebox").TLiteral<"open">]>;
    embedUrl: import("typebox").TOptional<import("typebox").TString>;
    openUrl: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly SessionDiscussionInfoParams: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
  }>;
  readonly SessionDiscussionInfoResult: import("typebox").TObject<{
    state: import("typebox").TUnion<[import("typebox").TLiteral<"none">, import("typebox").TLiteral<"available">, import("typebox").TLiteral<"open">]>;
    embedUrl: import("typebox").TOptional<import("typebox").TString>;
    openUrl: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly SessionDiscussionOpenParams: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
  }>;
  readonly SessionDiscussionOpenResult: import("typebox").TObject<{
    state: import("typebox").TUnion<[import("typebox").TLiteral<"none">, import("typebox").TLiteral<"available">, import("typebox").TLiteral<"open">]>;
    embedUrl: import("typebox").TOptional<import("typebox").TString>;
    openUrl: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly SessionPlacementState: import("typebox").TUnion<[import("typebox").TLiteral<"local">, import("typebox").TLiteral<"requested">, import("typebox").TLiteral<"provisioning">, import("typebox").TLiteral<"syncing">, import("typebox").TLiteral<"starting">, import("typebox").TLiteral<"active">, import("typebox").TLiteral<"draining">, import("typebox").TLiteral<"reconciling">, import("typebox").TLiteral<"reclaimed">, import("typebox").TLiteral<"failed">]>;
  readonly LocalSessionPlacement: import("typebox").TObject<{
    generation: import("typebox").TInteger;
    createdAtMs: import("typebox").TInteger;
    updatedAtMs: import("typebox").TInteger;
    stateChangedAtMs: import("typebox").TInteger;
    state: import("typebox").TLiteral<"local">;
  }>;
  readonly RequestedSessionPlacement: import("typebox").TObject<{
    generation: import("typebox").TInteger;
    createdAtMs: import("typebox").TInteger;
    updatedAtMs: import("typebox").TInteger;
    stateChangedAtMs: import("typebox").TInteger;
    state: import("typebox").TLiteral<"requested">;
  }>;
  readonly ProvisioningSessionPlacement: import("typebox").TObject<{
    environmentId: import("typebox").TOptional<import("typebox").TString>;
    generation: import("typebox").TInteger;
    createdAtMs: import("typebox").TInteger;
    updatedAtMs: import("typebox").TInteger;
    stateChangedAtMs: import("typebox").TInteger;
    state: import("typebox").TLiteral<"provisioning">;
  }>;
  readonly SyncingSessionPlacement: import("typebox").TObject<{
    environmentId: import("typebox").TString;
    workerBundleHash: import("typebox").TString;
    generation: import("typebox").TInteger;
    createdAtMs: import("typebox").TInteger;
    updatedAtMs: import("typebox").TInteger;
    stateChangedAtMs: import("typebox").TInteger;
    state: import("typebox").TLiteral<"syncing">;
  }>;
  readonly StartingSessionPlacement: import("typebox").TObject<{
    workspaceBaseManifestRef: import("typebox").TString;
    remoteWorkspaceDir: import("typebox").TString;
    environmentId: import("typebox").TString;
    workerBundleHash: import("typebox").TString;
    generation: import("typebox").TInteger;
    createdAtMs: import("typebox").TInteger;
    updatedAtMs: import("typebox").TInteger;
    stateChangedAtMs: import("typebox").TInteger;
    state: import("typebox").TLiteral<"starting">;
  }>;
  readonly ActiveWorkerSessionPlacement: import("typebox").TObject<{
    workspaceResultConflict: import("typebox").TOptional<import("typebox").TObject<{
      paths: import("typebox").TArray<import("typebox").TString>;
      stagedResultRef: import("typebox").TString;
      totalCount: import("typebox").TOptional<import("typebox").TInteger>;
    }>>;
    lastTranscriptAckCursor: import("typebox").TOptional<import("typebox").TInteger>;
    lastLiveEventAckCursor: import("typebox").TOptional<import("typebox").TInteger>;
    workspaceBaseManifestRef: import("typebox").TString;
    remoteWorkspaceDir: import("typebox").TString;
    environmentId: import("typebox").TString;
    activeOwnerEpoch: import("typebox").TInteger;
    workerBundleHash: import("typebox").TString;
    generation: import("typebox").TInteger;
    createdAtMs: import("typebox").TInteger;
    updatedAtMs: import("typebox").TInteger;
    stateChangedAtMs: import("typebox").TInteger;
    state: import("typebox").TLiteral<"active">;
  }>;
  readonly DrainingSessionPlacement: import("typebox").TObject<{
    workspaceResultConflict: import("typebox").TOptional<import("typebox").TObject<{
      paths: import("typebox").TArray<import("typebox").TString>;
      stagedResultRef: import("typebox").TString;
      totalCount: import("typebox").TOptional<import("typebox").TInteger>;
    }>>;
    lastTranscriptAckCursor: import("typebox").TOptional<import("typebox").TInteger>;
    lastLiveEventAckCursor: import("typebox").TOptional<import("typebox").TInteger>;
    workspaceBaseManifestRef: import("typebox").TString;
    remoteWorkspaceDir: import("typebox").TString;
    environmentId: import("typebox").TString;
    activeOwnerEpoch: import("typebox").TInteger;
    workerBundleHash: import("typebox").TString;
    generation: import("typebox").TInteger;
    createdAtMs: import("typebox").TInteger;
    updatedAtMs: import("typebox").TInteger;
    stateChangedAtMs: import("typebox").TInteger;
    state: import("typebox").TLiteral<"draining">;
  }>;
  readonly ReconcilingSessionPlacement: import("typebox").TObject<{
    workspaceResultConflict: import("typebox").TOptional<import("typebox").TObject<{
      paths: import("typebox").TArray<import("typebox").TString>;
      stagedResultRef: import("typebox").TString;
      totalCount: import("typebox").TOptional<import("typebox").TInteger>;
    }>>;
    lastTranscriptAckCursor: import("typebox").TOptional<import("typebox").TInteger>;
    lastLiveEventAckCursor: import("typebox").TOptional<import("typebox").TInteger>;
    workspaceBaseManifestRef: import("typebox").TString;
    remoteWorkspaceDir: import("typebox").TString;
    environmentId: import("typebox").TString;
    activeOwnerEpoch: import("typebox").TInteger;
    workerBundleHash: import("typebox").TString;
    generation: import("typebox").TInteger;
    createdAtMs: import("typebox").TInteger;
    updatedAtMs: import("typebox").TInteger;
    stateChangedAtMs: import("typebox").TInteger;
    state: import("typebox").TLiteral<"reconciling">;
  }>;
  readonly ReclaimedSessionPlacement: import("typebox").TObject<{
    workspaceResultConflict: import("typebox").TOptional<import("typebox").TObject<{
      paths: import("typebox").TArray<import("typebox").TString>;
      stagedResultRef: import("typebox").TString;
      totalCount: import("typebox").TOptional<import("typebox").TInteger>;
    }>>;
    lastTranscriptAckCursor: import("typebox").TOptional<import("typebox").TInteger>;
    lastLiveEventAckCursor: import("typebox").TOptional<import("typebox").TInteger>;
    environmentId: import("typebox").TOptional<import("typebox").TString>;
    activeOwnerEpoch: import("typebox").TOptional<import("typebox").TInteger>;
    workspaceBaseManifestRef: import("typebox").TOptional<import("typebox").TString>;
    remoteWorkspaceDir: import("typebox").TOptional<import("typebox").TString>;
    workerBundleHash: import("typebox").TOptional<import("typebox").TString>;
    generation: import("typebox").TInteger;
    createdAtMs: import("typebox").TInteger;
    updatedAtMs: import("typebox").TInteger;
    stateChangedAtMs: import("typebox").TInteger;
    state: import("typebox").TLiteral<"reclaimed">;
  }>;
  readonly FailedSessionPlacement: import("typebox").TObject<{
    recoveryError: import("typebox").TString;
    workspaceResultConflict: import("typebox").TOptional<import("typebox").TObject<{
      paths: import("typebox").TArray<import("typebox").TString>;
      stagedResultRef: import("typebox").TString;
      totalCount: import("typebox").TOptional<import("typebox").TInteger>;
    }>>;
    lastTranscriptAckCursor: import("typebox").TOptional<import("typebox").TInteger>;
    lastLiveEventAckCursor: import("typebox").TOptional<import("typebox").TInteger>;
    environmentId: import("typebox").TOptional<import("typebox").TString>;
    activeOwnerEpoch: import("typebox").TOptional<import("typebox").TInteger>;
    workspaceBaseManifestRef: import("typebox").TOptional<import("typebox").TString>;
    remoteWorkspaceDir: import("typebox").TOptional<import("typebox").TString>;
    workerBundleHash: import("typebox").TOptional<import("typebox").TString>;
    generation: import("typebox").TInteger;
    createdAtMs: import("typebox").TInteger;
    updatedAtMs: import("typebox").TInteger;
    stateChangedAtMs: import("typebox").TInteger;
    state: import("typebox").TLiteral<"failed">;
  }>;
  readonly SessionPlacement: import("typebox").TUnion<[import("typebox").TObject<{
    generation: import("typebox").TInteger;
    createdAtMs: import("typebox").TInteger;
    updatedAtMs: import("typebox").TInteger;
    stateChangedAtMs: import("typebox").TInteger;
    state: import("typebox").TLiteral<"local">;
  }>, import("typebox").TObject<{
    generation: import("typebox").TInteger;
    createdAtMs: import("typebox").TInteger;
    updatedAtMs: import("typebox").TInteger;
    stateChangedAtMs: import("typebox").TInteger;
    state: import("typebox").TLiteral<"requested">;
  }>, import("typebox").TObject<{
    environmentId: import("typebox").TOptional<import("typebox").TString>;
    generation: import("typebox").TInteger;
    createdAtMs: import("typebox").TInteger;
    updatedAtMs: import("typebox").TInteger;
    stateChangedAtMs: import("typebox").TInteger;
    state: import("typebox").TLiteral<"provisioning">;
  }>, import("typebox").TObject<{
    environmentId: import("typebox").TString;
    workerBundleHash: import("typebox").TString;
    generation: import("typebox").TInteger;
    createdAtMs: import("typebox").TInteger;
    updatedAtMs: import("typebox").TInteger;
    stateChangedAtMs: import("typebox").TInteger;
    state: import("typebox").TLiteral<"syncing">;
  }>, import("typebox").TObject<{
    workspaceBaseManifestRef: import("typebox").TString;
    remoteWorkspaceDir: import("typebox").TString;
    environmentId: import("typebox").TString;
    workerBundleHash: import("typebox").TString;
    generation: import("typebox").TInteger;
    createdAtMs: import("typebox").TInteger;
    updatedAtMs: import("typebox").TInteger;
    stateChangedAtMs: import("typebox").TInteger;
    state: import("typebox").TLiteral<"starting">;
  }>, import("typebox").TObject<{
    workspaceResultConflict: import("typebox").TOptional<import("typebox").TObject<{
      paths: import("typebox").TArray<import("typebox").TString>;
      stagedResultRef: import("typebox").TString;
      totalCount: import("typebox").TOptional<import("typebox").TInteger>;
    }>>;
    lastTranscriptAckCursor: import("typebox").TOptional<import("typebox").TInteger>;
    lastLiveEventAckCursor: import("typebox").TOptional<import("typebox").TInteger>;
    workspaceBaseManifestRef: import("typebox").TString;
    remoteWorkspaceDir: import("typebox").TString;
    environmentId: import("typebox").TString;
    activeOwnerEpoch: import("typebox").TInteger;
    workerBundleHash: import("typebox").TString;
    generation: import("typebox").TInteger;
    createdAtMs: import("typebox").TInteger;
    updatedAtMs: import("typebox").TInteger;
    stateChangedAtMs: import("typebox").TInteger;
    state: import("typebox").TLiteral<"active">;
  }>, import("typebox").TObject<{
    workspaceResultConflict: import("typebox").TOptional<import("typebox").TObject<{
      paths: import("typebox").TArray<import("typebox").TString>;
      stagedResultRef: import("typebox").TString;
      totalCount: import("typebox").TOptional<import("typebox").TInteger>;
    }>>;
    lastTranscriptAckCursor: import("typebox").TOptional<import("typebox").TInteger>;
    lastLiveEventAckCursor: import("typebox").TOptional<import("typebox").TInteger>;
    workspaceBaseManifestRef: import("typebox").TString;
    remoteWorkspaceDir: import("typebox").TString;
    environmentId: import("typebox").TString;
    activeOwnerEpoch: import("typebox").TInteger;
    workerBundleHash: import("typebox").TString;
    generation: import("typebox").TInteger;
    createdAtMs: import("typebox").TInteger;
    updatedAtMs: import("typebox").TInteger;
    stateChangedAtMs: import("typebox").TInteger;
    state: import("typebox").TLiteral<"draining">;
  }>, import("typebox").TObject<{
    workspaceResultConflict: import("typebox").TOptional<import("typebox").TObject<{
      paths: import("typebox").TArray<import("typebox").TString>;
      stagedResultRef: import("typebox").TString;
      totalCount: import("typebox").TOptional<import("typebox").TInteger>;
    }>>;
    lastTranscriptAckCursor: import("typebox").TOptional<import("typebox").TInteger>;
    lastLiveEventAckCursor: import("typebox").TOptional<import("typebox").TInteger>;
    workspaceBaseManifestRef: import("typebox").TString;
    remoteWorkspaceDir: import("typebox").TString;
    environmentId: import("typebox").TString;
    activeOwnerEpoch: import("typebox").TInteger;
    workerBundleHash: import("typebox").TString;
    generation: import("typebox").TInteger;
    createdAtMs: import("typebox").TInteger;
    updatedAtMs: import("typebox").TInteger;
    stateChangedAtMs: import("typebox").TInteger;
    state: import("typebox").TLiteral<"reconciling">;
  }>, import("typebox").TObject<{
    workspaceResultConflict: import("typebox").TOptional<import("typebox").TObject<{
      paths: import("typebox").TArray<import("typebox").TString>;
      stagedResultRef: import("typebox").TString;
      totalCount: import("typebox").TOptional<import("typebox").TInteger>;
    }>>;
    lastTranscriptAckCursor: import("typebox").TOptional<import("typebox").TInteger>;
    lastLiveEventAckCursor: import("typebox").TOptional<import("typebox").TInteger>;
    environmentId: import("typebox").TOptional<import("typebox").TString>;
    activeOwnerEpoch: import("typebox").TOptional<import("typebox").TInteger>;
    workspaceBaseManifestRef: import("typebox").TOptional<import("typebox").TString>;
    remoteWorkspaceDir: import("typebox").TOptional<import("typebox").TString>;
    workerBundleHash: import("typebox").TOptional<import("typebox").TString>;
    generation: import("typebox").TInteger;
    createdAtMs: import("typebox").TInteger;
    updatedAtMs: import("typebox").TInteger;
    stateChangedAtMs: import("typebox").TInteger;
    state: import("typebox").TLiteral<"reclaimed">;
  }>, import("typebox").TObject<{
    recoveryError: import("typebox").TString;
    workspaceResultConflict: import("typebox").TOptional<import("typebox").TObject<{
      paths: import("typebox").TArray<import("typebox").TString>;
      stagedResultRef: import("typebox").TString;
      totalCount: import("typebox").TOptional<import("typebox").TInteger>;
    }>>;
    lastTranscriptAckCursor: import("typebox").TOptional<import("typebox").TInteger>;
    lastLiveEventAckCursor: import("typebox").TOptional<import("typebox").TInteger>;
    environmentId: import("typebox").TOptional<import("typebox").TString>;
    activeOwnerEpoch: import("typebox").TOptional<import("typebox").TInteger>;
    workspaceBaseManifestRef: import("typebox").TOptional<import("typebox").TString>;
    remoteWorkspaceDir: import("typebox").TOptional<import("typebox").TString>;
    workerBundleHash: import("typebox").TOptional<import("typebox").TString>;
    generation: import("typebox").TInteger;
    createdAtMs: import("typebox").TInteger;
    updatedAtMs: import("typebox").TInteger;
    stateChangedAtMs: import("typebox").TInteger;
    state: import("typebox").TLiteral<"failed">;
  }>]>;
  readonly SessionsDispatchParams: import("typebox").TObject<{
    key: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    profileId: import("typebox").TString;
  }>;
  readonly SessionsDispatchResult: import("typebox").TObject<{
    ok: import("typebox").TLiteral<true>;
    key: import("typebox").TString;
    sessionId: import("typebox").TString;
    placement: import("typebox").TObject<{
      workspaceResultConflict: import("typebox").TOptional<import("typebox").TObject<{
        paths: import("typebox").TArray<import("typebox").TString>;
        stagedResultRef: import("typebox").TString;
        totalCount: import("typebox").TOptional<import("typebox").TInteger>;
      }>>;
      lastTranscriptAckCursor: import("typebox").TOptional<import("typebox").TInteger>;
      lastLiveEventAckCursor: import("typebox").TOptional<import("typebox").TInteger>;
      workspaceBaseManifestRef: import("typebox").TString;
      remoteWorkspaceDir: import("typebox").TString;
      environmentId: import("typebox").TString;
      activeOwnerEpoch: import("typebox").TInteger;
      workerBundleHash: import("typebox").TString;
      generation: import("typebox").TInteger;
      createdAtMs: import("typebox").TInteger;
      updatedAtMs: import("typebox").TInteger;
      stateChangedAtMs: import("typebox").TInteger;
      state: import("typebox").TLiteral<"active">;
    }>;
  }>;
  readonly SessionsReclaimParams: import("typebox").TObject<{
    key: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly SessionsReclaimResult: import("typebox").TObject<{
    ok: import("typebox").TLiteral<true>;
    key: import("typebox").TString;
    sessionId: import("typebox").TString;
    placement: import("typebox").TObject<{
      workspaceResultConflict: import("typebox").TOptional<import("typebox").TObject<{
        paths: import("typebox").TArray<import("typebox").TString>;
        stagedResultRef: import("typebox").TString;
        totalCount: import("typebox").TOptional<import("typebox").TInteger>;
      }>>;
      lastTranscriptAckCursor: import("typebox").TOptional<import("typebox").TInteger>;
      lastLiveEventAckCursor: import("typebox").TOptional<import("typebox").TInteger>;
      environmentId: import("typebox").TOptional<import("typebox").TString>;
      activeOwnerEpoch: import("typebox").TOptional<import("typebox").TInteger>;
      workspaceBaseManifestRef: import("typebox").TOptional<import("typebox").TString>;
      remoteWorkspaceDir: import("typebox").TOptional<import("typebox").TString>;
      workerBundleHash: import("typebox").TOptional<import("typebox").TString>;
      generation: import("typebox").TInteger;
      createdAtMs: import("typebox").TInteger;
      updatedAtMs: import("typebox").TInteger;
      stateChangedAtMs: import("typebox").TInteger;
      state: import("typebox").TLiteral<"reclaimed">;
    }>;
  }>;
  readonly SessionVisibility: import("typebox").TUnion<[import("typebox").TLiteral<"shared">, import("typebox").TLiteral<"read-only">, import("typebox").TLiteral<"suggest">, import("typebox").TLiteral<"draft">]>;
  readonly SessionSharingIdentity: import("typebox").TObject<{
    id: import("typebox").TString;
    type: import("typebox").TUnion<[import("typebox").TLiteral<"human">, import("typebox").TLiteral<"agent">, import("typebox").TLiteral<"system">]>;
    label: import("typebox").TOptional<import("typebox").TString>;
    avatarUrl: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly SessionSharingRole: import("typebox").TUnion<[import("typebox").TLiteral<"admin">, import("typebox").TLiteral<"owner">, import("typebox").TLiteral<"member">, import("typebox").TLiteral<"viewer">]>;
  readonly SessionVisibilitySetParams: import("typebox").TObject<{
    visibility: import("typebox").TUnion<[import("typebox").TLiteral<"shared">, import("typebox").TLiteral<"read-only">, import("typebox").TLiteral<"suggest">, import("typebox").TLiteral<"draft">]>;
    sessionKey: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly SessionVisibilitySetResult: import("typebox").TObject<{
    ok: import("typebox").TLiteral<true>;
    sessionKey: import("typebox").TString;
    visibility: import("typebox").TUnion<[import("typebox").TLiteral<"shared">, import("typebox").TLiteral<"read-only">, import("typebox").TLiteral<"suggest">, import("typebox").TLiteral<"draft">]>;
  }>;
  readonly SessionMembersListParams: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly SessionMember: import("typebox").TObject<{
    identityId: import("typebox").TString;
    addedBy: import("typebox").TString;
    addedAt: import("typebox").TInteger;
  }>;
  readonly SessionMembersListResult: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
    owner: import("typebox").TOptional<import("typebox").TObject<{
      id: import("typebox").TString;
      type: import("typebox").TUnion<[import("typebox").TLiteral<"human">, import("typebox").TLiteral<"agent">, import("typebox").TLiteral<"system">]>;
      label: import("typebox").TOptional<import("typebox").TString>;
      avatarUrl: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    members: import("typebox").TArray<import("typebox").TObject<{
      identityId: import("typebox").TString;
      addedBy: import("typebox").TString;
      addedAt: import("typebox").TInteger;
    }>>;
    identities: import("typebox").TArray<import("typebox").TObject<{
      id: import("typebox").TString;
      type: import("typebox").TUnion<[import("typebox").TLiteral<"human">, import("typebox").TLiteral<"agent">, import("typebox").TLiteral<"system">]>;
      label: import("typebox").TOptional<import("typebox").TString>;
      avatarUrl: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    role: import("typebox").TUnion<[import("typebox").TLiteral<"admin">, import("typebox").TLiteral<"owner">, import("typebox").TLiteral<"member">, import("typebox").TLiteral<"viewer">]>;
    allowedVisibilities: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"shared">, import("typebox").TLiteral<"read-only">, import("typebox").TLiteral<"suggest">, import("typebox").TLiteral<"draft">]>>;
  }>;
  readonly SessionMemberAddParams: import("typebox").TObject<{
    identityId: import("typebox").TString;
    sessionKey: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly SessionMemberRemoveParams: import("typebox").TObject<{
    identityId: import("typebox").TString;
    sessionKey: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly SessionMemberMutationResult: import("typebox").TObject<{
    ok: import("typebox").TLiteral<true>;
    sessionKey: import("typebox").TString;
    identityId: import("typebox").TString;
  }>;
  readonly SessionSharingAction: import("typebox").TUnion<[import("typebox").TLiteral<"visibility">, import("typebox").TLiteral<"member-added">, import("typebox").TLiteral<"member-removed">]>;
  readonly SessionSharingEvent: import("typebox").TObject<{
    action: import("typebox").TUnion<[import("typebox").TLiteral<"visibility">, import("typebox").TLiteral<"member-added">, import("typebox").TLiteral<"member-removed">]>;
    sessionKey: import("typebox").TString;
    agentId: import("typebox").TString;
    actor: import("typebox").TObject<{
      id: import("typebox").TString;
      type: import("typebox").TUnion<[import("typebox").TLiteral<"human">, import("typebox").TLiteral<"agent">, import("typebox").TLiteral<"system">]>;
      label: import("typebox").TOptional<import("typebox").TString>;
      avatarUrl: import("typebox").TOptional<import("typebox").TString>;
    }>;
    visibility: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"shared">, import("typebox").TLiteral<"read-only">, import("typebox").TLiteral<"suggest">, import("typebox").TLiteral<"draft">]>>;
    identityId: import("typebox").TOptional<import("typebox").TString>;
    ts: import("typebox").TInteger;
  }>;
  readonly SessionSuggestionState: import("typebox").TUnion<[import("typebox").TLiteral<"pending">, import("typebox").TLiteral<"accepted">, import("typebox").TLiteral<"dismissed">]>;
  readonly SessionSuggestionAction: import("typebox").TUnion<[import("typebox").TLiteral<"added">, import("typebox").TLiteral<"resolved">]>;
  readonly SessionSuggestionResolution: import("typebox").TUnion<[import("typebox").TLiteral<"send">, import("typebox").TLiteral<"queue">, import("typebox").TLiteral<"edit">, import("typebox").TLiteral<"dismiss">]>;
  readonly SessionSuggestion: import("typebox").TObject<{
    id: import("typebox").TString;
    sessionKey: import("typebox").TString;
    agentId: import("typebox").TString;
    author: import("typebox").TObject<{
      id: import("typebox").TString;
      type: import("typebox").TUnion<[import("typebox").TLiteral<"human">, import("typebox").TLiteral<"agent">, import("typebox").TLiteral<"system">]>;
      label: import("typebox").TOptional<import("typebox").TString>;
      avatarUrl: import("typebox").TOptional<import("typebox").TString>;
    }>;
    text: import("typebox").TString;
    createdAt: import("typebox").TInteger;
    state: import("typebox").TUnion<[import("typebox").TLiteral<"pending">, import("typebox").TLiteral<"accepted">, import("typebox").TLiteral<"dismissed">]>;
  }>;
  readonly SessionSuggestionsAddParams: import("typebox").TObject<{
    text: import("typebox").TString;
    sessionKey: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly SessionSuggestionsAddResult: import("typebox").TObject<{
    suggestion: import("typebox").TObject<{
      id: import("typebox").TString;
      sessionKey: import("typebox").TString;
      agentId: import("typebox").TString;
      author: import("typebox").TObject<{
        id: import("typebox").TString;
        type: import("typebox").TUnion<[import("typebox").TLiteral<"human">, import("typebox").TLiteral<"agent">, import("typebox").TLiteral<"system">]>;
        label: import("typebox").TOptional<import("typebox").TString>;
        avatarUrl: import("typebox").TOptional<import("typebox").TString>;
      }>;
      text: import("typebox").TString;
      createdAt: import("typebox").TInteger;
      state: import("typebox").TUnion<[import("typebox").TLiteral<"pending">, import("typebox").TLiteral<"accepted">, import("typebox").TLiteral<"dismissed">]>;
    }>;
  }>;
  readonly SessionSuggestionsListParams: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly SessionSuggestionsListResult: import("typebox").TObject<{
    suggestions: import("typebox").TArray<import("typebox").TObject<{
      id: import("typebox").TString;
      sessionKey: import("typebox").TString;
      agentId: import("typebox").TString;
      author: import("typebox").TObject<{
        id: import("typebox").TString;
        type: import("typebox").TUnion<[import("typebox").TLiteral<"human">, import("typebox").TLiteral<"agent">, import("typebox").TLiteral<"system">]>;
        label: import("typebox").TOptional<import("typebox").TString>;
        avatarUrl: import("typebox").TOptional<import("typebox").TString>;
      }>;
      text: import("typebox").TString;
      createdAt: import("typebox").TInteger;
      state: import("typebox").TUnion<[import("typebox").TLiteral<"pending">, import("typebox").TLiteral<"accepted">, import("typebox").TLiteral<"dismissed">]>;
    }>>;
    role: import("typebox").TUnion<[import("typebox").TLiteral<"admin">, import("typebox").TLiteral<"owner">, import("typebox").TLiteral<"member">, import("typebox").TLiteral<"viewer">]>;
  }>;
  readonly SessionSuggestionsResolveParams: import("typebox").TObject<{
    id: import("typebox").TString;
    resolution: import("typebox").TUnion<[import("typebox").TLiteral<"send">, import("typebox").TLiteral<"queue">, import("typebox").TLiteral<"edit">, import("typebox").TLiteral<"dismiss">]>;
    sessionKey: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly SessionSuggestionsResolveResult: import("typebox").TObject<{
    suggestion: import("typebox").TObject<{
      id: import("typebox").TString;
      sessionKey: import("typebox").TString;
      agentId: import("typebox").TString;
      author: import("typebox").TObject<{
        id: import("typebox").TString;
        type: import("typebox").TUnion<[import("typebox").TLiteral<"human">, import("typebox").TLiteral<"agent">, import("typebox").TLiteral<"system">]>;
        label: import("typebox").TOptional<import("typebox").TString>;
        avatarUrl: import("typebox").TOptional<import("typebox").TString>;
      }>;
      text: import("typebox").TString;
      createdAt: import("typebox").TInteger;
      state: import("typebox").TUnion<[import("typebox").TLiteral<"pending">, import("typebox").TLiteral<"accepted">, import("typebox").TLiteral<"dismissed">]>;
    }>;
  }>;
  readonly SessionSuggestionEvent: import("typebox").TObject<{
    action: import("typebox").TUnion<[import("typebox").TLiteral<"added">, import("typebox").TLiteral<"resolved">]>;
    suggestion: import("typebox").TObject<{
      id: import("typebox").TString;
      sessionKey: import("typebox").TString;
      agentId: import("typebox").TString;
      author: import("typebox").TObject<{
        id: import("typebox").TString;
        type: import("typebox").TUnion<[import("typebox").TLiteral<"human">, import("typebox").TLiteral<"agent">, import("typebox").TLiteral<"system">]>;
        label: import("typebox").TOptional<import("typebox").TString>;
        avatarUrl: import("typebox").TOptional<import("typebox").TString>;
      }>;
      text: import("typebox").TString;
      createdAt: import("typebox").TInteger;
      state: import("typebox").TUnion<[import("typebox").TLiteral<"pending">, import("typebox").TLiteral<"accepted">, import("typebox").TLiteral<"dismissed">]>;
    }>;
  }>;
  readonly SessionTypingParams: import("typebox").TObject<{
    sessionId: import("typebox").TString;
    typing: import("typebox").TBoolean;
    sessionKey: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly SessionTypingResult: import("typebox").TObject<{
    ok: import("typebox").TLiteral<true>;
    broadcast: import("typebox").TBoolean;
  }>;
  readonly SessionTypingEvent: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
    sessionId: import("typebox").TString;
    agentId: import("typebox").TString;
    actor: import("typebox").TObject<{
      id: import("typebox").TString;
      type: import("typebox").TUnion<[import("typebox").TLiteral<"human">, import("typebox").TLiteral<"agent">, import("typebox").TLiteral<"system">]>;
      label: import("typebox").TOptional<import("typebox").TString>;
      avatarUrl: import("typebox").TOptional<import("typebox").TString>;
    }>;
    typing: import("typebox").TBoolean;
    ts: import("typebox").TInteger;
  }>;
} & {
  readonly SessionsCompactionListParams: import("typebox").TObject<{
    key: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly SessionsCompactionGetParams: import("typebox").TObject<{
    key: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    checkpointId: import("typebox").TString;
  }>;
  readonly SessionsCompactionBranchParams: import("typebox").TObject<{
    key: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    checkpointId: import("typebox").TString;
  }>;
  readonly SessionsCompactionRestoreParams: import("typebox").TObject<{
    key: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    checkpointId: import("typebox").TString;
  }>;
  readonly SessionsCompactionListResult: import("typebox").TObject<{
    ok: import("typebox").TLiteral<true>;
    key: import("typebox").TString;
    checkpoints: import("typebox").TArray<import("typebox").TObject<{
      checkpointId: import("typebox").TString;
      sessionKey: import("typebox").TString;
      sessionId: import("typebox").TString;
      createdAt: import("typebox").TInteger;
      reason: import("typebox").TUnion<[import("typebox").TLiteral<"manual">, import("typebox").TLiteral<"auto-threshold">, import("typebox").TLiteral<"overflow-retry">, import("typebox").TLiteral<"timeout-retry">]>;
      tokensBefore: import("typebox").TOptional<import("typebox").TInteger>;
      tokensAfter: import("typebox").TOptional<import("typebox").TInteger>;
      summary: import("typebox").TOptional<import("typebox").TString>;
      firstKeptEntryId: import("typebox").TOptional<import("typebox").TString>;
      preCompaction: import("typebox").TObject<{
        sessionId: import("typebox").TString;
        sessionFile: import("typebox").TOptional<import("typebox").TString>;
        leafId: import("typebox").TOptional<import("typebox").TString>;
        entryId: import("typebox").TOptional<import("typebox").TString>;
      }>;
      postCompaction: import("typebox").TObject<{
        sessionId: import("typebox").TString;
        sessionFile: import("typebox").TOptional<import("typebox").TString>;
        leafId: import("typebox").TOptional<import("typebox").TString>;
        entryId: import("typebox").TOptional<import("typebox").TString>;
      }>;
    }>>;
  }>;
  readonly SessionsCompactionGetResult: import("typebox").TObject<{
    ok: import("typebox").TLiteral<true>;
    key: import("typebox").TString;
    checkpoint: import("typebox").TObject<{
      checkpointId: import("typebox").TString;
      sessionKey: import("typebox").TString;
      sessionId: import("typebox").TString;
      createdAt: import("typebox").TInteger;
      reason: import("typebox").TUnion<[import("typebox").TLiteral<"manual">, import("typebox").TLiteral<"auto-threshold">, import("typebox").TLiteral<"overflow-retry">, import("typebox").TLiteral<"timeout-retry">]>;
      tokensBefore: import("typebox").TOptional<import("typebox").TInteger>;
      tokensAfter: import("typebox").TOptional<import("typebox").TInteger>;
      summary: import("typebox").TOptional<import("typebox").TString>;
      firstKeptEntryId: import("typebox").TOptional<import("typebox").TString>;
      preCompaction: import("typebox").TObject<{
        sessionId: import("typebox").TString;
        sessionFile: import("typebox").TOptional<import("typebox").TString>;
        leafId: import("typebox").TOptional<import("typebox").TString>;
        entryId: import("typebox").TOptional<import("typebox").TString>;
      }>;
      postCompaction: import("typebox").TObject<{
        sessionId: import("typebox").TString;
        sessionFile: import("typebox").TOptional<import("typebox").TString>;
        leafId: import("typebox").TOptional<import("typebox").TString>;
        entryId: import("typebox").TOptional<import("typebox").TString>;
      }>;
    }>;
  }>;
  readonly SessionsCompactionBranchResult: import("typebox").TObject<{
    ok: import("typebox").TLiteral<true>;
    sourceKey: import("typebox").TString;
    key: import("typebox").TString;
    sessionId: import("typebox").TString;
    checkpoint: import("typebox").TObject<{
      checkpointId: import("typebox").TString;
      sessionKey: import("typebox").TString;
      sessionId: import("typebox").TString;
      createdAt: import("typebox").TInteger;
      reason: import("typebox").TUnion<[import("typebox").TLiteral<"manual">, import("typebox").TLiteral<"auto-threshold">, import("typebox").TLiteral<"overflow-retry">, import("typebox").TLiteral<"timeout-retry">]>;
      tokensBefore: import("typebox").TOptional<import("typebox").TInteger>;
      tokensAfter: import("typebox").TOptional<import("typebox").TInteger>;
      summary: import("typebox").TOptional<import("typebox").TString>;
      firstKeptEntryId: import("typebox").TOptional<import("typebox").TString>;
      preCompaction: import("typebox").TObject<{
        sessionId: import("typebox").TString;
        sessionFile: import("typebox").TOptional<import("typebox").TString>;
        leafId: import("typebox").TOptional<import("typebox").TString>;
        entryId: import("typebox").TOptional<import("typebox").TString>;
      }>;
      postCompaction: import("typebox").TObject<{
        sessionId: import("typebox").TString;
        sessionFile: import("typebox").TOptional<import("typebox").TString>;
        leafId: import("typebox").TOptional<import("typebox").TString>;
        entryId: import("typebox").TOptional<import("typebox").TString>;
      }>;
    }>;
    entry: import("typebox").TObject<{
      sessionId: import("typebox").TString;
      updatedAt: import("typebox").TInteger;
    }>;
  }>;
  readonly SessionsCompactionRestoreResult: import("typebox").TObject<{
    ok: import("typebox").TLiteral<true>;
    key: import("typebox").TString;
    sessionId: import("typebox").TString;
    checkpoint: import("typebox").TObject<{
      checkpointId: import("typebox").TString;
      sessionKey: import("typebox").TString;
      sessionId: import("typebox").TString;
      createdAt: import("typebox").TInteger;
      reason: import("typebox").TUnion<[import("typebox").TLiteral<"manual">, import("typebox").TLiteral<"auto-threshold">, import("typebox").TLiteral<"overflow-retry">, import("typebox").TLiteral<"timeout-retry">]>;
      tokensBefore: import("typebox").TOptional<import("typebox").TInteger>;
      tokensAfter: import("typebox").TOptional<import("typebox").TInteger>;
      summary: import("typebox").TOptional<import("typebox").TString>;
      firstKeptEntryId: import("typebox").TOptional<import("typebox").TString>;
      preCompaction: import("typebox").TObject<{
        sessionId: import("typebox").TString;
        sessionFile: import("typebox").TOptional<import("typebox").TString>;
        leafId: import("typebox").TOptional<import("typebox").TString>;
        entryId: import("typebox").TOptional<import("typebox").TString>;
      }>;
      postCompaction: import("typebox").TObject<{
        sessionId: import("typebox").TString;
        sessionFile: import("typebox").TOptional<import("typebox").TString>;
        leafId: import("typebox").TOptional<import("typebox").TString>;
        entryId: import("typebox").TOptional<import("typebox").TString>;
      }>;
    }>;
    entry: import("typebox").TObject<{
      sessionId: import("typebox").TString;
      updatedAt: import("typebox").TInteger;
    }>;
  }>;
  readonly SessionsRewindParams: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    entryId: import("typebox").TString;
  }>;
  readonly SessionsRewindResult: import("typebox").TObject<{
    editorText: import("typebox").TOptional<import("typebox").TString>;
    editorAttachments: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
      mimeType: import("typebox").TString;
      data: import("typebox").TString;
    }>>>;
  }>;
  readonly SessionsForkParams: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    entryId: import("typebox").TString;
  }>;
  readonly SessionsForkResult: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
    editorText: import("typebox").TOptional<import("typebox").TString>;
    editorAttachments: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
      mimeType: import("typebox").TString;
      data: import("typebox").TString;
    }>>>;
  }>;
  readonly SessionBranch: import("typebox").TObject<{
    leafEntryId: import("typebox").TString;
    headline: import("typebox").TString;
    messageCount: import("typebox").TInteger;
    updatedAt: import("typebox").TOptional<import("typebox").TString>;
    active: import("typebox").TBoolean;
  }>;
  readonly SessionsBranchesListParams: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly SessionsBranchesListResult: import("typebox").TObject<{
    branches: import("typebox").TArray<import("typebox").TObject<{
      leafEntryId: import("typebox").TString;
      headline: import("typebox").TString;
      messageCount: import("typebox").TInteger;
      updatedAt: import("typebox").TOptional<import("typebox").TString>;
      active: import("typebox").TBoolean;
    }>>;
  }>;
  readonly SessionsBranchesSwitchParams: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    leafEntryId: import("typebox").TString;
  }>;
  readonly SessionsBranchesSwitchResult: import("typebox").TObject<{}>;
  readonly SessionFileBrowserEntry: import("typebox").TObject<{
    path: import("typebox").TString;
    name: import("typebox").TString;
    kind: import("typebox").TUnion<[import("typebox").TLiteral<"file">, import("typebox").TLiteral<"directory">]>;
    sessionKind: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"modified">, import("typebox").TLiteral<"read">, import("typebox").TLiteral<"mixed">]>>;
    size: import("typebox").TOptional<import("typebox").TInteger>;
    updatedAtMs: import("typebox").TOptional<import("typebox").TInteger>;
  }>;
  readonly SessionFileBrowserResult: import("typebox").TObject<{
    path: import("typebox").TString;
    parentPath: import("typebox").TOptional<import("typebox").TString>;
    search: import("typebox").TOptional<import("typebox").TString>;
    entries: import("typebox").TArray<import("typebox").TObject<{
      path: import("typebox").TString;
      name: import("typebox").TString;
      kind: import("typebox").TUnion<[import("typebox").TLiteral<"file">, import("typebox").TLiteral<"directory">]>;
      sessionKind: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"modified">, import("typebox").TLiteral<"read">, import("typebox").TLiteral<"mixed">]>>;
      size: import("typebox").TOptional<import("typebox").TInteger>;
      updatedAtMs: import("typebox").TOptional<import("typebox").TInteger>;
    }>>;
    truncated: import("typebox").TOptional<import("typebox").TBoolean>;
  }>;
  readonly SessionFileKind: import("typebox").TUnion<[import("typebox").TLiteral<"modified">, import("typebox").TLiteral<"read">]>;
  readonly SessionFileEntry: import("typebox").TObject<{
    path: import("typebox").TString;
    workspacePath: import("typebox").TOptional<import("typebox").TString>;
    name: import("typebox").TString;
    kind: import("typebox").TUnion<[import("typebox").TLiteral<"modified">, import("typebox").TLiteral<"read">]>;
    missing: import("typebox").TBoolean;
    size: import("typebox").TOptional<import("typebox").TInteger>;
    updatedAtMs: import("typebox").TOptional<import("typebox").TInteger>;
    content: import("typebox").TOptional<import("typebox").TString>;
    hash: import("typebox").TOptional<import("typebox").TString>;
    mimeType: import("typebox").TOptional<import("typebox").TString>;
    contentEncoding: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"utf8">, import("typebox").TLiteral<"base64">]>>;
    previewKind: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"text">, import("typebox").TLiteral<"image">, import("typebox").TLiteral<"unsupported">]>>;
  }>;
  readonly SessionFilePreviewKind: import("typebox").TUnion<[import("typebox").TLiteral<"text">, import("typebox").TLiteral<"image">, import("typebox").TLiteral<"unsupported">]>;
  readonly SessionFileRelevance: import("typebox").TUnion<[import("typebox").TLiteral<"modified">, import("typebox").TLiteral<"read">, import("typebox").TLiteral<"mixed">]>;
  readonly SessionsFilesListParams: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    path: import("typebox").TOptional<import("typebox").TString>;
    search: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly SessionsFilesListResult: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
    root: import("typebox").TOptional<import("typebox").TString>;
    gitCheckout: import("typebox").TOptional<import("typebox").TBoolean>;
    files: import("typebox").TArray<import("typebox").TObject<{
      path: import("typebox").TString;
      workspacePath: import("typebox").TOptional<import("typebox").TString>;
      name: import("typebox").TString;
      kind: import("typebox").TUnion<[import("typebox").TLiteral<"modified">, import("typebox").TLiteral<"read">]>;
      missing: import("typebox").TBoolean;
      size: import("typebox").TOptional<import("typebox").TInteger>;
      updatedAtMs: import("typebox").TOptional<import("typebox").TInteger>;
      content: import("typebox").TOptional<import("typebox").TString>;
      hash: import("typebox").TOptional<import("typebox").TString>;
      mimeType: import("typebox").TOptional<import("typebox").TString>;
      contentEncoding: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"utf8">, import("typebox").TLiteral<"base64">]>>;
      previewKind: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"text">, import("typebox").TLiteral<"image">, import("typebox").TLiteral<"unsupported">]>>;
    }>>;
    browser: import("typebox").TOptional<import("typebox").TObject<{
      path: import("typebox").TString;
      parentPath: import("typebox").TOptional<import("typebox").TString>;
      search: import("typebox").TOptional<import("typebox").TString>;
      entries: import("typebox").TArray<import("typebox").TObject<{
        path: import("typebox").TString;
        name: import("typebox").TString;
        kind: import("typebox").TUnion<[import("typebox").TLiteral<"file">, import("typebox").TLiteral<"directory">]>;
        sessionKind: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"modified">, import("typebox").TLiteral<"read">, import("typebox").TLiteral<"mixed">]>>;
        size: import("typebox").TOptional<import("typebox").TInteger>;
        updatedAtMs: import("typebox").TOptional<import("typebox").TInteger>;
      }>>;
      truncated: import("typebox").TOptional<import("typebox").TBoolean>;
    }>>;
  }>;
  readonly SessionsFilesGetParams: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
    path: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly SessionsFilesGetResult: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
    root: import("typebox").TOptional<import("typebox").TString>;
    file: import("typebox").TObject<{
      path: import("typebox").TString;
      workspacePath: import("typebox").TOptional<import("typebox").TString>;
      name: import("typebox").TString;
      kind: import("typebox").TUnion<[import("typebox").TLiteral<"modified">, import("typebox").TLiteral<"read">]>;
      missing: import("typebox").TBoolean;
      size: import("typebox").TOptional<import("typebox").TInteger>;
      updatedAtMs: import("typebox").TOptional<import("typebox").TInteger>;
      content: import("typebox").TOptional<import("typebox").TString>;
      hash: import("typebox").TOptional<import("typebox").TString>;
      mimeType: import("typebox").TOptional<import("typebox").TString>;
      contentEncoding: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"utf8">, import("typebox").TLiteral<"base64">]>>;
      previewKind: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"text">, import("typebox").TLiteral<"image">, import("typebox").TLiteral<"unsupported">]>>;
    }>;
  }>;
  readonly SessionsFilesRevealParams: import("typebox").TObject<{
    key: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly SessionsFilesRevealResult: import("typebox").TObject<{
    ok: import("typebox").TBoolean;
    path: import("typebox").TOptional<import("typebox").TString>;
    error: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly SessionsFilesSetParams: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
    path: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    content: import("typebox").TString;
    expectedHash: import("typebox").TString;
  }>;
  readonly SessionsFilesSetResult: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
    root: import("typebox").TOptional<import("typebox").TString>;
    file: import("typebox").TObject<{
      path: import("typebox").TString;
      workspacePath: import("typebox").TOptional<import("typebox").TString>;
      name: import("typebox").TString;
      kind: import("typebox").TUnion<[import("typebox").TLiteral<"modified">, import("typebox").TLiteral<"read">]>;
      missing: import("typebox").TBoolean;
      size: import("typebox").TOptional<import("typebox").TInteger>;
      updatedAtMs: import("typebox").TOptional<import("typebox").TInteger>;
      content: import("typebox").TOptional<import("typebox").TString>;
      hash: import("typebox").TOptional<import("typebox").TString>;
      mimeType: import("typebox").TOptional<import("typebox").TString>;
      contentEncoding: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"utf8">, import("typebox").TLiteral<"base64">]>>;
      previewKind: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"text">, import("typebox").TLiteral<"image">, import("typebox").TLiteral<"unsupported">]>>;
    }>;
  }>;
  readonly SessionDiffFileStatus: import("typebox").TUnion<[import("typebox").TLiteral<"added">, import("typebox").TLiteral<"modified">, import("typebox").TLiteral<"deleted">, import("typebox").TLiteral<"renamed">]>;
  readonly SessionDiffFile: import("typebox").TObject<{
    path: import("typebox").TString;
    oldPath: import("typebox").TOptional<import("typebox").TString>;
    status: import("typebox").TUnion<[import("typebox").TLiteral<"added">, import("typebox").TLiteral<"modified">, import("typebox").TLiteral<"deleted">, import("typebox").TLiteral<"renamed">]>;
    additions: import("typebox").TInteger;
    deletions: import("typebox").TInteger;
    binary: import("typebox").TOptional<import("typebox").TBoolean>;
    untracked: import("typebox").TOptional<import("typebox").TBoolean>;
    patch: import("typebox").TOptional<import("typebox").TString>;
    truncated: import("typebox").TOptional<import("typebox").TBoolean>;
  }>;
  readonly SessionsDiffParams: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly SessionsDiffResult: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
    root: import("typebox").TOptional<import("typebox").TString>;
    branch: import("typebox").TOptional<import("typebox").TString>;
    baseRef: import("typebox").TOptional<import("typebox").TString>;
    files: import("typebox").TArray<import("typebox").TObject<{
      path: import("typebox").TString;
      oldPath: import("typebox").TOptional<import("typebox").TString>;
      status: import("typebox").TUnion<[import("typebox").TLiteral<"added">, import("typebox").TLiteral<"modified">, import("typebox").TLiteral<"deleted">, import("typebox").TLiteral<"renamed">]>;
      additions: import("typebox").TInteger;
      deletions: import("typebox").TInteger;
      binary: import("typebox").TOptional<import("typebox").TBoolean>;
      untracked: import("typebox").TOptional<import("typebox").TBoolean>;
      patch: import("typebox").TOptional<import("typebox").TString>;
      truncated: import("typebox").TOptional<import("typebox").TBoolean>;
    }>>;
    additions: import("typebox").TInteger;
    deletions: import("typebox").TInteger;
    truncated: import("typebox").TOptional<import("typebox").TBoolean>;
    unavailableReason: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"unknown_session">, import("typebox").TLiteral<"not_git">]>>;
  }>;
  readonly SessionWorktreeInfo: import("typebox").TObject<{
    id: import("typebox").TString;
    path: import("typebox").TString;
    branch: import("typebox").TString;
  }>;
  readonly SessionsCreateParams: import("typebox").TObject<{
    key: import("typebox").TOptional<import("typebox").TString>;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    label: import("typebox").TOptional<import("typebox").TString>;
    model: import("typebox").TOptional<import("typebox").TString>;
    thinkingLevel: import("typebox").TOptional<import("typebox").TString>;
    incognito: import("typebox").TOptional<import("typebox").TBoolean>;
    visibility: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"shared">, import("typebox").TLiteral<"read-only">, import("typebox").TLiteral<"suggest">, import("typebox").TLiteral<"draft">]>>;
    catalogId: import("typebox").TOptional<import("typebox").TString>;
    parentSessionKey: import("typebox").TOptional<import("typebox").TString>;
    spawnDepth: import("typebox").TOptional<import("typebox").TInteger>;
    fork: import("typebox").TOptional<import("typebox").TBoolean>;
    emitCommandHooks: import("typebox").TOptional<import("typebox").TBoolean>;
    succeedsParent: import("typebox").TOptional<import("typebox").TBoolean>;
    task: import("typebox").TOptional<import("typebox").TString>;
    message: import("typebox").TOptional<import("typebox").TString>;
    attachments: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
      type: import("typebox").TOptional<import("typebox").TString>;
      mimeType: import("typebox").TOptional<import("typebox").TString>;
      fileName: import("typebox").TOptional<import("typebox").TString>;
      content: import("typebox").TOptional<import("typebox").TUnknown>;
      sizeBytes: import("typebox").TOptional<import("typebox").TNumber>;
      durationMs: import("typebox").TOptional<import("typebox").TNumber>;
      width: import("typebox").TOptional<import("typebox").TNumber>;
      height: import("typebox").TOptional<import("typebox").TNumber>;
    }>>>;
    worktree: import("typebox").TOptional<import("typebox").TBoolean>;
    worktreeBaseRef: import("typebox").TOptional<import("typebox").TString>;
    worktreeName: import("typebox").TOptional<import("typebox").TString>;
    execNode: import("typebox").TOptional<import("typebox").TString>;
    cwd: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly SessionsCreateResult: import("typebox").TObject<{
    ok: import("typebox").TLiteral<true>;
    key: import("typebox").TString;
    sessionId: import("typebox").TOptional<import("typebox").TString>;
    entry: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TUnknown>>;
    runStarted: import("typebox").TOptional<import("typebox").TBoolean>;
    runId: import("typebox").TOptional<import("typebox").TString>;
    messageSeq: import("typebox").TOptional<import("typebox").TInteger>;
    runError: import("typebox").TOptional<import("typebox").TObject<{
      code: import("typebox").TString;
      message: import("typebox").TString;
      details: import("typebox").TOptional<import("typebox").TUnknown>;
      retryable: import("typebox").TOptional<import("typebox").TBoolean>;
      retryAfterMs: import("typebox").TOptional<import("typebox").TInteger>;
    }>>;
    worktree: import("typebox").TOptional<import("typebox").TObject<{
      id: import("typebox").TString;
      path: import("typebox").TString;
      branch: import("typebox").TString;
    }>>;
  }>;
  readonly SessionsSendParams: import("typebox").TObject<{
    key: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    message: import("typebox").TString;
    thinking: import("typebox").TOptional<import("typebox").TString>;
    attachments: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
      type: import("typebox").TOptional<import("typebox").TString>;
      mimeType: import("typebox").TOptional<import("typebox").TString>;
      fileName: import("typebox").TOptional<import("typebox").TString>;
      content: import("typebox").TOptional<import("typebox").TUnknown>;
      sizeBytes: import("typebox").TOptional<import("typebox").TNumber>;
      durationMs: import("typebox").TOptional<import("typebox").TNumber>;
      width: import("typebox").TOptional<import("typebox").TNumber>;
      height: import("typebox").TOptional<import("typebox").TNumber>;
    }>>>;
    timeoutMs: import("typebox").TOptional<import("typebox").TInteger>;
    idempotencyKey: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly SessionsMessagesSubscribeParams: import("typebox").TObject<{
    key: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    includeApprovals: import("typebox").TOptional<import("typebox").TLiteral<true>>;
  }>;
  readonly SessionsMessagesUnsubscribeParams: import("typebox").TObject<{
    key: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly SessionsViewerPresenceSetParams: import("typebox").TObject<{
    sessionKeys: import("typebox").TArray<import("typebox").TString>;
  }>;
  readonly SessionsViewerPresenceSetResult: import("typebox").TObject<{
    sessionKeys: import("typebox").TArray<import("typebox").TString>;
  }>;
  readonly SessionsAbortParams: import("typebox").TObject<{
    key: import("typebox").TOptional<import("typebox").TString>;
    runId: import("typebox").TOptional<import("typebox").TString>;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    clearQueued: import("typebox").TOptional<import("typebox").TBoolean>;
  }>;
  readonly SessionsPatchParams: import("typebox").TObject<{
    key: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    expectedSessionId: import("typebox").TOptional<import("typebox").TString>;
    expectedLifecycleRevision: import("typebox").TOptional<import("typebox").TString>;
    label: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    category: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    boardFace: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"chat">, import("typebox").TLiteral<"dashboard">]>>;
    icon: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    statusNote: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    attention: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    ttlMinutes: import("typebox").TOptional<import("typebox").TInteger>;
    archived: import("typebox").TOptional<import("typebox").TBoolean>;
    pinned: import("typebox").TOptional<import("typebox").TBoolean>;
    unread: import("typebox").TOptional<import("typebox").TBoolean>;
    thinkingLevel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    fastMode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TBoolean, import("typebox").TLiteral<"auto">, import("typebox").TNull]>>;
    toolOverrides: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TObject<{
      mcpServers: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TBoolean>>;
      mcpToolsDeny: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TArray<import("typebox").TString>>>;
      skills: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TBoolean>>;
      webSearch: import("typebox").TOptional<import("typebox").TBoolean>;
    }>, import("typebox").TNull]>>;
    verboseLevel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    traceLevel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    reasoningLevel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    responseUsage: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"off">, import("typebox").TLiteral<"tokens">, import("typebox").TLiteral<"full">, import("typebox").TLiteral<"on">, import("typebox").TNull]>>;
    elevatedLevel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    execHost: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    execSecurity: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    execAsk: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    execNode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    model: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    completionOwnerSessionKey: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    inheritedToolPolicyVersion: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<1>, import("typebox").TNull]>>;
    inheritedToolAllow: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TArray<import("typebox").TString>, import("typebox").TNull]>>;
    inheritedToolDeny: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TArray<import("typebox").TString>, import("typebox").TNull]>>;
    sendPolicy: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"allow">, import("typebox").TLiteral<"deny">, import("typebox").TNull]>>;
    groupActivation: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"mention">, import("typebox").TLiteral<"always">, import("typebox").TNull]>>;
  }>;
  readonly SessionsPluginPatchParams: import("typebox").TObject<{
    key: import("typebox").TString;
    pluginId: import("typebox").TString;
    namespace: import("typebox").TString;
    value: import("typebox").TOptional<import("typebox").TUnknown>;
    unset: import("typebox").TOptional<import("typebox").TBoolean>;
  }>;
  readonly SessionsPluginPatchResult: import("typebox").TObject<{
    ok: import("typebox").TLiteral<true>;
    key: import("typebox").TString;
    value: import("typebox").TOptional<import("typebox").TUnknown>;
  }>;
  readonly SessionsResetParams: import("typebox").TObject<{
    key: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    reason: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"new">, import("typebox").TLiteral<"reset">]>>;
  }>;
  readonly SessionsDeleteParams: import("typebox").TObject<{
    key: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    deleteTranscript: import("typebox").TOptional<import("typebox").TBoolean>;
    expectedSessionId: import("typebox").TOptional<import("typebox").TString>;
    expectedLifecycleRevision: import("typebox").TOptional<import("typebox").TString>;
    expectedSessionUpdatedAt: import("typebox").TOptional<import("typebox").TNumber>;
    emitLifecycleHooks: import("typebox").TOptional<import("typebox").TBoolean>;
    archivedOnly: import("typebox").TOptional<import("typebox").TBoolean>;
  }>;
  readonly SessionGroup: import("typebox").TObject<{
    name: import("typebox").TString;
    position: import("typebox").TInteger;
  }>;
  readonly SessionsGroupsListParams: import("typebox").TObject<{}>;
  readonly SessionsGroupsListResult: import("typebox").TObject<{
    groups: import("typebox").TArray<import("typebox").TObject<{
      name: import("typebox").TString;
      position: import("typebox").TInteger;
    }>>;
    sectionOrder: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
  }>;
  readonly SessionsGroupsPutParams: import("typebox").TObject<{
    names: import("typebox").TArray<import("typebox").TString>;
    sectionOrder: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
  }>;
  readonly SessionsGroupsRenameParams: import("typebox").TObject<{
    name: import("typebox").TString;
    to: import("typebox").TString;
  }>;
  readonly SessionsGroupsDeleteParams: import("typebox").TObject<{
    name: import("typebox").TString;
  }>;
  readonly SessionsGroupsMutationResult: import("typebox").TObject<{
    ok: import("typebox").TLiteral<true>;
    groups: import("typebox").TArray<import("typebox").TObject<{
      name: import("typebox").TString;
      position: import("typebox").TInteger;
    }>>;
    sectionOrder: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    updatedSessions: import("typebox").TOptional<import("typebox").TInteger>;
  }>;
  readonly SessionsCompactParams: import("typebox").TObject<{
    key: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    maxLines: import("typebox").TOptional<import("typebox").TInteger>;
  }>;
  readonly SessionsUsageParams: import("typebox").TObject<{
    key: import("typebox").TOptional<import("typebox").TString>;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    agentScope: import("typebox").TOptional<import("typebox").TLiteral<"all">>;
    startDate: import("typebox").TOptional<import("typebox").TString>;
    endDate: import("typebox").TOptional<import("typebox").TString>;
    mode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"utc">, import("typebox").TLiteral<"gateway">, import("typebox").TLiteral<"specific">]>>;
    range: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"7d">, import("typebox").TLiteral<"30d">, import("typebox").TLiteral<"90d">, import("typebox").TLiteral<"1y">, import("typebox").TLiteral<"all">]>>;
    groupBy: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"instance">, import("typebox").TLiteral<"family">]>>;
    includeHistorical: import("typebox").TOptional<import("typebox").TBoolean>;
    utcOffset: import("typebox").TOptional<import("typebox").TString>;
    timeZone: import("typebox").TOptional<import("typebox").TString>;
    limit: import("typebox").TOptional<import("typebox").TInteger>;
    includeContextWeight: import("typebox").TOptional<import("typebox").TBoolean>;
  }>;
} & {
  readonly AuditActivityAgentRunV1: import("typebox").TSchema;
  readonly AuditActivityToolActionV1: import("typebox").TSchema;
  readonly AuditActivityInboundMessageV1: import("typebox").TSchema;
  readonly AuditActivityOutboundMessageV1: import("typebox").TSchema;
  readonly AuditActivityEventV1: import("typebox").TSchema;
  readonly AuditActivityListParams: import("typebox").TSchema;
  readonly AuditActivityListResult: import("typebox").TSchema;
  readonly AuditEvent: import("typebox").TObject<{
    eventId: import("typebox").TString;
    sequence: import("typebox").TInteger;
    sourceSequence: import("typebox").TInteger;
    occurredAt: import("typebox").TInteger;
    kind: import("typebox").TUnion<[import("typebox").TLiteral<"agent_run">, import("typebox").TLiteral<"tool_action">]>;
    action: import("typebox").TUnion<[import("typebox").TLiteral<"agent.run.started">, import("typebox").TLiteral<"agent.run.finished">, import("typebox").TLiteral<"tool.action.started">, import("typebox").TLiteral<"tool.action.finished">]>;
    status: import("typebox").TUnion<[import("typebox").TLiteral<"started">, import("typebox").TLiteral<"succeeded">, import("typebox").TLiteral<"failed">, import("typebox").TLiteral<"cancelled">, import("typebox").TLiteral<"timed_out">, import("typebox").TLiteral<"blocked">, import("typebox").TLiteral<"unknown">]>;
    errorCode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"run_failed">, import("typebox").TLiteral<"run_cancelled">, import("typebox").TLiteral<"run_timed_out">, import("typebox").TLiteral<"run_blocked">, import("typebox").TLiteral<"tool_failed">, import("typebox").TLiteral<"tool_cancelled">, import("typebox").TLiteral<"tool_timed_out">, import("typebox").TLiteral<"tool_blocked">, import("typebox").TLiteral<"tool_outcome_unknown">]>>;
    actor: import("typebox").TObject<{
      type: import("typebox").TUnion<[import("typebox").TLiteral<"agent">, import("typebox").TLiteral<"system">]>;
      id: import("typebox").TString;
    }>;
    agentId: import("typebox").TString;
    sessionKey: import("typebox").TOptional<import("typebox").TString>;
    sessionId: import("typebox").TOptional<import("typebox").TString>;
    runId: import("typebox").TString;
    toolCallId: import("typebox").TOptional<import("typebox").TString>;
    toolName: import("typebox").TOptional<import("typebox").TString>;
    redaction: import("typebox").TLiteral<"metadata_only">;
  }>;
  readonly AuditListParams: import("typebox").TObject<{
    agentId: import("typebox").TOptional<import("typebox").TString>;
    sessionKey: import("typebox").TOptional<import("typebox").TString>;
    runId: import("typebox").TOptional<import("typebox").TString>;
    kind: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"agent_run">, import("typebox").TLiteral<"tool_action">]>>;
    status: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"started">, import("typebox").TLiteral<"succeeded">, import("typebox").TLiteral<"failed">, import("typebox").TLiteral<"cancelled">, import("typebox").TLiteral<"timed_out">, import("typebox").TLiteral<"blocked">, import("typebox").TLiteral<"unknown">]>>;
    after: import("typebox").TOptional<import("typebox").TInteger>;
    before: import("typebox").TOptional<import("typebox").TInteger>;
    limit: import("typebox").TOptional<import("typebox").TInteger>;
    cursor: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly AuditListResult: import("typebox").TObject<{
    events: import("typebox").TArray<import("typebox").TObject<{
      eventId: import("typebox").TString;
      sequence: import("typebox").TInteger;
      sourceSequence: import("typebox").TInteger;
      occurredAt: import("typebox").TInteger;
      kind: import("typebox").TUnion<[import("typebox").TLiteral<"agent_run">, import("typebox").TLiteral<"tool_action">]>;
      action: import("typebox").TUnion<[import("typebox").TLiteral<"agent.run.started">, import("typebox").TLiteral<"agent.run.finished">, import("typebox").TLiteral<"tool.action.started">, import("typebox").TLiteral<"tool.action.finished">]>;
      status: import("typebox").TUnion<[import("typebox").TLiteral<"started">, import("typebox").TLiteral<"succeeded">, import("typebox").TLiteral<"failed">, import("typebox").TLiteral<"cancelled">, import("typebox").TLiteral<"timed_out">, import("typebox").TLiteral<"blocked">, import("typebox").TLiteral<"unknown">]>;
      errorCode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"run_failed">, import("typebox").TLiteral<"run_cancelled">, import("typebox").TLiteral<"run_timed_out">, import("typebox").TLiteral<"run_blocked">, import("typebox").TLiteral<"tool_failed">, import("typebox").TLiteral<"tool_cancelled">, import("typebox").TLiteral<"tool_timed_out">, import("typebox").TLiteral<"tool_blocked">, import("typebox").TLiteral<"tool_outcome_unknown">]>>;
      actor: import("typebox").TObject<{
        type: import("typebox").TUnion<[import("typebox").TLiteral<"agent">, import("typebox").TLiteral<"system">]>;
        id: import("typebox").TString;
      }>;
      agentId: import("typebox").TString;
      sessionKey: import("typebox").TOptional<import("typebox").TString>;
      sessionId: import("typebox").TOptional<import("typebox").TString>;
      runId: import("typebox").TString;
      toolCallId: import("typebox").TOptional<import("typebox").TString>;
      toolName: import("typebox").TOptional<import("typebox").TString>;
      redaction: import("typebox").TLiteral<"metadata_only">;
    }>>;
    nextCursor: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly TaskSuggestion: import("typebox").TObject<{
    id: import("typebox").TString;
    title: import("typebox").TString;
    prompt: import("typebox").TString;
    tldr: import("typebox").TString;
    cwd: import("typebox").TString;
    sessionKey: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    createdAt: import("typebox").TInteger;
  }>;
  readonly TaskSuggestionEvent: import("typebox").TUnion<[import("typebox").TObject<{
    action: import("typebox").TLiteral<"created">;
    suggestion: import("typebox").TObject<{
      id: import("typebox").TString;
      title: import("typebox").TString;
      prompt: import("typebox").TString;
      tldr: import("typebox").TString;
      cwd: import("typebox").TString;
      sessionKey: import("typebox").TString;
      agentId: import("typebox").TOptional<import("typebox").TString>;
      createdAt: import("typebox").TInteger;
    }>;
  }>, import("typebox").TObject<{
    action: import("typebox").TLiteral<"resolved">;
    taskId: import("typebox").TString;
    resolution: import("typebox").TUnion<[import("typebox").TLiteral<"dismissed">, import("typebox").TLiteral<"accepted">, import("typebox").TLiteral<"expired">]>;
  }>]>;
  readonly TaskSuggestionResolution: import("typebox").TUnion<[import("typebox").TLiteral<"dismissed">, import("typebox").TLiteral<"accepted">, import("typebox").TLiteral<"expired">]>;
  readonly TaskSuggestionsAcceptParams: import("typebox").TObject<{
    taskId: import("typebox").TString;
  }>;
  readonly TaskSuggestionsAcceptResult: import("typebox").TObject<{
    taskId: import("typebox").TString;
    key: import("typebox").TString;
  }>;
  readonly TaskSuggestionsCreateParams: import("typebox").TObject<{
    title: import("typebox").TString;
    prompt: import("typebox").TString;
    tldr: import("typebox").TString;
    cwd: import("typebox").TString;
    sessionKey: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly TaskSuggestionsCreateResult: import("typebox").TObject<{
    taskId: import("typebox").TString;
    suggestion: import("typebox").TObject<{
      id: import("typebox").TString;
      title: import("typebox").TString;
      prompt: import("typebox").TString;
      tldr: import("typebox").TString;
      cwd: import("typebox").TString;
      sessionKey: import("typebox").TString;
      agentId: import("typebox").TOptional<import("typebox").TString>;
      createdAt: import("typebox").TInteger;
    }>;
  }>;
  readonly TaskSuggestionsDismissParams: import("typebox").TObject<{
    taskId: import("typebox").TString;
    reason: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly TaskSuggestionsDismissResult: import("typebox").TObject<{
    taskId: import("typebox").TString;
    dismissed: import("typebox").TBoolean;
  }>;
  readonly TaskSuggestionsListParams: import("typebox").TObject<{
    sessionKey: import("typebox").TOptional<import("typebox").TString>;
    agentId: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly TaskSuggestionsListResult: import("typebox").TObject<{
    suggestions: import("typebox").TArray<import("typebox").TObject<{
      id: import("typebox").TString;
      title: import("typebox").TString;
      prompt: import("typebox").TString;
      tldr: import("typebox").TString;
      cwd: import("typebox").TString;
      sessionKey: import("typebox").TString;
      agentId: import("typebox").TOptional<import("typebox").TString>;
      createdAt: import("typebox").TInteger;
    }>>;
  }>;
  readonly TaskSummary: import("typebox").TObject<{
    id: import("typebox").TString;
    kind: import("typebox").TOptional<import("typebox").TString>;
    runtime: import("typebox").TOptional<import("typebox").TString>;
    status: import("typebox").TUnion<[import("typebox").TLiteral<"queued">, import("typebox").TLiteral<"running">, import("typebox").TLiteral<"completed">, import("typebox").TLiteral<"failed">, import("typebox").TLiteral<"cancelled">, import("typebox").TLiteral<"timed_out">]>;
    title: import("typebox").TOptional<import("typebox").TString>;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    sessionKey: import("typebox").TOptional<import("typebox").TString>;
    childSessionKey: import("typebox").TOptional<import("typebox").TString>;
    ownerKey: import("typebox").TOptional<import("typebox").TString>;
    runId: import("typebox").TOptional<import("typebox").TString>;
    taskId: import("typebox").TOptional<import("typebox").TString>;
    flowId: import("typebox").TOptional<import("typebox").TString>;
    parentTaskId: import("typebox").TOptional<import("typebox").TString>;
    sourceId: import("typebox").TOptional<import("typebox").TString>;
    createdAt: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TInteger]>>;
    updatedAt: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TInteger]>>;
    startedAt: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TInteger]>>;
    endedAt: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TInteger]>>;
    toolUseCount: import("typebox").TOptional<import("typebox").TInteger>;
    lastToolName: import("typebox").TOptional<import("typebox").TString>;
    progressSummary: import("typebox").TOptional<import("typebox").TString>;
    terminalSummary: import("typebox").TOptional<import("typebox").TString>;
    error: import("typebox").TOptional<import("typebox").TString>;
    prompt: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly TasksListParams: import("typebox").TObject<{
    status: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TUnion<[import("typebox").TLiteral<"queued">, import("typebox").TLiteral<"running">, import("typebox").TLiteral<"completed">, import("typebox").TLiteral<"failed">, import("typebox").TLiteral<"cancelled">, import("typebox").TLiteral<"timed_out">]>, import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"queued">, import("typebox").TLiteral<"running">, import("typebox").TLiteral<"completed">, import("typebox").TLiteral<"failed">, import("typebox").TLiteral<"cancelled">, import("typebox").TLiteral<"timed_out">]>>]>>;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    sessionKey: import("typebox").TOptional<import("typebox").TString>;
    limit: import("typebox").TOptional<import("typebox").TInteger>;
    cursor: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly TasksListResult: import("typebox").TObject<{
    tasks: import("typebox").TArray<import("typebox").TObject<{
      id: import("typebox").TString;
      kind: import("typebox").TOptional<import("typebox").TString>;
      runtime: import("typebox").TOptional<import("typebox").TString>;
      status: import("typebox").TUnion<[import("typebox").TLiteral<"queued">, import("typebox").TLiteral<"running">, import("typebox").TLiteral<"completed">, import("typebox").TLiteral<"failed">, import("typebox").TLiteral<"cancelled">, import("typebox").TLiteral<"timed_out">]>;
      title: import("typebox").TOptional<import("typebox").TString>;
      agentId: import("typebox").TOptional<import("typebox").TString>;
      sessionKey: import("typebox").TOptional<import("typebox").TString>;
      childSessionKey: import("typebox").TOptional<import("typebox").TString>;
      ownerKey: import("typebox").TOptional<import("typebox").TString>;
      runId: import("typebox").TOptional<import("typebox").TString>;
      taskId: import("typebox").TOptional<import("typebox").TString>;
      flowId: import("typebox").TOptional<import("typebox").TString>;
      parentTaskId: import("typebox").TOptional<import("typebox").TString>;
      sourceId: import("typebox").TOptional<import("typebox").TString>;
      createdAt: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TInteger]>>;
      updatedAt: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TInteger]>>;
      startedAt: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TInteger]>>;
      endedAt: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TInteger]>>;
      toolUseCount: import("typebox").TOptional<import("typebox").TInteger>;
      lastToolName: import("typebox").TOptional<import("typebox").TString>;
      progressSummary: import("typebox").TOptional<import("typebox").TString>;
      terminalSummary: import("typebox").TOptional<import("typebox").TString>;
      error: import("typebox").TOptional<import("typebox").TString>;
      prompt: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    nextCursor: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly TasksGetParams: import("typebox").TObject<{
    taskId: import("typebox").TString;
  }>;
  readonly TasksGetResult: import("typebox").TObject<{
    task: import("typebox").TObject<{
      id: import("typebox").TString;
      kind: import("typebox").TOptional<import("typebox").TString>;
      runtime: import("typebox").TOptional<import("typebox").TString>;
      status: import("typebox").TUnion<[import("typebox").TLiteral<"queued">, import("typebox").TLiteral<"running">, import("typebox").TLiteral<"completed">, import("typebox").TLiteral<"failed">, import("typebox").TLiteral<"cancelled">, import("typebox").TLiteral<"timed_out">]>;
      title: import("typebox").TOptional<import("typebox").TString>;
      agentId: import("typebox").TOptional<import("typebox").TString>;
      sessionKey: import("typebox").TOptional<import("typebox").TString>;
      childSessionKey: import("typebox").TOptional<import("typebox").TString>;
      ownerKey: import("typebox").TOptional<import("typebox").TString>;
      runId: import("typebox").TOptional<import("typebox").TString>;
      taskId: import("typebox").TOptional<import("typebox").TString>;
      flowId: import("typebox").TOptional<import("typebox").TString>;
      parentTaskId: import("typebox").TOptional<import("typebox").TString>;
      sourceId: import("typebox").TOptional<import("typebox").TString>;
      createdAt: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TInteger]>>;
      updatedAt: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TInteger]>>;
      startedAt: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TInteger]>>;
      endedAt: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TInteger]>>;
      toolUseCount: import("typebox").TOptional<import("typebox").TInteger>;
      lastToolName: import("typebox").TOptional<import("typebox").TString>;
      progressSummary: import("typebox").TOptional<import("typebox").TString>;
      terminalSummary: import("typebox").TOptional<import("typebox").TString>;
      error: import("typebox").TOptional<import("typebox").TString>;
      prompt: import("typebox").TOptional<import("typebox").TString>;
    }>;
  }>;
  readonly TasksCancelParams: import("typebox").TObject<{
    taskId: import("typebox").TString;
    reason: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly TasksCancelResult: import("typebox").TObject<{
    found: import("typebox").TBoolean;
    cancelled: import("typebox").TBoolean;
    reason: import("typebox").TOptional<import("typebox").TString>;
    task: import("typebox").TOptional<import("typebox").TObject<{
      id: import("typebox").TString;
      kind: import("typebox").TOptional<import("typebox").TString>;
      runtime: import("typebox").TOptional<import("typebox").TString>;
      status: import("typebox").TUnion<[import("typebox").TLiteral<"queued">, import("typebox").TLiteral<"running">, import("typebox").TLiteral<"completed">, import("typebox").TLiteral<"failed">, import("typebox").TLiteral<"cancelled">, import("typebox").TLiteral<"timed_out">]>;
      title: import("typebox").TOptional<import("typebox").TString>;
      agentId: import("typebox").TOptional<import("typebox").TString>;
      sessionKey: import("typebox").TOptional<import("typebox").TString>;
      childSessionKey: import("typebox").TOptional<import("typebox").TString>;
      ownerKey: import("typebox").TOptional<import("typebox").TString>;
      runId: import("typebox").TOptional<import("typebox").TString>;
      taskId: import("typebox").TOptional<import("typebox").TString>;
      flowId: import("typebox").TOptional<import("typebox").TString>;
      parentTaskId: import("typebox").TOptional<import("typebox").TString>;
      sourceId: import("typebox").TOptional<import("typebox").TString>;
      createdAt: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TInteger]>>;
      updatedAt: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TInteger]>>;
      startedAt: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TInteger]>>;
      endedAt: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TInteger]>>;
      toolUseCount: import("typebox").TOptional<import("typebox").TInteger>;
      lastToolName: import("typebox").TOptional<import("typebox").TString>;
      progressSummary: import("typebox").TOptional<import("typebox").TString>;
      terminalSummary: import("typebox").TOptional<import("typebox").TString>;
      error: import("typebox").TOptional<import("typebox").TString>;
      prompt: import("typebox").TOptional<import("typebox").TString>;
    }>>;
  }>;
  readonly ConfigGetParams: import("typebox").TObject<{}>;
  readonly ConfigSetParams: import("typebox").TObject<{
    raw: import("typebox").TString;
    baseHash: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly ConfigApplyParams: import("typebox").TObject<{
    readonly raw: import("typebox").TString;
    readonly baseHash: import("typebox").TOptional<import("typebox").TString>;
    readonly sessionKey: import("typebox").TOptional<import("typebox").TString>;
    readonly deliveryContext: import("typebox").TOptional<import("typebox").TObject<{
      channel: import("typebox").TOptional<import("typebox").TString>;
      to: import("typebox").TOptional<import("typebox").TString>;
      accountId: import("typebox").TOptional<import("typebox").TString>;
      threadId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNumber]>>;
    }>>;
    readonly note: import("typebox").TOptional<import("typebox").TString>;
    readonly restartDelayMs: import("typebox").TOptional<import("typebox").TInteger>;
  }>;
  readonly ConfigPatchParams: import("typebox").TObject<{
    replacePaths: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    raw: import("typebox").TString;
    baseHash: import("typebox").TOptional<import("typebox").TString>;
    sessionKey: import("typebox").TOptional<import("typebox").TString>;
    deliveryContext: import("typebox").TOptional<import("typebox").TObject<{
      channel: import("typebox").TOptional<import("typebox").TString>;
      to: import("typebox").TOptional<import("typebox").TString>;
      accountId: import("typebox").TOptional<import("typebox").TString>;
      threadId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNumber]>>;
    }>>;
    note: import("typebox").TOptional<import("typebox").TString>;
    restartDelayMs: import("typebox").TOptional<import("typebox").TInteger>;
  }>;
  readonly ConfigSchemaParams: import("typebox").TObject<{}>;
  readonly ConfigSchemaLookupParams: import("typebox").TObject<{
    path: import("typebox").TString;
  }>;
  readonly ConfigSchemaResponse: import("typebox").TObject<{
    schema: import("typebox").TUnknown;
    uiHints: import("typebox").TRecord<"^.*$", import("typebox").TObject<{
      label: import("typebox").TOptional<import("typebox").TString>;
      help: import("typebox").TOptional<import("typebox").TString>;
      docsUrl: import("typebox").TOptional<import("typebox").TString>;
      tags: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
      group: import("typebox").TOptional<import("typebox").TString>;
      order: import("typebox").TOptional<import("typebox").TInteger>;
      advanced: import("typebox").TOptional<import("typebox").TBoolean>;
      sensitive: import("typebox").TOptional<import("typebox").TBoolean>;
      placeholder: import("typebox").TOptional<import("typebox").TString>;
      presentation: import("typebox").TOptional<import("typebox").TLiteral<"phone-number">>;
      itemTemplate: import("typebox").TOptional<import("typebox").TUnknown>;
    }>>;
    version: import("typebox").TString;
    generatedAt: import("typebox").TString;
  }>;
  readonly ConfigSchemaLookupResult: import("typebox").TObject<{
    path: import("typebox").TString;
    schema: import("typebox").TUnknown;
    reloadKind: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"restart">, import("typebox").TLiteral<"hot">, import("typebox").TLiteral<"none">]>>;
    hint: import("typebox").TOptional<import("typebox").TObject<{
      label: import("typebox").TOptional<import("typebox").TString>;
      help: import("typebox").TOptional<import("typebox").TString>;
      docsUrl: import("typebox").TOptional<import("typebox").TString>;
      tags: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
      group: import("typebox").TOptional<import("typebox").TString>;
      order: import("typebox").TOptional<import("typebox").TInteger>;
      advanced: import("typebox").TOptional<import("typebox").TBoolean>;
      sensitive: import("typebox").TOptional<import("typebox").TBoolean>;
      placeholder: import("typebox").TOptional<import("typebox").TString>;
      presentation: import("typebox").TOptional<import("typebox").TLiteral<"phone-number">>;
      itemTemplate: import("typebox").TOptional<import("typebox").TUnknown>;
    }>>;
    hintPath: import("typebox").TOptional<import("typebox").TString>;
    children: import("typebox").TArray<import("typebox").TObject<{
      key: import("typebox").TString;
      path: import("typebox").TString;
      type: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TArray<import("typebox").TString>]>>;
      required: import("typebox").TBoolean;
      hasChildren: import("typebox").TBoolean;
      reloadKind: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"restart">, import("typebox").TLiteral<"hot">, import("typebox").TLiteral<"none">]>>;
      hint: import("typebox").TOptional<import("typebox").TObject<{
        label: import("typebox").TOptional<import("typebox").TString>;
        help: import("typebox").TOptional<import("typebox").TString>;
        docsUrl: import("typebox").TOptional<import("typebox").TString>;
        tags: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
        group: import("typebox").TOptional<import("typebox").TString>;
        order: import("typebox").TOptional<import("typebox").TInteger>;
        advanced: import("typebox").TOptional<import("typebox").TBoolean>;
        sensitive: import("typebox").TOptional<import("typebox").TBoolean>;
        placeholder: import("typebox").TOptional<import("typebox").TString>;
        presentation: import("typebox").TOptional<import("typebox").TLiteral<"phone-number">>;
        itemTemplate: import("typebox").TOptional<import("typebox").TUnknown>;
      }>>;
      hintPath: import("typebox").TOptional<import("typebox").TString>;
    }>>;
  }>;
  readonly SystemAgentChatParams: import("typebox").TObject<{
    sessionId: import("typebox").TString;
    message: import("typebox").TOptional<import("typebox").TString>;
    welcomeVariant: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"onboarding">, import("typebox").TLiteral<"new-agent">]>>;
    reset: import("typebox").TOptional<import("typebox").TBoolean>;
    context: import("typebox").TOptional<import("typebox").TObject<{
      page: import("typebox").TString;
    }>>;
    delegation: import("typebox").TOptional<import("typebox").TObject<{
      agentId: import("typebox").TOptional<import("typebox").TString>;
      sessionKey: import("typebox").TOptional<import("typebox").TString>;
      turnSourceChannel: import("typebox").TOptional<import("typebox").TString>;
      turnSourceTo: import("typebox").TOptional<import("typebox").TString>;
      turnSourceAccountId: import("typebox").TOptional<import("typebox").TString>;
      turnSourceThreadId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNumber]>>;
    }>>;
  }>;
  readonly SystemAgentChatResult: import("typebox").TObject<{
    sessionId: import("typebox").TString;
    reply: import("typebox").TString;
    sensitive: import("typebox").TOptional<import("typebox").TBoolean>;
    wizardInputPending: import("typebox").TOptional<import("typebox").TBoolean>;
    action: import("typebox").TUnion<[import("typebox").TLiteral<"none">, import("typebox").TLiteral<"open-agent">, import("typebox").TLiteral<"exit">]>;
    agentDraft: import("typebox").TOptional<import("typebox").TLiteral<"hatch">>;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    needsApproval: import("typebox").TOptional<import("typebox").TBoolean>;
    proposalId: import("typebox").TOptional<import("typebox").TString>;
    question: import("typebox").TOptional<import("typebox").TObject<{
      id: import("typebox").TString;
      header: import("typebox").TString;
      question: import("typebox").TString;
      options: import("typebox").TArray<import("typebox").TObject<{
        label: import("typebox").TString;
        description: import("typebox").TOptional<import("typebox").TString>;
        recommended: import("typebox").TOptional<import("typebox").TBoolean>;
        reply: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      isOther: import("typebox").TOptional<import("typebox").TBoolean>;
      skipAction: import("typebox").TOptional<import("typebox").TLiteral<"exit">>;
    }>>;
  }>;
  readonly SystemAgentChatHistoryParams: import("typebox").TObject<{
    limit: import("typebox").TOptional<import("typebox").TInteger>;
  }>;
  readonly SystemAgentChatHistoryTurn: import("typebox").TObject<{
    role: import("typebox").TUnion<[import("typebox").TLiteral<"user">, import("typebox").TLiteral<"assistant">]>;
    text: import("typebox").TString;
    at: import("typebox").TNumber;
  }>;
  readonly SystemAgentChatHistoryResult: import("typebox").TObject<{
    turns: import("typebox").TArray<import("typebox").TObject<{
      role: import("typebox").TUnion<[import("typebox").TLiteral<"user">, import("typebox").TLiteral<"assistant">]>;
      text: import("typebox").TString;
      at: import("typebox").TNumber;
    }>>;
  }>;
  readonly SystemChangeEntry: import("typebox").TObject<{
    id: import("typebox").TString;
    at: import("typebox").TNumber;
    kind: import("typebox").TUnion<[import("typebox").TLiteral<"operation">, import("typebox").TLiteral<"config-write">, import("typebox").TLiteral<"external-edit">]>;
    source: import("typebox").TUnion<[import("typebox").TLiteral<"system-agent">, import("typebox").TLiteral<"doctor">, import("typebox").TLiteral<"config-rpc">, import("typebox").TLiteral<"cli">, import("typebox").TLiteral<"plugin-install">, import("typebox").TLiteral<"external">, import("typebox").TLiteral<"unknown">]>;
    summary: import("typebox").TString;
    changedPaths: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    invalid: import("typebox").TOptional<import("typebox").TBoolean>;
    opaqueChange: import("typebox").TOptional<import("typebox").TBoolean>;
  }>;
  readonly SystemChangeKind: import("typebox").TUnion<[import("typebox").TLiteral<"operation">, import("typebox").TLiteral<"config-write">, import("typebox").TLiteral<"external-edit">]>;
  readonly SystemChangeSource: import("typebox").TUnion<[import("typebox").TLiteral<"system-agent">, import("typebox").TLiteral<"doctor">, import("typebox").TLiteral<"config-rpc">, import("typebox").TLiteral<"cli">, import("typebox").TLiteral<"plugin-install">, import("typebox").TLiteral<"external">, import("typebox").TLiteral<"unknown">]>;
  readonly SystemChangesListParams: import("typebox").TObject<{
    limit: import("typebox").TOptional<import("typebox").TInteger>;
    beforeCursor: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly SystemChangesListResult: import("typebox").TObject<{
    entries: import("typebox").TArray<import("typebox").TObject<{
      id: import("typebox").TString;
      at: import("typebox").TNumber;
      kind: import("typebox").TUnion<[import("typebox").TLiteral<"operation">, import("typebox").TLiteral<"config-write">, import("typebox").TLiteral<"external-edit">]>;
      source: import("typebox").TUnion<[import("typebox").TLiteral<"system-agent">, import("typebox").TLiteral<"doctor">, import("typebox").TLiteral<"config-rpc">, import("typebox").TLiteral<"cli">, import("typebox").TLiteral<"plugin-install">, import("typebox").TLiteral<"external">, import("typebox").TLiteral<"unknown">]>;
      summary: import("typebox").TString;
      changedPaths: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
      invalid: import("typebox").TOptional<import("typebox").TBoolean>;
      opaqueChange: import("typebox").TOptional<import("typebox").TBoolean>;
    }>>;
    nextCursor: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly SystemAgentSetupDetectParams: import("typebox").TObject<{}>;
  readonly SystemAgentSetupDetectResult: import("typebox").TObject<{
    candidates: import("typebox").TArray<import("typebox").TObject<{
      kind: import("typebox").TUnion<[import("typebox").TLiteral<"existing-model">, import("typebox").TLiteral<"openai-api-key">, import("typebox").TLiteral<"anthropic-api-key">, import("typebox").TLiteral<"claude-cli">, import("typebox").TLiteral<"codex-cli">, import("typebox").TLiteral<"gemini-cli">, import("typebox").TTemplateLiteral<"^provider-auto:.*$">]>;
      brandId: import("typebox").TOptional<import("typebox").TString>;
      label: import("typebox").TString;
      detail: import("typebox").TString;
      modelRef: import("typebox").TString;
      recommended: import("typebox").TBoolean;
      credentials: import("typebox").TOptional<import("typebox").TBoolean>;
      icon: import("typebox").TOptional<import("typebox").TString>;
      website: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    unavailableCandidates: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
      id: import("typebox").TString;
      brandId: import("typebox").TOptional<import("typebox").TString>;
      label: import("typebox").TString;
      detail: import("typebox").TString;
      reason: import("typebox").TString;
      authOptionId: import("typebox").TOptional<import("typebox").TString>;
      manualProviderId: import("typebox").TOptional<import("typebox").TString>;
      icon: import("typebox").TOptional<import("typebox").TString>;
      website: import("typebox").TOptional<import("typebox").TString>;
    }>>>;
    manualProviders: import("typebox").TArray<import("typebox").TObject<{
      id: import("typebox").TString;
      brandId: import("typebox").TOptional<import("typebox").TString>;
      groupLabel: import("typebox").TOptional<import("typebox").TString>;
      label: import("typebox").TString;
      hint: import("typebox").TOptional<import("typebox").TString>;
      icon: import("typebox").TOptional<import("typebox").TString>;
      website: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    authOptions: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
      id: import("typebox").TString;
      brandId: import("typebox").TOptional<import("typebox").TString>;
      label: import("typebox").TString;
      hint: import("typebox").TOptional<import("typebox").TString>;
      groupLabel: import("typebox").TOptional<import("typebox").TString>;
      icon: import("typebox").TOptional<import("typebox").TString>;
      website: import("typebox").TOptional<import("typebox").TString>;
      kind: import("typebox").TUnion<[import("typebox").TLiteral<"oauth">, import("typebox").TLiteral<"device-code">]>;
      featured: import("typebox").TBoolean;
    }>>>;
    recommendedInstalls: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
      id: import("typebox").TString;
      brandId: import("typebox").TOptional<import("typebox").TString>;
      label: import("typebox").TString;
      hint: import("typebox").TString;
      website: import("typebox").TString;
      icon: import("typebox").TString;
    }>>>;
    workspace: import("typebox").TString;
    codexAppServerDetected: import("typebox").TOptional<import("typebox").TBoolean>;
    configuredModel: import("typebox").TOptional<import("typebox").TString>;
    setupComplete: import("typebox").TBoolean;
  }>;
  readonly SystemAgentSetupVerifyParams: import("typebox").TObject<{}>;
  readonly SystemAgentSetupVerifyResult: import("typebox").TUnion<[import("typebox").TObject<{
    ok: import("typebox").TLiteral<true>;
    modelRef: import("typebox").TString;
    latencyMs: import("typebox").TNumber;
  }>, import("typebox").TObject<{
    ok: import("typebox").TLiteral<false>;
    status: import("typebox").TUnion<[import("typebox").TLiteral<"auth">, import("typebox").TLiteral<"rate_limit">, import("typebox").TLiteral<"billing">, import("typebox").TLiteral<"timeout">, import("typebox").TLiteral<"format">, import("typebox").TLiteral<"unavailable">, import("typebox").TLiteral<"unknown">]>;
    error: import("typebox").TString;
  }>]>;
  readonly SystemAgentSetupActivateParams: import("typebox").TObject<{
    kind: import("typebox").TUnion<[import("typebox").TLiteral<"existing-model">, import("typebox").TLiteral<"openai-api-key">, import("typebox").TLiteral<"anthropic-api-key">, import("typebox").TLiteral<"claude-cli">, import("typebox").TLiteral<"codex-cli">, import("typebox").TLiteral<"gemini-cli">, import("typebox").TTemplateLiteral<"^provider-auto:.*$">, import("typebox").TLiteral<"api-key">]>;
    modelRef: import("typebox").TOptional<import("typebox").TString>;
    authChoice: import("typebox").TOptional<import("typebox").TString>;
    apiKey: import("typebox").TOptional<import("typebox").TString>;
    workspace: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly SystemAgentSetupActivateResult: import("typebox").TObject<{
    ok: import("typebox").TBoolean;
    modelRef: import("typebox").TOptional<import("typebox").TString>;
    latencyMs: import("typebox").TOptional<import("typebox").TNumber>;
    lines: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    status: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"ok">, import("typebox").TLiteral<"auth">, import("typebox").TLiteral<"rate_limit">, import("typebox").TLiteral<"billing">, import("typebox").TLiteral<"timeout">, import("typebox").TLiteral<"format">, import("typebox").TLiteral<"unavailable">, import("typebox").TLiteral<"unknown">]>>;
    error: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly SystemAgentSetupAuthStartParams: import("typebox").TObject<{
    sessionId: import("typebox").TString;
    authChoice: import("typebox").TString;
    workspace: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly SystemAgentSetupAuthStartResult: import("typebox").TObject<{
    done: import("typebox").TBoolean;
    step: import("typebox").TOptional<import("typebox").TObject<{
      id: import("typebox").TString;
      type: import("typebox").TUnion<[import("typebox").TLiteral<"note">, import("typebox").TLiteral<"select">, import("typebox").TLiteral<"text">, import("typebox").TLiteral<"confirm">, import("typebox").TLiteral<"multiselect">, import("typebox").TLiteral<"progress">, import("typebox").TLiteral<"action">]>;
      title: import("typebox").TOptional<import("typebox").TString>;
      message: import("typebox").TOptional<import("typebox").TString>;
      format: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"plain">]>>;
      options: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
        value: import("typebox").TUnknown;
        label: import("typebox").TString;
        hint: import("typebox").TOptional<import("typebox").TString>;
      }>>>;
      initialValue: import("typebox").TOptional<import("typebox").TUnknown>;
      placeholder: import("typebox").TOptional<import("typebox").TString>;
      sensitive: import("typebox").TOptional<import("typebox").TBoolean>;
      executor: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"gateway">, import("typebox").TLiteral<"client">]>>;
      externalUrl: import("typebox").TOptional<import("typebox").TString>;
      deviceCode: import("typebox").TOptional<import("typebox").TObject<{
        code: import("typebox").TString;
        expiresInMinutes: import("typebox").TOptional<import("typebox").TInteger>;
        message: import("typebox").TOptional<import("typebox").TString>;
      }>>;
    }>>;
    status: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"running">, import("typebox").TLiteral<"done">, import("typebox").TLiteral<"cancelled">, import("typebox").TLiteral<"error">]>>;
    error: import("typebox").TOptional<import("typebox").TString>;
    channels: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    accounts: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
      channel: import("typebox").TString;
      accountId: import("typebox").TString;
    }>>>;
    sessionId: import("typebox").TString;
  }>;
  readonly WizardStartParams: import("typebox").TObject<{
    mode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"local">, import("typebox").TLiteral<"remote">]>>;
    workspace: import("typebox").TOptional<import("typebox").TString>;
    installDaemon: import("typebox").TOptional<import("typebox").TBoolean>;
    flow: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"setup">, import("typebox").TLiteral<"channels">]>>;
    channel: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly WizardNextParams: import("typebox").TObject<{
    sessionId: import("typebox").TString;
    answer: import("typebox").TOptional<import("typebox").TObject<{
      stepId: import("typebox").TString;
      value: import("typebox").TOptional<import("typebox").TUnknown>;
    }>>;
  }>;
  readonly WizardCancelParams: import("typebox").TObject<{
    sessionId: import("typebox").TString;
  }>;
  readonly WizardStatusParams: import("typebox").TObject<{
    sessionId: import("typebox").TString;
  }>;
  readonly WizardStep: import("typebox").TObject<{
    id: import("typebox").TString;
    type: import("typebox").TUnion<[import("typebox").TLiteral<"note">, import("typebox").TLiteral<"select">, import("typebox").TLiteral<"text">, import("typebox").TLiteral<"confirm">, import("typebox").TLiteral<"multiselect">, import("typebox").TLiteral<"progress">, import("typebox").TLiteral<"action">]>;
    title: import("typebox").TOptional<import("typebox").TString>;
    message: import("typebox").TOptional<import("typebox").TString>;
    format: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"plain">]>>;
    options: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
      value: import("typebox").TUnknown;
      label: import("typebox").TString;
      hint: import("typebox").TOptional<import("typebox").TString>;
    }>>>;
    initialValue: import("typebox").TOptional<import("typebox").TUnknown>;
    placeholder: import("typebox").TOptional<import("typebox").TString>;
    sensitive: import("typebox").TOptional<import("typebox").TBoolean>;
    executor: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"gateway">, import("typebox").TLiteral<"client">]>>;
    externalUrl: import("typebox").TOptional<import("typebox").TString>;
    deviceCode: import("typebox").TOptional<import("typebox").TObject<{
      code: import("typebox").TString;
      expiresInMinutes: import("typebox").TOptional<import("typebox").TInteger>;
      message: import("typebox").TOptional<import("typebox").TString>;
    }>>;
  }>;
  readonly WizardNextResult: import("typebox").TObject<{
    done: import("typebox").TBoolean;
    step: import("typebox").TOptional<import("typebox").TObject<{
      id: import("typebox").TString;
      type: import("typebox").TUnion<[import("typebox").TLiteral<"note">, import("typebox").TLiteral<"select">, import("typebox").TLiteral<"text">, import("typebox").TLiteral<"confirm">, import("typebox").TLiteral<"multiselect">, import("typebox").TLiteral<"progress">, import("typebox").TLiteral<"action">]>;
      title: import("typebox").TOptional<import("typebox").TString>;
      message: import("typebox").TOptional<import("typebox").TString>;
      format: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"plain">]>>;
      options: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
        value: import("typebox").TUnknown;
        label: import("typebox").TString;
        hint: import("typebox").TOptional<import("typebox").TString>;
      }>>>;
      initialValue: import("typebox").TOptional<import("typebox").TUnknown>;
      placeholder: import("typebox").TOptional<import("typebox").TString>;
      sensitive: import("typebox").TOptional<import("typebox").TBoolean>;
      executor: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"gateway">, import("typebox").TLiteral<"client">]>>;
      externalUrl: import("typebox").TOptional<import("typebox").TString>;
      deviceCode: import("typebox").TOptional<import("typebox").TObject<{
        code: import("typebox").TString;
        expiresInMinutes: import("typebox").TOptional<import("typebox").TInteger>;
        message: import("typebox").TOptional<import("typebox").TString>;
      }>>;
    }>>;
    status: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"running">, import("typebox").TLiteral<"done">, import("typebox").TLiteral<"cancelled">, import("typebox").TLiteral<"error">]>>;
    error: import("typebox").TOptional<import("typebox").TString>;
    channels: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    accounts: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
      channel: import("typebox").TString;
      accountId: import("typebox").TString;
    }>>>;
  }>;
  readonly WizardStartResult: import("typebox").TObject<{
    done: import("typebox").TBoolean;
    step: import("typebox").TOptional<import("typebox").TObject<{
      id: import("typebox").TString;
      type: import("typebox").TUnion<[import("typebox").TLiteral<"note">, import("typebox").TLiteral<"select">, import("typebox").TLiteral<"text">, import("typebox").TLiteral<"confirm">, import("typebox").TLiteral<"multiselect">, import("typebox").TLiteral<"progress">, import("typebox").TLiteral<"action">]>;
      title: import("typebox").TOptional<import("typebox").TString>;
      message: import("typebox").TOptional<import("typebox").TString>;
      format: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"plain">]>>;
      options: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
        value: import("typebox").TUnknown;
        label: import("typebox").TString;
        hint: import("typebox").TOptional<import("typebox").TString>;
      }>>>;
      initialValue: import("typebox").TOptional<import("typebox").TUnknown>;
      placeholder: import("typebox").TOptional<import("typebox").TString>;
      sensitive: import("typebox").TOptional<import("typebox").TBoolean>;
      executor: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"gateway">, import("typebox").TLiteral<"client">]>>;
      externalUrl: import("typebox").TOptional<import("typebox").TString>;
      deviceCode: import("typebox").TOptional<import("typebox").TObject<{
        code: import("typebox").TString;
        expiresInMinutes: import("typebox").TOptional<import("typebox").TInteger>;
        message: import("typebox").TOptional<import("typebox").TString>;
      }>>;
    }>>;
    status: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"running">, import("typebox").TLiteral<"done">, import("typebox").TLiteral<"cancelled">, import("typebox").TLiteral<"error">]>>;
    error: import("typebox").TOptional<import("typebox").TString>;
    channels: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    accounts: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
      channel: import("typebox").TString;
      accountId: import("typebox").TString;
    }>>>;
    sessionId: import("typebox").TString;
  }>;
  readonly WizardStatusResult: import("typebox").TObject<{
    status: import("typebox").TUnion<[import("typebox").TLiteral<"running">, import("typebox").TLiteral<"done">, import("typebox").TLiteral<"cancelled">, import("typebox").TLiteral<"error">]>;
    error: import("typebox").TOptional<import("typebox").TString>;
  }>;
} & {
  readonly TalkModeParams: import("typebox").TObject<{
    enabled: import("typebox").TBoolean;
    phase: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly TalkEvent: import("typebox").TObject<{
    id: import("typebox").TString;
    type: import("typebox").TUnion<[import("typebox").TLiteral<"session.started">, import("typebox").TLiteral<"session.ready">, import("typebox").TLiteral<"session.closed">, import("typebox").TLiteral<"session.error">, import("typebox").TLiteral<"session.replaced">, import("typebox").TLiteral<"turn.started">, import("typebox").TLiteral<"turn.ended">, import("typebox").TLiteral<"turn.cancelled">, import("typebox").TLiteral<"capture.started">, import("typebox").TLiteral<"capture.stopped">, import("typebox").TLiteral<"capture.cancelled">, import("typebox").TLiteral<"capture.once">, import("typebox").TLiteral<"input.audio.delta">, import("typebox").TLiteral<"input.audio.committed">, import("typebox").TLiteral<"transcript.delta">, import("typebox").TLiteral<"transcript.done">, import("typebox").TLiteral<"output.text.delta">, import("typebox").TLiteral<"output.text.done">, import("typebox").TLiteral<"output.audio.started">, import("typebox").TLiteral<"output.audio.delta">, import("typebox").TLiteral<"output.audio.done">, import("typebox").TLiteral<"tool.call">, import("typebox").TLiteral<"tool.progress">, import("typebox").TLiteral<"tool.result">, import("typebox").TLiteral<"tool.error">, import("typebox").TLiteral<"usage.metrics">, import("typebox").TLiteral<"latency.metrics">, import("typebox").TLiteral<"health.changed">]>;
    sessionId: import("typebox").TString;
    turnId: import("typebox").TOptional<import("typebox").TString>;
    captureId: import("typebox").TOptional<import("typebox").TString>;
    seq: import("typebox").TInteger;
    timestamp: import("typebox").TString;
    mode: import("typebox").TUnion<[import("typebox").TLiteral<"realtime">, import("typebox").TLiteral<"stt-tts">, import("typebox").TLiteral<"transcription">]>;
    transport: import("typebox").TUnion<[import("typebox").TLiteral<"webrtc">, import("typebox").TLiteral<"provider-websocket">, import("typebox").TLiteral<"gateway-relay">, import("typebox").TLiteral<"managed-room">]>;
    brain: import("typebox").TUnion<[import("typebox").TLiteral<"agent-consult">, import("typebox").TLiteral<"direct-tools">, import("typebox").TLiteral<"none">]>;
    provider: import("typebox").TOptional<import("typebox").TString>;
    final: import("typebox").TOptional<import("typebox").TBoolean>;
    callId: import("typebox").TOptional<import("typebox").TString>;
    itemId: import("typebox").TOptional<import("typebox").TString>;
    parentId: import("typebox").TOptional<import("typebox").TString>;
    payload: import("typebox").TUnknown;
  }>;
  readonly TalkCatalogParams: import("typebox").TObject<{}>;
  readonly TalkCatalogResult: import("typebox").TObject<{
    modes: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"realtime">, import("typebox").TLiteral<"stt-tts">, import("typebox").TLiteral<"transcription">]>>;
    transports: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"webrtc">, import("typebox").TLiteral<"provider-websocket">, import("typebox").TLiteral<"gateway-relay">, import("typebox").TLiteral<"managed-room">]>>;
    brains: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"agent-consult">, import("typebox").TLiteral<"direct-tools">, import("typebox").TLiteral<"none">]>>;
    speech: import("typebox").TObject<{
      ready: import("typebox").TOptional<import("typebox").TBoolean>;
      activeProvider: import("typebox").TOptional<import("typebox").TString>;
      providers: import("typebox").TArray<import("typebox").TObject<{
        id: import("typebox").TString;
        label: import("typebox").TString;
        configured: import("typebox").TBoolean;
        aliases: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
        models: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
        voices: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
        defaultModel: import("typebox").TOptional<import("typebox").TString>;
        modes: import("typebox").TOptional<import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"realtime">, import("typebox").TLiteral<"stt-tts">, import("typebox").TLiteral<"transcription">]>>>;
        transports: import("typebox").TOptional<import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"webrtc">, import("typebox").TLiteral<"provider-websocket">, import("typebox").TLiteral<"gateway-relay">, import("typebox").TLiteral<"managed-room">]>>>;
        brains: import("typebox").TOptional<import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"agent-consult">, import("typebox").TLiteral<"direct-tools">, import("typebox").TLiteral<"none">]>>>;
        inputAudioFormats: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
          encoding: import("typebox").TUnion<[import("typebox").TLiteral<"pcm16">, import("typebox").TLiteral<"g711_ulaw">]>;
          sampleRateHz: import("typebox").TInteger;
          channels: import("typebox").TInteger;
        }>>>;
        outputAudioFormats: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
          encoding: import("typebox").TUnion<[import("typebox").TLiteral<"pcm16">, import("typebox").TLiteral<"g711_ulaw">]>;
          sampleRateHz: import("typebox").TInteger;
          channels: import("typebox").TInteger;
        }>>>;
        supportsBrowserSession: import("typebox").TOptional<import("typebox").TBoolean>;
        supportsBargeIn: import("typebox").TOptional<import("typebox").TBoolean>;
        supportsToolCalls: import("typebox").TOptional<import("typebox").TBoolean>;
        supportsVideoFrames: import("typebox").TOptional<import("typebox").TBoolean>;
        supportsSessionResumption: import("typebox").TOptional<import("typebox").TBoolean>;
      }>>;
    }>;
    transcription: import("typebox").TObject<{
      ready: import("typebox").TOptional<import("typebox").TBoolean>;
      activeProvider: import("typebox").TOptional<import("typebox").TString>;
      providers: import("typebox").TArray<import("typebox").TObject<{
        id: import("typebox").TString;
        label: import("typebox").TString;
        configured: import("typebox").TBoolean;
        aliases: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
        models: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
        voices: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
        defaultModel: import("typebox").TOptional<import("typebox").TString>;
        modes: import("typebox").TOptional<import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"realtime">, import("typebox").TLiteral<"stt-tts">, import("typebox").TLiteral<"transcription">]>>>;
        transports: import("typebox").TOptional<import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"webrtc">, import("typebox").TLiteral<"provider-websocket">, import("typebox").TLiteral<"gateway-relay">, import("typebox").TLiteral<"managed-room">]>>>;
        brains: import("typebox").TOptional<import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"agent-consult">, import("typebox").TLiteral<"direct-tools">, import("typebox").TLiteral<"none">]>>>;
        inputAudioFormats: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
          encoding: import("typebox").TUnion<[import("typebox").TLiteral<"pcm16">, import("typebox").TLiteral<"g711_ulaw">]>;
          sampleRateHz: import("typebox").TInteger;
          channels: import("typebox").TInteger;
        }>>>;
        outputAudioFormats: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
          encoding: import("typebox").TUnion<[import("typebox").TLiteral<"pcm16">, import("typebox").TLiteral<"g711_ulaw">]>;
          sampleRateHz: import("typebox").TInteger;
          channels: import("typebox").TInteger;
        }>>>;
        supportsBrowserSession: import("typebox").TOptional<import("typebox").TBoolean>;
        supportsBargeIn: import("typebox").TOptional<import("typebox").TBoolean>;
        supportsToolCalls: import("typebox").TOptional<import("typebox").TBoolean>;
        supportsVideoFrames: import("typebox").TOptional<import("typebox").TBoolean>;
        supportsSessionResumption: import("typebox").TOptional<import("typebox").TBoolean>;
      }>>;
    }>;
    realtime: import("typebox").TObject<{
      ready: import("typebox").TOptional<import("typebox").TBoolean>;
      activeProvider: import("typebox").TOptional<import("typebox").TString>;
      providers: import("typebox").TArray<import("typebox").TObject<{
        id: import("typebox").TString;
        label: import("typebox").TString;
        configured: import("typebox").TBoolean;
        aliases: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
        models: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
        voices: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
        defaultModel: import("typebox").TOptional<import("typebox").TString>;
        modes: import("typebox").TOptional<import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"realtime">, import("typebox").TLiteral<"stt-tts">, import("typebox").TLiteral<"transcription">]>>>;
        transports: import("typebox").TOptional<import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"webrtc">, import("typebox").TLiteral<"provider-websocket">, import("typebox").TLiteral<"gateway-relay">, import("typebox").TLiteral<"managed-room">]>>>;
        brains: import("typebox").TOptional<import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"agent-consult">, import("typebox").TLiteral<"direct-tools">, import("typebox").TLiteral<"none">]>>>;
        inputAudioFormats: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
          encoding: import("typebox").TUnion<[import("typebox").TLiteral<"pcm16">, import("typebox").TLiteral<"g711_ulaw">]>;
          sampleRateHz: import("typebox").TInteger;
          channels: import("typebox").TInteger;
        }>>>;
        outputAudioFormats: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
          encoding: import("typebox").TUnion<[import("typebox").TLiteral<"pcm16">, import("typebox").TLiteral<"g711_ulaw">]>;
          sampleRateHz: import("typebox").TInteger;
          channels: import("typebox").TInteger;
        }>>>;
        supportsBrowserSession: import("typebox").TOptional<import("typebox").TBoolean>;
        supportsBargeIn: import("typebox").TOptional<import("typebox").TBoolean>;
        supportsToolCalls: import("typebox").TOptional<import("typebox").TBoolean>;
        supportsVideoFrames: import("typebox").TOptional<import("typebox").TBoolean>;
        supportsSessionResumption: import("typebox").TOptional<import("typebox").TBoolean>;
      }>>;
    }>;
  }>;
  readonly TalkClientCreateParams: import("typebox").TObject<{
    sessionKey: import("typebox").TOptional<import("typebox").TString>;
    voiceSessionId: import("typebox").TOptional<import("typebox").TString>;
    provider: import("typebox").TOptional<import("typebox").TString>;
    model: import("typebox").TOptional<import("typebox").TString>;
    voice: import("typebox").TOptional<import("typebox").TString>;
    vadThreshold: import("typebox").TOptional<import("typebox").TNumber>;
    silenceDurationMs: import("typebox").TOptional<import("typebox").TInteger>;
    prefixPaddingMs: import("typebox").TOptional<import("typebox").TInteger>;
    reasoningEffort: import("typebox").TOptional<import("typebox").TString>;
    mode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"realtime">, import("typebox").TLiteral<"stt-tts">, import("typebox").TLiteral<"transcription">]>>;
    transport: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"webrtc">, import("typebox").TLiteral<"provider-websocket">, import("typebox").TLiteral<"gateway-relay">, import("typebox").TLiteral<"managed-room">]>>;
    brain: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"agent-consult">, import("typebox").TLiteral<"direct-tools">, import("typebox").TLiteral<"none">]>>;
    capabilities: import("typebox").TOptional<import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"camera-frame">, import("typebox").TLiteral<"voice-transcript">]>>>;
  }>;
  readonly TalkClientCreateResult: import("typebox").TUnion<[import("typebox").TObject<{
    provider: import("typebox").TString;
    transport: import("typebox").TLiteral<"webrtc">;
    voiceSessionId: import("typebox").TString;
    clientSecret: import("typebox").TString;
    offerUrl: import("typebox").TOptional<import("typebox").TString>;
    offerHeaders: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TString>>;
    model: import("typebox").TOptional<import("typebox").TString>;
    voice: import("typebox").TOptional<import("typebox").TString>;
    expiresAt: import("typebox").TOptional<import("typebox").TNumber>;
  }>, import("typebox").TObject<{
    provider: import("typebox").TString;
    transport: import("typebox").TLiteral<"provider-websocket">;
    voiceSessionId: import("typebox").TString;
    protocol: import("typebox").TString;
    clientSecret: import("typebox").TString;
    websocketUrl: import("typebox").TString;
    audio: import("typebox").TObject<{
      inputEncoding: import("typebox").TUnion<[import("typebox").TLiteral<"pcm16">, import("typebox").TLiteral<"g711_ulaw">]>;
      inputSampleRateHz: import("typebox").TInteger;
      outputEncoding: import("typebox").TUnion<[import("typebox").TLiteral<"pcm16">, import("typebox").TLiteral<"g711_ulaw">]>;
      outputSampleRateHz: import("typebox").TInteger;
    }>;
    initialMessage: import("typebox").TOptional<import("typebox").TUnknown>;
    model: import("typebox").TOptional<import("typebox").TString>;
    voice: import("typebox").TOptional<import("typebox").TString>;
    expiresAt: import("typebox").TOptional<import("typebox").TNumber>;
  }>, import("typebox").TObject<{
    provider: import("typebox").TString;
    transport: import("typebox").TLiteral<"gateway-relay">;
    voiceSessionId: import("typebox").TOptional<import("typebox").TString>;
    relaySessionId: import("typebox").TString;
    audio: import("typebox").TObject<{
      inputEncoding: import("typebox").TUnion<[import("typebox").TLiteral<"pcm16">, import("typebox").TLiteral<"g711_ulaw">]>;
      inputSampleRateHz: import("typebox").TInteger;
      outputEncoding: import("typebox").TUnion<[import("typebox").TLiteral<"pcm16">, import("typebox").TLiteral<"g711_ulaw">]>;
      outputSampleRateHz: import("typebox").TInteger;
    }>;
    model: import("typebox").TOptional<import("typebox").TString>;
    voice: import("typebox").TOptional<import("typebox").TString>;
    expiresAt: import("typebox").TOptional<import("typebox").TNumber>;
  }>, import("typebox").TObject<{
    provider: import("typebox").TString;
    transport: import("typebox").TLiteral<"managed-room">;
    voiceSessionId: import("typebox").TOptional<import("typebox").TString>;
    roomUrl: import("typebox").TString;
    token: import("typebox").TOptional<import("typebox").TString>;
    model: import("typebox").TOptional<import("typebox").TString>;
    voice: import("typebox").TOptional<import("typebox").TString>;
    expiresAt: import("typebox").TOptional<import("typebox").TNumber>;
  }>]>;
  readonly TalkClientCloseParams: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
    voiceSessionId: import("typebox").TString;
  }>;
  readonly TalkClientMutationResult: import("typebox").TObject<{
    ok: import("typebox").TLiteral<true>;
  }>;
  readonly TalkClientSteerParams: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
    text: import("typebox").TString;
    mode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"status">, import("typebox").TLiteral<"steer">, import("typebox").TLiteral<"cancel">, import("typebox").TLiteral<"followup">]>>;
  }>;
  readonly TalkAgentControlResult: import("typebox").TObject<{
    ok: import("typebox").TBoolean;
    mode: import("typebox").TUnion<[import("typebox").TLiteral<"status">, import("typebox").TLiteral<"steer">, import("typebox").TLiteral<"cancel">, import("typebox").TLiteral<"followup">]>;
    sessionKey: import("typebox").TString;
    sessionId: import("typebox").TOptional<import("typebox").TString>;
    active: import("typebox").TBoolean;
    queued: import("typebox").TOptional<import("typebox").TBoolean>;
    aborted: import("typebox").TOptional<import("typebox").TBoolean>;
    target: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"embedded_run">, import("typebox").TLiteral<"reply_run">]>>;
    reason: import("typebox").TOptional<import("typebox").TString>;
    message: import("typebox").TString;
    speak: import("typebox").TBoolean;
    show: import("typebox").TBoolean;
    suppress: import("typebox").TBoolean;
    providerResult: import("typebox").TOptional<import("typebox").TObject<{
      status: import("typebox").TLiteral<"cancelled">;
      message: import("typebox").TString;
    }>>;
    enqueuedAtMs: import("typebox").TOptional<import("typebox").TNumber>;
    deliveredAtMs: import("typebox").TOptional<import("typebox").TNumber>;
  }>;
  readonly TalkClientToolCallParams: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
    voiceSessionId: import("typebox").TOptional<import("typebox").TString>;
    callId: import("typebox").TString;
    name: import("typebox").TString;
    args: import("typebox").TOptional<import("typebox").TUnknown>;
    relaySessionId: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly TalkClientToolCallResult: import("typebox").TObject<{
    runId: import("typebox").TString;
    idempotencyKey: import("typebox").TString;
  }>;
  readonly TalkClientTranscriptParams: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
    voiceSessionId: import("typebox").TString;
    entryId: import("typebox").TString;
    role: import("typebox").TUnion<[import("typebox").TLiteral<"user">, import("typebox").TLiteral<"assistant">]>;
    text: import("typebox").TString;
    timestamp: import("typebox").TOptional<import("typebox").TNumber>;
  }>;
  readonly TalkConfigParams: import("typebox").TObject<{
    includeSecrets: import("typebox").TOptional<import("typebox").TBoolean>;
  }>;
  readonly TalkConfigResult: import("typebox").TObject<{
    config: import("typebox").TObject<{
      talk: import("typebox").TOptional<import("typebox").TObject<{
        provider: import("typebox").TOptional<import("typebox").TString>;
        providers: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TObject<{
          apiKey: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TUnion<[import("typebox").TObject<{
            source: import("typebox").TLiteral<"env">;
            provider: import("typebox").TString;
            id: import("typebox").TString;
          }>, import("typebox").TObject<{
            source: import("typebox").TLiteral<"file">;
            provider: import("typebox").TString;
            id: import("typebox").TUnsafe<string>;
          }>, import("typebox").TObject<{
            source: import("typebox").TLiteral<"exec">;
            provider: import("typebox").TString;
            id: import("typebox").TString;
          }>]>]>>;
        }>>>;
        realtime: import("typebox").TOptional<import("typebox").TObject<{
          provider: import("typebox").TOptional<import("typebox").TString>;
          providers: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TObject<{
            apiKey: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TUnion<[import("typebox").TObject<{
              source: import("typebox").TLiteral<"env">;
              provider: import("typebox").TString;
              id: import("typebox").TString;
            }>, import("typebox").TObject<{
              source: import("typebox").TLiteral<"file">;
              provider: import("typebox").TString;
              id: import("typebox").TUnsafe<string>;
            }>, import("typebox").TObject<{
              source: import("typebox").TLiteral<"exec">;
              provider: import("typebox").TString;
              id: import("typebox").TString;
            }>]>]>>;
          }>>>;
          model: import("typebox").TOptional<import("typebox").TString>;
          speakerVoice: import("typebox").TOptional<import("typebox").TString>;
          speakerVoiceId: import("typebox").TOptional<import("typebox").TString>;
          voice: import("typebox").TOptional<import("typebox").TString>;
          instructions: import("typebox").TOptional<import("typebox").TString>;
          mode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"realtime">, import("typebox").TLiteral<"stt-tts">, import("typebox").TLiteral<"transcription">]>>;
          transport: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"webrtc">, import("typebox").TLiteral<"provider-websocket">, import("typebox").TLiteral<"gateway-relay">, import("typebox").TLiteral<"managed-room">]>>;
          vadThreshold: import("typebox").TOptional<import("typebox").TNumber>;
          silenceDurationMs: import("typebox").TOptional<import("typebox").TInteger>;
          prefixPaddingMs: import("typebox").TOptional<import("typebox").TInteger>;
          reasoningEffort: import("typebox").TOptional<import("typebox").TString>;
          brain: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"agent-consult">, import("typebox").TLiteral<"direct-tools">, import("typebox").TLiteral<"none">]>>;
          consultRouting: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"provider-direct">, import("typebox").TLiteral<"force-agent-consult">]>>;
        }>>;
        resolved: import("typebox").TOptional<import("typebox").TObject<{
          provider: import("typebox").TString;
          config: import("typebox").TObject<{
            apiKey: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TUnion<[import("typebox").TObject<{
              source: import("typebox").TLiteral<"env">;
              provider: import("typebox").TString;
              id: import("typebox").TString;
            }>, import("typebox").TObject<{
              source: import("typebox").TLiteral<"file">;
              provider: import("typebox").TString;
              id: import("typebox").TUnsafe<string>;
            }>, import("typebox").TObject<{
              source: import("typebox").TLiteral<"exec">;
              provider: import("typebox").TString;
              id: import("typebox").TString;
            }>]>]>>;
          }>;
        }>>;
        consultThinkingLevel: import("typebox").TOptional<import("typebox").TString>;
        consultFastMode: import("typebox").TOptional<import("typebox").TBoolean>;
        speechLocale: import("typebox").TOptional<import("typebox").TString>;
        interruptOnSpeech: import("typebox").TOptional<import("typebox").TBoolean>;
        silenceTimeoutMs: import("typebox").TOptional<import("typebox").TInteger>;
      }>>;
      session: import("typebox").TOptional<import("typebox").TObject<{
        mainKey: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      ui: import("typebox").TOptional<import("typebox").TObject<{
        seamColor: import("typebox").TOptional<import("typebox").TString>;
      }>>;
    }>;
  }>;
  readonly TalkSessionAppendAudioParams: import("typebox").TObject<{
    sessionId: import("typebox").TString;
    audioBase64: import("typebox").TString;
    timestamp: import("typebox").TOptional<import("typebox").TNumber>;
  }>;
  readonly TalkSessionAcknowledgeMarkParams: import("typebox").TObject<{
    sessionId: import("typebox").TString;
    markName: import("typebox").TString;
  }>;
  readonly TalkSessionCancelOutputParams: import("typebox").TObject<{
    sessionId: import("typebox").TString;
    turnId: import("typebox").TOptional<import("typebox").TString>;
    reason: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly TalkSessionCancelTurnParams: import("typebox").TObject<{
    sessionId: import("typebox").TString;
    turnId: import("typebox").TOptional<import("typebox").TString>;
    reason: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly TalkSessionCreateParams: import("typebox").TObject<{
    sessionKey: import("typebox").TOptional<import("typebox").TString>;
    spawnedBy: import("typebox").TOptional<import("typebox").TString>;
    provider: import("typebox").TOptional<import("typebox").TString>;
    model: import("typebox").TOptional<import("typebox").TString>;
    voice: import("typebox").TOptional<import("typebox").TString>;
    language: import("typebox").TOptional<import("typebox").TString>;
    vadThreshold: import("typebox").TOptional<import("typebox").TNumber>;
    silenceDurationMs: import("typebox").TOptional<import("typebox").TInteger>;
    prefixPaddingMs: import("typebox").TOptional<import("typebox").TInteger>;
    reasoningEffort: import("typebox").TOptional<import("typebox").TString>;
    mode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"realtime">, import("typebox").TLiteral<"stt-tts">, import("typebox").TLiteral<"transcription">]>>;
    transport: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"webrtc">, import("typebox").TLiteral<"provider-websocket">, import("typebox").TLiteral<"gateway-relay">, import("typebox").TLiteral<"managed-room">]>>;
    brain: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"agent-consult">, import("typebox").TLiteral<"direct-tools">, import("typebox").TLiteral<"none">]>>;
    ttlMs: import("typebox").TOptional<import("typebox").TInteger>;
  }>;
  readonly TalkSessionCreateResult: import("typebox").TObject<{
    sessionId: import("typebox").TString;
    provider: import("typebox").TOptional<import("typebox").TString>;
    mode: import("typebox").TUnion<[import("typebox").TLiteral<"realtime">, import("typebox").TLiteral<"stt-tts">, import("typebox").TLiteral<"transcription">]>;
    transport: import("typebox").TUnion<[import("typebox").TLiteral<"webrtc">, import("typebox").TLiteral<"provider-websocket">, import("typebox").TLiteral<"gateway-relay">, import("typebox").TLiteral<"managed-room">]>;
    brain: import("typebox").TUnion<[import("typebox").TLiteral<"agent-consult">, import("typebox").TLiteral<"direct-tools">, import("typebox").TLiteral<"none">]>;
    relaySessionId: import("typebox").TOptional<import("typebox").TString>;
    transcriptionSessionId: import("typebox").TOptional<import("typebox").TString>;
    handoffId: import("typebox").TOptional<import("typebox").TString>;
    roomId: import("typebox").TOptional<import("typebox").TString>;
    roomUrl: import("typebox").TOptional<import("typebox").TString>;
    token: import("typebox").TOptional<import("typebox").TString>;
    audio: import("typebox").TOptional<import("typebox").TUnknown>;
    model: import("typebox").TOptional<import("typebox").TString>;
    voice: import("typebox").TOptional<import("typebox").TString>;
    expiresAt: import("typebox").TOptional<import("typebox").TNumber>;
  }>;
  readonly TalkSessionJoinParams: import("typebox").TObject<{
    sessionId: import("typebox").TString;
    token: import("typebox").TString;
  }>;
  readonly TalkSessionJoinResult: import("typebox").TObject<{
    id: import("typebox").TString;
    roomId: import("typebox").TString;
    roomUrl: import("typebox").TString;
    sessionKey: import("typebox").TString;
    sessionId: import("typebox").TOptional<import("typebox").TString>;
    channel: import("typebox").TOptional<import("typebox").TString>;
    target: import("typebox").TOptional<import("typebox").TString>;
    provider: import("typebox").TOptional<import("typebox").TString>;
    model: import("typebox").TOptional<import("typebox").TString>;
    voice: import("typebox").TOptional<import("typebox").TString>;
    mode: import("typebox").TUnion<[import("typebox").TLiteral<"realtime">, import("typebox").TLiteral<"stt-tts">, import("typebox").TLiteral<"transcription">]>;
    transport: import("typebox").TUnion<[import("typebox").TLiteral<"webrtc">, import("typebox").TLiteral<"provider-websocket">, import("typebox").TLiteral<"gateway-relay">, import("typebox").TLiteral<"managed-room">]>;
    brain: import("typebox").TUnion<[import("typebox").TLiteral<"agent-consult">, import("typebox").TLiteral<"direct-tools">, import("typebox").TLiteral<"none">]>;
    createdAt: import("typebox").TNumber;
    expiresAt: import("typebox").TNumber;
    room: import("typebox").TObject<{
      activeClientId: import("typebox").TOptional<import("typebox").TString>;
      activeTurnId: import("typebox").TOptional<import("typebox").TString>;
      recentTalkEvents: import("typebox").TArray<import("typebox").TObject<{
        id: import("typebox").TString;
        type: import("typebox").TUnion<[import("typebox").TLiteral<"session.started">, import("typebox").TLiteral<"session.ready">, import("typebox").TLiteral<"session.closed">, import("typebox").TLiteral<"session.error">, import("typebox").TLiteral<"session.replaced">, import("typebox").TLiteral<"turn.started">, import("typebox").TLiteral<"turn.ended">, import("typebox").TLiteral<"turn.cancelled">, import("typebox").TLiteral<"capture.started">, import("typebox").TLiteral<"capture.stopped">, import("typebox").TLiteral<"capture.cancelled">, import("typebox").TLiteral<"capture.once">, import("typebox").TLiteral<"input.audio.delta">, import("typebox").TLiteral<"input.audio.committed">, import("typebox").TLiteral<"transcript.delta">, import("typebox").TLiteral<"transcript.done">, import("typebox").TLiteral<"output.text.delta">, import("typebox").TLiteral<"output.text.done">, import("typebox").TLiteral<"output.audio.started">, import("typebox").TLiteral<"output.audio.delta">, import("typebox").TLiteral<"output.audio.done">, import("typebox").TLiteral<"tool.call">, import("typebox").TLiteral<"tool.progress">, import("typebox").TLiteral<"tool.result">, import("typebox").TLiteral<"tool.error">, import("typebox").TLiteral<"usage.metrics">, import("typebox").TLiteral<"latency.metrics">, import("typebox").TLiteral<"health.changed">]>;
        sessionId: import("typebox").TString;
        turnId: import("typebox").TOptional<import("typebox").TString>;
        captureId: import("typebox").TOptional<import("typebox").TString>;
        seq: import("typebox").TInteger;
        timestamp: import("typebox").TString;
        mode: import("typebox").TUnion<[import("typebox").TLiteral<"realtime">, import("typebox").TLiteral<"stt-tts">, import("typebox").TLiteral<"transcription">]>;
        transport: import("typebox").TUnion<[import("typebox").TLiteral<"webrtc">, import("typebox").TLiteral<"provider-websocket">, import("typebox").TLiteral<"gateway-relay">, import("typebox").TLiteral<"managed-room">]>;
        brain: import("typebox").TUnion<[import("typebox").TLiteral<"agent-consult">, import("typebox").TLiteral<"direct-tools">, import("typebox").TLiteral<"none">]>;
        provider: import("typebox").TOptional<import("typebox").TString>;
        final: import("typebox").TOptional<import("typebox").TBoolean>;
        callId: import("typebox").TOptional<import("typebox").TString>;
        itemId: import("typebox").TOptional<import("typebox").TString>;
        parentId: import("typebox").TOptional<import("typebox").TString>;
        payload: import("typebox").TUnknown;
      }>>;
    }>;
  }>;
  readonly TalkSessionTurnParams: import("typebox").TObject<{
    sessionId: import("typebox").TString;
    turnId: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly TalkSessionTurnResult: import("typebox").TObject<{
    ok: import("typebox").TBoolean;
    turnId: import("typebox").TOptional<import("typebox").TString>;
    events: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
      id: import("typebox").TString;
      type: import("typebox").TUnion<[import("typebox").TLiteral<"session.started">, import("typebox").TLiteral<"session.ready">, import("typebox").TLiteral<"session.closed">, import("typebox").TLiteral<"session.error">, import("typebox").TLiteral<"session.replaced">, import("typebox").TLiteral<"turn.started">, import("typebox").TLiteral<"turn.ended">, import("typebox").TLiteral<"turn.cancelled">, import("typebox").TLiteral<"capture.started">, import("typebox").TLiteral<"capture.stopped">, import("typebox").TLiteral<"capture.cancelled">, import("typebox").TLiteral<"capture.once">, import("typebox").TLiteral<"input.audio.delta">, import("typebox").TLiteral<"input.audio.committed">, import("typebox").TLiteral<"transcript.delta">, import("typebox").TLiteral<"transcript.done">, import("typebox").TLiteral<"output.text.delta">, import("typebox").TLiteral<"output.text.done">, import("typebox").TLiteral<"output.audio.started">, import("typebox").TLiteral<"output.audio.delta">, import("typebox").TLiteral<"output.audio.done">, import("typebox").TLiteral<"tool.call">, import("typebox").TLiteral<"tool.progress">, import("typebox").TLiteral<"tool.result">, import("typebox").TLiteral<"tool.error">, import("typebox").TLiteral<"usage.metrics">, import("typebox").TLiteral<"latency.metrics">, import("typebox").TLiteral<"health.changed">]>;
      sessionId: import("typebox").TString;
      turnId: import("typebox").TOptional<import("typebox").TString>;
      captureId: import("typebox").TOptional<import("typebox").TString>;
      seq: import("typebox").TInteger;
      timestamp: import("typebox").TString;
      mode: import("typebox").TUnion<[import("typebox").TLiteral<"realtime">, import("typebox").TLiteral<"stt-tts">, import("typebox").TLiteral<"transcription">]>;
      transport: import("typebox").TUnion<[import("typebox").TLiteral<"webrtc">, import("typebox").TLiteral<"provider-websocket">, import("typebox").TLiteral<"gateway-relay">, import("typebox").TLiteral<"managed-room">]>;
      brain: import("typebox").TUnion<[import("typebox").TLiteral<"agent-consult">, import("typebox").TLiteral<"direct-tools">, import("typebox").TLiteral<"none">]>;
      provider: import("typebox").TOptional<import("typebox").TString>;
      final: import("typebox").TOptional<import("typebox").TBoolean>;
      callId: import("typebox").TOptional<import("typebox").TString>;
      itemId: import("typebox").TOptional<import("typebox").TString>;
      parentId: import("typebox").TOptional<import("typebox").TString>;
      payload: import("typebox").TUnknown;
    }>>>;
  }>;
  readonly TalkSessionSteerParams: import("typebox").TObject<{
    sessionId: import("typebox").TString;
    sessionKey: import("typebox").TOptional<import("typebox").TString>;
    text: import("typebox").TString;
    mode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"status">, import("typebox").TLiteral<"steer">, import("typebox").TLiteral<"cancel">, import("typebox").TLiteral<"followup">]>>;
  }>;
  readonly TalkSessionSubmitToolResultParams: import("typebox").TObject<{
    sessionId: import("typebox").TString;
    callId: import("typebox").TString;
    result: import("typebox").TUnknown;
    options: import("typebox").TOptional<import("typebox").TObject<{
      suppressResponse: import("typebox").TOptional<import("typebox").TBoolean>;
      willContinue: import("typebox").TOptional<import("typebox").TBoolean>;
    }>>;
  }>;
  readonly TalkSessionCloseParams: import("typebox").TObject<{
    sessionId: import("typebox").TString;
  }>;
  readonly TalkSessionOkResult: import("typebox").TObject<{
    ok: import("typebox").TBoolean;
  }>;
  readonly TalkSpeakParams: import("typebox").TObject<{
    text: import("typebox").TString;
    voiceId: import("typebox").TOptional<import("typebox").TString>;
    modelId: import("typebox").TOptional<import("typebox").TString>;
    outputFormat: import("typebox").TOptional<import("typebox").TString>;
    speed: import("typebox").TOptional<import("typebox").TNumber>;
    rateWpm: import("typebox").TOptional<import("typebox").TInteger>;
    stability: import("typebox").TOptional<import("typebox").TNumber>;
    similarity: import("typebox").TOptional<import("typebox").TNumber>;
    style: import("typebox").TOptional<import("typebox").TNumber>;
    speakerBoost: import("typebox").TOptional<import("typebox").TBoolean>;
    seed: import("typebox").TOptional<import("typebox").TInteger>;
    normalize: import("typebox").TOptional<import("typebox").TString>;
    language: import("typebox").TOptional<import("typebox").TString>;
    latencyTier: import("typebox").TOptional<import("typebox").TInteger>;
  }>;
  readonly TalkSpeakResult: import("typebox").TObject<{
    audioBase64: import("typebox").TString;
    provider: import("typebox").TString;
    outputFormat: import("typebox").TOptional<import("typebox").TString>;
    voiceCompatible: import("typebox").TOptional<import("typebox").TBoolean>;
    mimeType: import("typebox").TOptional<import("typebox").TString>;
    fileExtension: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly TtsSpeakParams: import("typebox").TObject<{
    text: import("typebox").TString;
  }>;
  readonly TtsSpeakResult: import("typebox").TObject<{
    audioBase64: import("typebox").TString;
    provider: import("typebox").TString;
    outputFormat: import("typebox").TOptional<import("typebox").TString>;
    mimeType: import("typebox").TOptional<import("typebox").TString>;
    fileExtension: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly ChannelsStatusParams: import("typebox").TObject<{
    probe: import("typebox").TOptional<import("typebox").TBoolean>;
    timeoutMs: import("typebox").TOptional<import("typebox").TInteger>;
    channel: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly ChannelsStatusResult: import("typebox").TObject<{
    ts: import("typebox").TInteger;
    channelOrder: import("typebox").TArray<import("typebox").TString>;
    channelLabels: import("typebox").TRecord<"^.*$", import("typebox").TString>;
    channelDetailLabels: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TString>>;
    channelSystemImages: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TString>>;
    channelMeta: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
      id: import("typebox").TString;
      label: import("typebox").TString;
      detailLabel: import("typebox").TString;
      systemImage: import("typebox").TOptional<import("typebox").TString>;
    }>>>;
    channels: import("typebox").TRecord<"^.*$", import("typebox").TUnknown>;
    channelAccounts: import("typebox").TRecord<"^.*$", import("typebox").TArray<import("typebox").TObject<{
      accountId: import("typebox").TString;
      name: import("typebox").TOptional<import("typebox").TString>;
      enabled: import("typebox").TOptional<import("typebox").TBoolean>;
      configured: import("typebox").TOptional<import("typebox").TBoolean>;
      linked: import("typebox").TOptional<import("typebox").TBoolean>;
      running: import("typebox").TOptional<import("typebox").TBoolean>;
      connected: import("typebox").TOptional<import("typebox").TBoolean>;
      reconnectAttempts: import("typebox").TOptional<import("typebox").TInteger>;
      lastConnectedAt: import("typebox").TOptional<import("typebox").TInteger>;
      lastError: import("typebox").TOptional<import("typebox").TString>;
      healthState: import("typebox").TOptional<import("typebox").TString>;
      lastStartAt: import("typebox").TOptional<import("typebox").TInteger>;
      lastStopAt: import("typebox").TOptional<import("typebox").TInteger>;
      lastInboundAt: import("typebox").TOptional<import("typebox").TInteger>;
      lastOutboundAt: import("typebox").TOptional<import("typebox").TInteger>;
      lastTransportActivityAt: import("typebox").TOptional<import("typebox").TInteger>;
      busy: import("typebox").TOptional<import("typebox").TBoolean>;
      activeRuns: import("typebox").TOptional<import("typebox").TInteger>;
      lastRunActivityAt: import("typebox").TOptional<import("typebox").TInteger>;
      lastProbeAt: import("typebox").TOptional<import("typebox").TInteger>;
      mode: import("typebox").TOptional<import("typebox").TString>;
      dmPolicy: import("typebox").TOptional<import("typebox").TString>;
      allowFrom: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
      tokenSource: import("typebox").TOptional<import("typebox").TString>;
      botTokenSource: import("typebox").TOptional<import("typebox").TString>;
      appTokenSource: import("typebox").TOptional<import("typebox").TString>;
      baseUrl: import("typebox").TOptional<import("typebox").TString>;
      allowUnmentionedGroups: import("typebox").TOptional<import("typebox").TBoolean>;
      cliPath: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      dbPath: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      port: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TInteger, import("typebox").TNull]>>;
      probe: import("typebox").TOptional<import("typebox").TUnknown>;
      audit: import("typebox").TOptional<import("typebox").TUnknown>;
      application: import("typebox").TOptional<import("typebox").TUnknown>;
    }>>>;
    channelDefaultAccountId: import("typebox").TRecord<"^.*$", import("typebox").TString>;
    eventLoop: import("typebox").TOptional<import("typebox").TObject<{
      degraded: import("typebox").TBoolean;
      reasons: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"event_loop_delay">, import("typebox").TLiteral<"event_loop_utilization">, import("typebox").TLiteral<"cpu">]>>;
      intervalMs: import("typebox").TInteger;
      delayP99Ms: import("typebox").TNumber;
      delayMaxMs: import("typebox").TNumber;
      utilization: import("typebox").TNumber;
      cpuCoreRatio: import("typebox").TNumber;
    }>>;
    partial: import("typebox").TOptional<import("typebox").TBoolean>;
    warnings: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
  }>;
  readonly ChannelsPairingListParams: import("typebox").TObject<{
    channel: import("typebox").TOptional<import("typebox").TString>;
    accountId: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly ChannelsPairingListResult: import("typebox").TObject<{
    accounts: import("typebox").TArray<import("typebox").TObject<{
      channel: import("typebox").TString;
      channelLabel: import("typebox").TString;
      accountId: import("typebox").TString;
      accountLabel: import("typebox").TOptional<import("typebox").TString>;
      notifySupported: import("typebox").TBoolean;
    }>>;
    requests: import("typebox").TArray<import("typebox").TObject<{
      requestId: import("typebox").TString;
      channel: import("typebox").TString;
      channelLabel: import("typebox").TString;
      accountId: import("typebox").TString;
      accountLabel: import("typebox").TOptional<import("typebox").TString>;
      senderId: import("typebox").TString;
      senderLabel: import("typebox").TString;
      metadata: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TString>>;
      createdAt: import("typebox").TString;
      lastSeenAt: import("typebox").TString;
      expiresAt: import("typebox").TString;
      notifySupported: import("typebox").TBoolean;
    }>>;
    commandOwnerConfigured: import("typebox").TBoolean;
    limits: import("typebox").TObject<{
      pendingPerAccount: import("typebox").TInteger;
      ttlMs: import("typebox").TInteger;
    }>;
  }>;
  readonly ChannelsPairingApproveParams: import("typebox").TObject<{
    channel: import("typebox").TString;
    accountId: import("typebox").TString;
    requestId: import("typebox").TString;
    notify: import("typebox").TOptional<import("typebox").TBoolean>;
    bootstrapCommandOwner: import("typebox").TOptional<import("typebox").TBoolean>;
  }>;
  readonly ChannelsPairingApproveResult: import("typebox").TObject<{
    requestId: import("typebox").TString;
    senderId: import("typebox").TString;
    notification: import("typebox").TString;
    commandOwnerBootstrap: import("typebox").TString;
  }>;
  readonly ChannelsPairingDismissParams: import("typebox").TObject<{
    channel: import("typebox").TString;
    accountId: import("typebox").TString;
    requestId: import("typebox").TString;
  }>;
  readonly ChannelsPairingDismissResult: import("typebox").TObject<{
    requestId: import("typebox").TString;
    senderId: import("typebox").TString;
  }>;
  readonly ChannelsStartParams: import("typebox").TObject<{
    channel: import("typebox").TString;
    accountId: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly ChannelsStopParams: import("typebox").TObject<{
    channel: import("typebox").TString;
    accountId: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly ChannelsLogoutParams: import("typebox").TObject<{
    channel: import("typebox").TString;
    accountId: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly WebLoginStartParams: import("typebox").TObject<{
    force: import("typebox").TOptional<import("typebox").TBoolean>;
    timeoutMs: import("typebox").TOptional<import("typebox").TInteger>;
    verbose: import("typebox").TOptional<import("typebox").TBoolean>;
    accountId: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly WebLoginWaitParams: import("typebox").TObject<{
    timeoutMs: import("typebox").TOptional<import("typebox").TInteger>;
    accountId: import("typebox").TOptional<import("typebox").TString>;
    currentQrDataUrl: import("typebox").TOptional<import("typebox").TString>;
  }>;
} & {
  readonly SkillsProposalInspectParams: import("typebox").TObject<{
    agentId: import("typebox").TOptional<import("typebox").TString>;
    proposalId: import("typebox").TString;
  }>;
  readonly SkillsProposalInspectResult: import("typebox").TObject<{
    record: import("typebox").TObject<{
      schema: import("typebox").TLiteral<"openclaw.skill-workshop.proposal.v1">;
      id: import("typebox").TString;
      kind: import("typebox").TUnion<[import("typebox").TLiteral<"create">, import("typebox").TLiteral<"update">]>;
      status: import("typebox").TUnion<[import("typebox").TLiteral<"pending">, import("typebox").TLiteral<"applied">, import("typebox").TLiteral<"rejected">, import("typebox").TLiteral<"quarantined">, import("typebox").TLiteral<"stale">]>;
      title: import("typebox").TString;
      description: import("typebox").TString;
      createdAt: import("typebox").TString;
      updatedAt: import("typebox").TString;
      createdBy: import("typebox").TUnion<[import("typebox").TLiteral<"skill-workshop">, import("typebox").TLiteral<"cli">, import("typebox").TLiteral<"gateway">]>;
      origin: import("typebox").TOptional<import("typebox").TObject<{
        agentId: import("typebox").TOptional<import("typebox").TString>;
        sessionKey: import("typebox").TOptional<import("typebox").TString>;
        runId: import("typebox").TOptional<import("typebox").TString>;
        messageId: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      proposedVersion: import("typebox").TString;
      draftFile: import("typebox").TLiteral<"PROPOSAL.md">;
      draftHash: import("typebox").TString;
      supportFiles: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
        path: import("typebox").TString;
        sizeBytes: import("typebox").TInteger;
        hash: import("typebox").TString;
        targetExisted: import("typebox").TOptional<import("typebox").TBoolean>;
        targetContentHash: import("typebox").TOptional<import("typebox").TString>;
      }>>>;
      target: import("typebox").TObject<{
        skillName: import("typebox").TString;
        skillKey: import("typebox").TString;
        skillDir: import("typebox").TString;
        skillFile: import("typebox").TString;
        source: import("typebox").TOptional<import("typebox").TString>;
        currentContentHash: import("typebox").TOptional<import("typebox").TString>;
      }>;
      scan: import("typebox").TObject<{
        state: import("typebox").TUnion<[import("typebox").TLiteral<"pending">, import("typebox").TLiteral<"clean">, import("typebox").TLiteral<"failed">, import("typebox").TLiteral<"quarantined">]>;
        scannedAt: import("typebox").TString;
        critical: import("typebox").TInteger;
        warn: import("typebox").TInteger;
        info: import("typebox").TInteger;
        findings: import("typebox").TArray<import("typebox").TObject<{
          ruleId: import("typebox").TString;
          severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warn">, import("typebox").TLiteral<"critical">]>;
          file: import("typebox").TString;
          line: import("typebox").TInteger;
          message: import("typebox").TString;
          evidence: import("typebox").TString;
        }>>;
      }>;
      goal: import("typebox").TOptional<import("typebox").TString>;
      evidence: import("typebox").TOptional<import("typebox").TString>;
      appliedAt: import("typebox").TOptional<import("typebox").TString>;
      rejectedAt: import("typebox").TOptional<import("typebox").TString>;
      quarantinedAt: import("typebox").TOptional<import("typebox").TString>;
      staleAt: import("typebox").TOptional<import("typebox").TString>;
      statusReason: import("typebox").TOptional<import("typebox").TString>;
      evaluation: import("typebox").TOptional<import("typebox").TObject<{
        id: import("typebox").TString;
        proposedVersion: import("typebox").TString;
        revisionHash: import("typebox").TString;
        trigger: import("typebox").TUnion<[import("typebox").TLiteral<"manual">, import("typebox").TLiteral<"apply">]>;
        startedAt: import("typebox").TString;
        completedAt: import("typebox").TString;
        correlationId: import("typebox").TOptional<import("typebox").TString>;
        targetTreeSha256: import("typebox").TOptional<import("typebox").TString>;
        outcomes: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TObject<{
          status: import("typebox").TLiteral<"completed">;
          result: import("typebox").TObject<{
            summary: import("typebox").TOptional<import("typebox").TString>;
            findings: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
              ruleId: import("typebox").TString;
              severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warn">, import("typebox").TLiteral<"critical">]>;
              message: import("typebox").TString;
              file: import("typebox").TOptional<import("typebox").TString>;
              line: import("typebox").TOptional<import("typebox").TInteger>;
            }>>>;
            metrics: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TUnion<[import("typebox").TString, import("typebox").TNumber, import("typebox").TBoolean]>>>;
            evaluatorVersion: import("typebox").TOptional<import("typebox").TString>;
            mode: import("typebox").TOptional<import("typebox").TString>;
            decision: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"pass">, import("typebox").TLiteral<"revise">, import("typebox").TLiteral<"block">]>>;
            decisionReason: import("typebox").TOptional<import("typebox").TString>;
          }>;
          pluginId: import("typebox").TString;
          pluginVersion: import("typebox").TOptional<import("typebox").TString>;
          evaluatorId: import("typebox").TString;
        }>, import("typebox").TObject<{
          status: import("typebox").TLiteral<"skipped">;
          pluginId: import("typebox").TString;
          pluginVersion: import("typebox").TOptional<import("typebox").TString>;
          evaluatorId: import("typebox").TString;
        }>, import("typebox").TObject<{
          status: import("typebox").TLiteral<"error">;
          error: import("typebox").TString;
          pluginId: import("typebox").TString;
          pluginVersion: import("typebox").TOptional<import("typebox").TString>;
          evaluatorId: import("typebox").TString;
        }>]>>;
      }>>;
    }>;
    revisionHash: import("typebox").TOptional<import("typebox").TString>;
    content: import("typebox").TString;
    supportFiles: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
      path: import("typebox").TString;
      content: import("typebox").TString;
    }>>>;
  }>;
  readonly SkillsProposalCreateParams: import("typebox").TObject<{
    agentId: import("typebox").TOptional<import("typebox").TString>;
    name: import("typebox").TString;
    description: import("typebox").TString;
    content: import("typebox").TString;
    supportFiles: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
      path: import("typebox").TString;
      content: import("typebox").TString;
    }>>>;
    goal: import("typebox").TOptional<import("typebox").TString>;
    evidence: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly SkillsProposalUpdateParams: import("typebox").TObject<{
    agentId: import("typebox").TOptional<import("typebox").TString>;
    skillName: import("typebox").TString;
    description: import("typebox").TOptional<import("typebox").TString>;
    content: import("typebox").TString;
    supportFiles: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
      path: import("typebox").TString;
      content: import("typebox").TString;
    }>>>;
    goal: import("typebox").TOptional<import("typebox").TString>;
    evidence: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly SkillsProposalReviseParams: import("typebox").TObject<{
    agentId: import("typebox").TOptional<import("typebox").TString>;
    proposalId: import("typebox").TString;
    expectedRevisionHash: import("typebox").TOptional<import("typebox").TString>;
    correlationId: import("typebox").TOptional<import("typebox").TString>;
    content: import("typebox").TOptional<import("typebox").TString>;
    supportFiles: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
      path: import("typebox").TString;
      content: import("typebox").TString;
    }>>>;
    description: import("typebox").TOptional<import("typebox").TString>;
    goal: import("typebox").TOptional<import("typebox").TString>;
    evidence: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly SkillsProposalRequestRevisionParams: import("typebox").TObject<{
    agentId: import("typebox").TOptional<import("typebox").TString>;
    targetAgentId: import("typebox").TOptional<import("typebox").TString>;
    proposalId: import("typebox").TString;
    expectedRevisionHash: import("typebox").TOptional<import("typebox").TString>;
    instructions: import("typebox").TString;
    sessionKey: import("typebox").TString;
    sessionId: import("typebox").TOptional<import("typebox").TString>;
    idempotencyKey: import("typebox").TString;
  }>;
  readonly SkillsProposalRequestRevisionResult: import("typebox").TObject<{
    runId: import("typebox").TString;
    status: import("typebox").TUnion<[import("typebox").TLiteral<"started">, import("typebox").TLiteral<"in_flight">, import("typebox").TLiteral<"ok">, import("typebox").TLiteral<"timeout">, import("typebox").TLiteral<"error">]>;
  }>;
  readonly SkillsProposalActionParams: import("typebox").TObject<{
    agentId: import("typebox").TOptional<import("typebox").TString>;
    proposalId: import("typebox").TString;
    expectedRevisionHash: import("typebox").TOptional<import("typebox").TString>;
    correlationId: import("typebox").TOptional<import("typebox").TString>;
    reason: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly SkillsProposalApplyResult: import("typebox").TObject<{
    record: import("typebox").TObject<{
      schema: import("typebox").TLiteral<"openclaw.skill-workshop.proposal.v1">;
      id: import("typebox").TString;
      kind: import("typebox").TUnion<[import("typebox").TLiteral<"create">, import("typebox").TLiteral<"update">]>;
      status: import("typebox").TUnion<[import("typebox").TLiteral<"pending">, import("typebox").TLiteral<"applied">, import("typebox").TLiteral<"rejected">, import("typebox").TLiteral<"quarantined">, import("typebox").TLiteral<"stale">]>;
      title: import("typebox").TString;
      description: import("typebox").TString;
      createdAt: import("typebox").TString;
      updatedAt: import("typebox").TString;
      createdBy: import("typebox").TUnion<[import("typebox").TLiteral<"skill-workshop">, import("typebox").TLiteral<"cli">, import("typebox").TLiteral<"gateway">]>;
      origin: import("typebox").TOptional<import("typebox").TObject<{
        agentId: import("typebox").TOptional<import("typebox").TString>;
        sessionKey: import("typebox").TOptional<import("typebox").TString>;
        runId: import("typebox").TOptional<import("typebox").TString>;
        messageId: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      proposedVersion: import("typebox").TString;
      draftFile: import("typebox").TLiteral<"PROPOSAL.md">;
      draftHash: import("typebox").TString;
      supportFiles: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
        path: import("typebox").TString;
        sizeBytes: import("typebox").TInteger;
        hash: import("typebox").TString;
        targetExisted: import("typebox").TOptional<import("typebox").TBoolean>;
        targetContentHash: import("typebox").TOptional<import("typebox").TString>;
      }>>>;
      target: import("typebox").TObject<{
        skillName: import("typebox").TString;
        skillKey: import("typebox").TString;
        skillDir: import("typebox").TString;
        skillFile: import("typebox").TString;
        source: import("typebox").TOptional<import("typebox").TString>;
        currentContentHash: import("typebox").TOptional<import("typebox").TString>;
      }>;
      scan: import("typebox").TObject<{
        state: import("typebox").TUnion<[import("typebox").TLiteral<"pending">, import("typebox").TLiteral<"clean">, import("typebox").TLiteral<"failed">, import("typebox").TLiteral<"quarantined">]>;
        scannedAt: import("typebox").TString;
        critical: import("typebox").TInteger;
        warn: import("typebox").TInteger;
        info: import("typebox").TInteger;
        findings: import("typebox").TArray<import("typebox").TObject<{
          ruleId: import("typebox").TString;
          severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warn">, import("typebox").TLiteral<"critical">]>;
          file: import("typebox").TString;
          line: import("typebox").TInteger;
          message: import("typebox").TString;
          evidence: import("typebox").TString;
        }>>;
      }>;
      goal: import("typebox").TOptional<import("typebox").TString>;
      evidence: import("typebox").TOptional<import("typebox").TString>;
      appliedAt: import("typebox").TOptional<import("typebox").TString>;
      rejectedAt: import("typebox").TOptional<import("typebox").TString>;
      quarantinedAt: import("typebox").TOptional<import("typebox").TString>;
      staleAt: import("typebox").TOptional<import("typebox").TString>;
      statusReason: import("typebox").TOptional<import("typebox").TString>;
      evaluation: import("typebox").TOptional<import("typebox").TObject<{
        id: import("typebox").TString;
        proposedVersion: import("typebox").TString;
        revisionHash: import("typebox").TString;
        trigger: import("typebox").TUnion<[import("typebox").TLiteral<"manual">, import("typebox").TLiteral<"apply">]>;
        startedAt: import("typebox").TString;
        completedAt: import("typebox").TString;
        correlationId: import("typebox").TOptional<import("typebox").TString>;
        targetTreeSha256: import("typebox").TOptional<import("typebox").TString>;
        outcomes: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TObject<{
          status: import("typebox").TLiteral<"completed">;
          result: import("typebox").TObject<{
            summary: import("typebox").TOptional<import("typebox").TString>;
            findings: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
              ruleId: import("typebox").TString;
              severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warn">, import("typebox").TLiteral<"critical">]>;
              message: import("typebox").TString;
              file: import("typebox").TOptional<import("typebox").TString>;
              line: import("typebox").TOptional<import("typebox").TInteger>;
            }>>>;
            metrics: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TUnion<[import("typebox").TString, import("typebox").TNumber, import("typebox").TBoolean]>>>;
            evaluatorVersion: import("typebox").TOptional<import("typebox").TString>;
            mode: import("typebox").TOptional<import("typebox").TString>;
            decision: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"pass">, import("typebox").TLiteral<"revise">, import("typebox").TLiteral<"block">]>>;
            decisionReason: import("typebox").TOptional<import("typebox").TString>;
          }>;
          pluginId: import("typebox").TString;
          pluginVersion: import("typebox").TOptional<import("typebox").TString>;
          evaluatorId: import("typebox").TString;
        }>, import("typebox").TObject<{
          status: import("typebox").TLiteral<"skipped">;
          pluginId: import("typebox").TString;
          pluginVersion: import("typebox").TOptional<import("typebox").TString>;
          evaluatorId: import("typebox").TString;
        }>, import("typebox").TObject<{
          status: import("typebox").TLiteral<"error">;
          error: import("typebox").TString;
          pluginId: import("typebox").TString;
          pluginVersion: import("typebox").TOptional<import("typebox").TString>;
          evaluatorId: import("typebox").TString;
        }>]>>;
      }>>;
    }>;
    targetSkillFile: import("typebox").TString;
  }>;
  readonly SkillsProposalRecordResult: import("typebox").TObject<{
    schema: import("typebox").TLiteral<"openclaw.skill-workshop.proposal.v1">;
    id: import("typebox").TString;
    kind: import("typebox").TUnion<[import("typebox").TLiteral<"create">, import("typebox").TLiteral<"update">]>;
    status: import("typebox").TUnion<[import("typebox").TLiteral<"pending">, import("typebox").TLiteral<"applied">, import("typebox").TLiteral<"rejected">, import("typebox").TLiteral<"quarantined">, import("typebox").TLiteral<"stale">]>;
    title: import("typebox").TString;
    description: import("typebox").TString;
    createdAt: import("typebox").TString;
    updatedAt: import("typebox").TString;
    createdBy: import("typebox").TUnion<[import("typebox").TLiteral<"skill-workshop">, import("typebox").TLiteral<"cli">, import("typebox").TLiteral<"gateway">]>;
    origin: import("typebox").TOptional<import("typebox").TObject<{
      agentId: import("typebox").TOptional<import("typebox").TString>;
      sessionKey: import("typebox").TOptional<import("typebox").TString>;
      runId: import("typebox").TOptional<import("typebox").TString>;
      messageId: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    proposedVersion: import("typebox").TString;
    draftFile: import("typebox").TLiteral<"PROPOSAL.md">;
    draftHash: import("typebox").TString;
    supportFiles: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
      path: import("typebox").TString;
      sizeBytes: import("typebox").TInteger;
      hash: import("typebox").TString;
      targetExisted: import("typebox").TOptional<import("typebox").TBoolean>;
      targetContentHash: import("typebox").TOptional<import("typebox").TString>;
    }>>>;
    target: import("typebox").TObject<{
      skillName: import("typebox").TString;
      skillKey: import("typebox").TString;
      skillDir: import("typebox").TString;
      skillFile: import("typebox").TString;
      source: import("typebox").TOptional<import("typebox").TString>;
      currentContentHash: import("typebox").TOptional<import("typebox").TString>;
    }>;
    scan: import("typebox").TObject<{
      state: import("typebox").TUnion<[import("typebox").TLiteral<"pending">, import("typebox").TLiteral<"clean">, import("typebox").TLiteral<"failed">, import("typebox").TLiteral<"quarantined">]>;
      scannedAt: import("typebox").TString;
      critical: import("typebox").TInteger;
      warn: import("typebox").TInteger;
      info: import("typebox").TInteger;
      findings: import("typebox").TArray<import("typebox").TObject<{
        ruleId: import("typebox").TString;
        severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warn">, import("typebox").TLiteral<"critical">]>;
        file: import("typebox").TString;
        line: import("typebox").TInteger;
        message: import("typebox").TString;
        evidence: import("typebox").TString;
      }>>;
    }>;
    goal: import("typebox").TOptional<import("typebox").TString>;
    evidence: import("typebox").TOptional<import("typebox").TString>;
    appliedAt: import("typebox").TOptional<import("typebox").TString>;
    rejectedAt: import("typebox").TOptional<import("typebox").TString>;
    quarantinedAt: import("typebox").TOptional<import("typebox").TString>;
    staleAt: import("typebox").TOptional<import("typebox").TString>;
    statusReason: import("typebox").TOptional<import("typebox").TString>;
    evaluation: import("typebox").TOptional<import("typebox").TObject<{
      id: import("typebox").TString;
      proposedVersion: import("typebox").TString;
      revisionHash: import("typebox").TString;
      trigger: import("typebox").TUnion<[import("typebox").TLiteral<"manual">, import("typebox").TLiteral<"apply">]>;
      startedAt: import("typebox").TString;
      completedAt: import("typebox").TString;
      correlationId: import("typebox").TOptional<import("typebox").TString>;
      targetTreeSha256: import("typebox").TOptional<import("typebox").TString>;
      outcomes: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TObject<{
        status: import("typebox").TLiteral<"completed">;
        result: import("typebox").TObject<{
          summary: import("typebox").TOptional<import("typebox").TString>;
          findings: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
            ruleId: import("typebox").TString;
            severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warn">, import("typebox").TLiteral<"critical">]>;
            message: import("typebox").TString;
            file: import("typebox").TOptional<import("typebox").TString>;
            line: import("typebox").TOptional<import("typebox").TInteger>;
          }>>>;
          metrics: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TUnion<[import("typebox").TString, import("typebox").TNumber, import("typebox").TBoolean]>>>;
          evaluatorVersion: import("typebox").TOptional<import("typebox").TString>;
          mode: import("typebox").TOptional<import("typebox").TString>;
          decision: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"pass">, import("typebox").TLiteral<"revise">, import("typebox").TLiteral<"block">]>>;
          decisionReason: import("typebox").TOptional<import("typebox").TString>;
        }>;
        pluginId: import("typebox").TString;
        pluginVersion: import("typebox").TOptional<import("typebox").TString>;
        evaluatorId: import("typebox").TString;
      }>, import("typebox").TObject<{
        status: import("typebox").TLiteral<"skipped">;
        pluginId: import("typebox").TString;
        pluginVersion: import("typebox").TOptional<import("typebox").TString>;
        evaluatorId: import("typebox").TString;
      }>, import("typebox").TObject<{
        status: import("typebox").TLiteral<"error">;
        error: import("typebox").TString;
        pluginId: import("typebox").TString;
        pluginVersion: import("typebox").TOptional<import("typebox").TString>;
        evaluatorId: import("typebox").TString;
      }>]>>;
    }>>;
  }>;
  readonly SkillsSecurityVerdictsParams: import("typebox").TObject<{
    agentId: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly SkillsSecurityVerdictsResult: import("typebox").TObject<{
    schema: import("typebox").TLiteral<"openclaw.skills.security-verdicts.v1">;
    items: import("typebox").TArray<import("typebox").TObject<{
      registry: import("typebox").TString;
      ok: import("typebox").TBoolean;
      decision: import("typebox").TString;
      reasons: import("typebox").TArray<import("typebox").TString>;
      requestedSlug: import("typebox").TString;
      requestedVersion: import("typebox").TString;
      slug: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      version: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      displayName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      publisherHandle: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      publisherDisplayName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      createdAt: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TInteger, import("typebox").TNull]>>;
      checkedAt: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TInteger, import("typebox").TNull]>>;
      skillUrl: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      securityAuditUrl: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      securityStatus: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      securityPassed: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TBoolean, import("typebox").TNull]>>;
      error: import("typebox").TOptional<import("typebox").TObject<{
        code: import("typebox").TOptional<import("typebox").TString>;
        message: import("typebox").TOptional<import("typebox").TString>;
      }>>;
    }>>;
  }>;
  readonly SkillsSkillCardParams: import("typebox").TObject<{
    agentId: import("typebox").TOptional<import("typebox").TString>;
    skillKey: import("typebox").TString;
  }>;
  readonly SkillsSkillCardResult: import("typebox").TObject<{
    schema: import("typebox").TLiteral<"openclaw.skills.skill-card.v1">;
    skillKey: import("typebox").TString;
    path: import("typebox").TString;
    sizeBytes: import("typebox").TInteger;
    content: import("typebox").TString;
  }>;
  readonly SkillsUploadBeginParams: import("typebox").TObject<{
    kind: import("typebox").TLiteral<"skill-archive">;
    slug: import("typebox").TString;
    sizeBytes: import("typebox").TInteger;
    sha256: import("typebox").TOptional<import("typebox").TString>;
    force: import("typebox").TOptional<import("typebox").TBoolean>;
    idempotencyKey: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly SkillsUploadChunkParams: import("typebox").TObject<{
    uploadId: import("typebox").TString;
    offset: import("typebox").TInteger;
    dataBase64: import("typebox").TString;
  }>;
  readonly SkillsUploadCommitParams: import("typebox").TObject<{
    uploadId: import("typebox").TString;
    sha256: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly SkillsInstallParams: import("typebox").TUnion<[import("typebox").TObject<{
    agentId: import("typebox").TOptional<import("typebox").TString>;
    name: import("typebox").TString;
    installId: import("typebox").TString;
    dangerouslyForceUnsafeInstall: import("typebox").TOptional<import("typebox").TBoolean>;
    timeoutMs: import("typebox").TOptional<import("typebox").TInteger>;
  }>, import("typebox").TObject<{
    agentId: import("typebox").TOptional<import("typebox").TString>;
    source: import("typebox").TLiteral<"clawhub">;
    slug: import("typebox").TString;
    version: import("typebox").TOptional<import("typebox").TString>;
    force: import("typebox").TOptional<import("typebox").TBoolean>;
    acknowledgeClawHubRisk: import("typebox").TOptional<import("typebox").TBoolean>;
    timeoutMs: import("typebox").TOptional<import("typebox").TInteger>;
  }>, import("typebox").TObject<{
    agentId: import("typebox").TOptional<import("typebox").TString>;
    source: import("typebox").TLiteral<"upload">;
    uploadId: import("typebox").TString;
    slug: import("typebox").TString;
    force: import("typebox").TOptional<import("typebox").TBoolean>;
    sha256: import("typebox").TOptional<import("typebox").TString>;
    timeoutMs: import("typebox").TOptional<import("typebox").TInteger>;
  }>]>;
  readonly SkillsUpdateParams: import("typebox").TUnion<[import("typebox").TObject<{
    skillKey: import("typebox").TString;
    enabled: import("typebox").TOptional<import("typebox").TBoolean>;
    apiKey: import("typebox").TOptional<import("typebox").TString>;
    env: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TString>>;
  }>, import("typebox").TObject<{
    agentId: import("typebox").TOptional<import("typebox").TString>;
    source: import("typebox").TLiteral<"clawhub">;
    slug: import("typebox").TOptional<import("typebox").TString>;
    all: import("typebox").TOptional<import("typebox").TBoolean>;
    acknowledgeClawHubRisk: import("typebox").TOptional<import("typebox").TBoolean>;
  }>]>;
  readonly SkillsProposalsListParams: import("typebox").TObject<{
    agentId: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly SkillsProposalsListResult: import("typebox").TObject<{
    schema: import("typebox").TLiteral<"openclaw.skill-workshop.proposals-manifest.v1">;
    updatedAt: import("typebox").TString;
    proposals: import("typebox").TArray<import("typebox").TObject<{
      id: import("typebox").TString;
      kind: import("typebox").TUnion<[import("typebox").TLiteral<"create">, import("typebox").TLiteral<"update">]>;
      status: import("typebox").TUnion<[import("typebox").TLiteral<"pending">, import("typebox").TLiteral<"applied">, import("typebox").TLiteral<"rejected">, import("typebox").TLiteral<"quarantined">, import("typebox").TLiteral<"stale">]>;
      title: import("typebox").TString;
      description: import("typebox").TString;
      skillName: import("typebox").TString;
      skillKey: import("typebox").TString;
      createdAt: import("typebox").TString;
      updatedAt: import("typebox").TString;
      scanState: import("typebox").TUnion<[import("typebox").TLiteral<"pending">, import("typebox").TLiteral<"clean">, import("typebox").TLiteral<"failed">, import("typebox").TLiteral<"quarantined">]>;
    }>>;
  }>;
  readonly SkillsProposalEvaluateParams: import("typebox").TObject<{
    agentId: import("typebox").TOptional<import("typebox").TString>;
    proposalId: import("typebox").TString;
    expectedRevisionHash: import("typebox").TOptional<import("typebox").TString>;
    correlationId: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly SkillsProposalEvaluateResult: import("typebox").TObject<{
    record: import("typebox").TObject<{
      schema: import("typebox").TLiteral<"openclaw.skill-workshop.proposal.v1">;
      id: import("typebox").TString;
      kind: import("typebox").TUnion<[import("typebox").TLiteral<"create">, import("typebox").TLiteral<"update">]>;
      status: import("typebox").TUnion<[import("typebox").TLiteral<"pending">, import("typebox").TLiteral<"applied">, import("typebox").TLiteral<"rejected">, import("typebox").TLiteral<"quarantined">, import("typebox").TLiteral<"stale">]>;
      title: import("typebox").TString;
      description: import("typebox").TString;
      createdAt: import("typebox").TString;
      updatedAt: import("typebox").TString;
      createdBy: import("typebox").TUnion<[import("typebox").TLiteral<"skill-workshop">, import("typebox").TLiteral<"cli">, import("typebox").TLiteral<"gateway">]>;
      origin: import("typebox").TOptional<import("typebox").TObject<{
        agentId: import("typebox").TOptional<import("typebox").TString>;
        sessionKey: import("typebox").TOptional<import("typebox").TString>;
        runId: import("typebox").TOptional<import("typebox").TString>;
        messageId: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      proposedVersion: import("typebox").TString;
      draftFile: import("typebox").TLiteral<"PROPOSAL.md">;
      draftHash: import("typebox").TString;
      supportFiles: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
        path: import("typebox").TString;
        sizeBytes: import("typebox").TInteger;
        hash: import("typebox").TString;
        targetExisted: import("typebox").TOptional<import("typebox").TBoolean>;
        targetContentHash: import("typebox").TOptional<import("typebox").TString>;
      }>>>;
      target: import("typebox").TObject<{
        skillName: import("typebox").TString;
        skillKey: import("typebox").TString;
        skillDir: import("typebox").TString;
        skillFile: import("typebox").TString;
        source: import("typebox").TOptional<import("typebox").TString>;
        currentContentHash: import("typebox").TOptional<import("typebox").TString>;
      }>;
      scan: import("typebox").TObject<{
        state: import("typebox").TUnion<[import("typebox").TLiteral<"pending">, import("typebox").TLiteral<"clean">, import("typebox").TLiteral<"failed">, import("typebox").TLiteral<"quarantined">]>;
        scannedAt: import("typebox").TString;
        critical: import("typebox").TInteger;
        warn: import("typebox").TInteger;
        info: import("typebox").TInteger;
        findings: import("typebox").TArray<import("typebox").TObject<{
          ruleId: import("typebox").TString;
          severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warn">, import("typebox").TLiteral<"critical">]>;
          file: import("typebox").TString;
          line: import("typebox").TInteger;
          message: import("typebox").TString;
          evidence: import("typebox").TString;
        }>>;
      }>;
      goal: import("typebox").TOptional<import("typebox").TString>;
      evidence: import("typebox").TOptional<import("typebox").TString>;
      appliedAt: import("typebox").TOptional<import("typebox").TString>;
      rejectedAt: import("typebox").TOptional<import("typebox").TString>;
      quarantinedAt: import("typebox").TOptional<import("typebox").TString>;
      staleAt: import("typebox").TOptional<import("typebox").TString>;
      statusReason: import("typebox").TOptional<import("typebox").TString>;
      evaluation: import("typebox").TOptional<import("typebox").TObject<{
        id: import("typebox").TString;
        proposedVersion: import("typebox").TString;
        revisionHash: import("typebox").TString;
        trigger: import("typebox").TUnion<[import("typebox").TLiteral<"manual">, import("typebox").TLiteral<"apply">]>;
        startedAt: import("typebox").TString;
        completedAt: import("typebox").TString;
        correlationId: import("typebox").TOptional<import("typebox").TString>;
        targetTreeSha256: import("typebox").TOptional<import("typebox").TString>;
        outcomes: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TObject<{
          status: import("typebox").TLiteral<"completed">;
          result: import("typebox").TObject<{
            summary: import("typebox").TOptional<import("typebox").TString>;
            findings: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
              ruleId: import("typebox").TString;
              severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warn">, import("typebox").TLiteral<"critical">]>;
              message: import("typebox").TString;
              file: import("typebox").TOptional<import("typebox").TString>;
              line: import("typebox").TOptional<import("typebox").TInteger>;
            }>>>;
            metrics: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TUnion<[import("typebox").TString, import("typebox").TNumber, import("typebox").TBoolean]>>>;
            evaluatorVersion: import("typebox").TOptional<import("typebox").TString>;
            mode: import("typebox").TOptional<import("typebox").TString>;
            decision: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"pass">, import("typebox").TLiteral<"revise">, import("typebox").TLiteral<"block">]>>;
            decisionReason: import("typebox").TOptional<import("typebox").TString>;
          }>;
          pluginId: import("typebox").TString;
          pluginVersion: import("typebox").TOptional<import("typebox").TString>;
          evaluatorId: import("typebox").TString;
        }>, import("typebox").TObject<{
          status: import("typebox").TLiteral<"skipped">;
          pluginId: import("typebox").TString;
          pluginVersion: import("typebox").TOptional<import("typebox").TString>;
          evaluatorId: import("typebox").TString;
        }>, import("typebox").TObject<{
          status: import("typebox").TLiteral<"error">;
          error: import("typebox").TString;
          pluginId: import("typebox").TString;
          pluginVersion: import("typebox").TOptional<import("typebox").TString>;
          evaluatorId: import("typebox").TString;
        }>]>>;
      }>>;
    }>;
    evaluation: import("typebox").TObject<{
      id: import("typebox").TString;
      proposedVersion: import("typebox").TString;
      revisionHash: import("typebox").TString;
      trigger: import("typebox").TUnion<[import("typebox").TLiteral<"manual">, import("typebox").TLiteral<"apply">]>;
      startedAt: import("typebox").TString;
      completedAt: import("typebox").TString;
      correlationId: import("typebox").TOptional<import("typebox").TString>;
      targetTreeSha256: import("typebox").TOptional<import("typebox").TString>;
      outcomes: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TObject<{
        status: import("typebox").TLiteral<"completed">;
        result: import("typebox").TObject<{
          summary: import("typebox").TOptional<import("typebox").TString>;
          findings: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
            ruleId: import("typebox").TString;
            severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warn">, import("typebox").TLiteral<"critical">]>;
            message: import("typebox").TString;
            file: import("typebox").TOptional<import("typebox").TString>;
            line: import("typebox").TOptional<import("typebox").TInteger>;
          }>>>;
          metrics: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TUnion<[import("typebox").TString, import("typebox").TNumber, import("typebox").TBoolean]>>>;
          evaluatorVersion: import("typebox").TOptional<import("typebox").TString>;
          mode: import("typebox").TOptional<import("typebox").TString>;
          decision: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"pass">, import("typebox").TLiteral<"revise">, import("typebox").TLiteral<"block">]>>;
          decisionReason: import("typebox").TOptional<import("typebox").TString>;
        }>;
        pluginId: import("typebox").TString;
        pluginVersion: import("typebox").TOptional<import("typebox").TString>;
        evaluatorId: import("typebox").TString;
      }>, import("typebox").TObject<{
        status: import("typebox").TLiteral<"skipped">;
        pluginId: import("typebox").TString;
        pluginVersion: import("typebox").TOptional<import("typebox").TString>;
        evaluatorId: import("typebox").TString;
      }>, import("typebox").TObject<{
        status: import("typebox").TLiteral<"error">;
        error: import("typebox").TString;
        pluginId: import("typebox").TString;
        pluginVersion: import("typebox").TOptional<import("typebox").TString>;
        evaluatorId: import("typebox").TString;
      }>]>>;
    }>;
  }>;
  readonly SkillsProposalEventsListParams: import("typebox").TObject<{
    agentId: import("typebox").TOptional<import("typebox").TString>;
    proposalId: import("typebox").TOptional<import("typebox").TString>;
    afterSequence: import("typebox").TOptional<import("typebox").TInteger>;
    limit: import("typebox").TOptional<import("typebox").TInteger>;
  }>;
  readonly SkillsProposalEventsListResult: import("typebox").TObject<{
    events: import("typebox").TArray<import("typebox").TObject<{
      sequence: import("typebox").TInteger;
      eventId: import("typebox").TString;
      proposalId: import("typebox").TString;
      proposedVersion: import("typebox").TString;
      revisionHash: import("typebox").TString;
      type: import("typebox").TUnion<[import("typebox").TLiteral<"created">, import("typebox").TLiteral<"revised">, import("typebox").TLiteral<"evaluation_completed">, import("typebox").TLiteral<"applied">, import("typebox").TLiteral<"rejected">, import("typebox").TLiteral<"quarantined">, import("typebox").TLiteral<"stale">]>;
      occurredAt: import("typebox").TString;
      actor: import("typebox").TObject<{
        type: import("typebox").TUnion<[import("typebox").TLiteral<"agent">, import("typebox").TLiteral<"gateway">, import("typebox").TLiteral<"plugin">, import("typebox").TLiteral<"system">]>;
        id: import("typebox").TOptional<import("typebox").TString>;
      }>;
      correlationId: import("typebox").TOptional<import("typebox").TString>;
      payload: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TUnion<[import("typebox").TString, import("typebox").TNumber, import("typebox").TBoolean, import("typebox").TNull]>>>;
      evaluation: import("typebox").TOptional<import("typebox").TObject<{
        id: import("typebox").TString;
        proposedVersion: import("typebox").TString;
        revisionHash: import("typebox").TString;
        trigger: import("typebox").TUnion<[import("typebox").TLiteral<"manual">, import("typebox").TLiteral<"apply">]>;
        startedAt: import("typebox").TString;
        completedAt: import("typebox").TString;
        correlationId: import("typebox").TOptional<import("typebox").TString>;
        targetTreeSha256: import("typebox").TOptional<import("typebox").TString>;
        outcomes: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TObject<{
          status: import("typebox").TLiteral<"completed">;
          result: import("typebox").TObject<{
            summary: import("typebox").TOptional<import("typebox").TString>;
            findings: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
              ruleId: import("typebox").TString;
              severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warn">, import("typebox").TLiteral<"critical">]>;
              message: import("typebox").TString;
              file: import("typebox").TOptional<import("typebox").TString>;
              line: import("typebox").TOptional<import("typebox").TInteger>;
            }>>>;
            metrics: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TUnion<[import("typebox").TString, import("typebox").TNumber, import("typebox").TBoolean]>>>;
            evaluatorVersion: import("typebox").TOptional<import("typebox").TString>;
            mode: import("typebox").TOptional<import("typebox").TString>;
            decision: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"pass">, import("typebox").TLiteral<"revise">, import("typebox").TLiteral<"block">]>>;
            decisionReason: import("typebox").TOptional<import("typebox").TString>;
          }>;
          pluginId: import("typebox").TString;
          pluginVersion: import("typebox").TOptional<import("typebox").TString>;
          evaluatorId: import("typebox").TString;
        }>, import("typebox").TObject<{
          status: import("typebox").TLiteral<"skipped">;
          pluginId: import("typebox").TString;
          pluginVersion: import("typebox").TOptional<import("typebox").TString>;
          evaluatorId: import("typebox").TString;
        }>, import("typebox").TObject<{
          status: import("typebox").TLiteral<"error">;
          error: import("typebox").TString;
          pluginId: import("typebox").TString;
          pluginVersion: import("typebox").TOptional<import("typebox").TString>;
          evaluatorId: import("typebox").TString;
        }>]>>;
      }>>;
    }>>;
    nextSequence: import("typebox").TOptional<import("typebox").TInteger>;
  }>;
  readonly SkillsProposalHistoryStatusParams: import("typebox").TObject<{
    agentId: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly SkillsProposalHistoryScanParams: import("typebox").TObject<{
    agentId: import("typebox").TOptional<import("typebox").TString>;
    direction: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"older">, import("typebox").TLiteral<"newer">]>>;
  }>;
  readonly SkillsProposalHistoryScanResult: import("typebox").TObject<{
    schema: import("typebox").TLiteral<"openclaw.skill-workshop.history-scan.v1">;
    hasScanned: import("typebox").TBoolean;
    reviewedSessions: import("typebox").TInteger;
    ideasFound: import("typebox").TInteger;
    hasMore: import("typebox").TBoolean;
    lastScanReviewed: import("typebox").TInteger;
    lastScanIdeas: import("typebox").TInteger;
    lastScanAt: import("typebox").TOptional<import("typebox").TString>;
    oldestReviewedAt: import("typebox").TOptional<import("typebox").TString>;
    newestReviewedAt: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly AgentKind: import("typebox").TUnion<[import("typebox").TLiteral<"agent">, import("typebox").TLiteral<"system">]>;
  readonly AgentSummary: import("typebox").TObject<{
    id: import("typebox").TString;
    kind: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"agent">, import("typebox").TLiteral<"system">]>>;
    name: import("typebox").TOptional<import("typebox").TString>;
    identity: import("typebox").TOptional<import("typebox").TObject<{
      name: import("typebox").TOptional<import("typebox").TString>;
      theme: import("typebox").TOptional<import("typebox").TString>;
      emoji: import("typebox").TOptional<import("typebox").TString>;
      avatar: import("typebox").TOptional<import("typebox").TString>;
      avatarUrl: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    workspace: import("typebox").TOptional<import("typebox").TString>;
    workspaceGit: import("typebox").TOptional<import("typebox").TBoolean>;
    model: import("typebox").TOptional<import("typebox").TObject<{
      primary: import("typebox").TOptional<import("typebox").TString>;
      fallbacks: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    }>>;
    agentRuntime: import("typebox").TOptional<import("typebox").TObject<{
      id: import("typebox").TString;
      fallback: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"openclaw">, import("typebox").TLiteral<"none">]>>;
      source: import("typebox").TUnion<[import("typebox").TLiteral<"env">, import("typebox").TLiteral<"agent">, import("typebox").TLiteral<"defaults">, import("typebox").TLiteral<"model">, import("typebox").TLiteral<"provider">, import("typebox").TLiteral<"implicit">, import("typebox").TLiteral<"session">, import("typebox").TLiteral<"session-key">]>;
    }>>;
    thinkingLevels: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
      id: import("typebox").TString;
      label: import("typebox").TString;
    }>>>;
    thinkingOptions: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    thinkingDefault: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly AgentsCreateParams: import("typebox").TObject<{
    name: import("typebox").TString;
    workspace: import("typebox").TOptional<import("typebox").TString>;
    model: import("typebox").TOptional<import("typebox").TString>;
    emoji: import("typebox").TOptional<import("typebox").TString>;
    avatar: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly AgentsCreateResult: import("typebox").TObject<{
    ok: import("typebox").TLiteral<true>;
    agentId: import("typebox").TString;
    name: import("typebox").TString;
    workspace: import("typebox").TString;
    model: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly AgentsUpdateParams: import("typebox").TObject<{
    agentId: import("typebox").TString;
    name: import("typebox").TOptional<import("typebox").TString>;
    workspace: import("typebox").TOptional<import("typebox").TString>;
    model: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    emoji: import("typebox").TOptional<import("typebox").TString>;
    avatar: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly AgentsUpdateResult: import("typebox").TObject<{
    ok: import("typebox").TLiteral<true>;
    agentId: import("typebox").TString;
  }>;
  readonly AgentsDeleteParams: import("typebox").TObject<{
    agentId: import("typebox").TString;
    deleteFiles: import("typebox").TOptional<import("typebox").TBoolean>;
  }>;
  readonly AgentsDeleteResult: import("typebox").TObject<{
    ok: import("typebox").TLiteral<true>;
    agentId: import("typebox").TString;
    removedBindings: import("typebox").TInteger;
    removed: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
      path: import("typebox").TString;
      method: import("typebox").TUnion<[import("typebox").TLiteral<"trash">, import("typebox").TLiteral<"missing">]>;
    }>>>;
    failed: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
      path: import("typebox").TString;
      reason: import("typebox").TString;
    }>>>;
  }>;
  readonly AgentsFileEntry: import("typebox").TObject<{
    name: import("typebox").TString;
    path: import("typebox").TString;
    missing: import("typebox").TBoolean;
    expectedAbsent: import("typebox").TOptional<import("typebox").TBoolean>;
    size: import("typebox").TOptional<import("typebox").TInteger>;
    updatedAtMs: import("typebox").TOptional<import("typebox").TInteger>;
    content: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly AgentsFilesListParams: import("typebox").TObject<{
    agentId: import("typebox").TString;
  }>;
  readonly AgentsFilesListResult: import("typebox").TObject<{
    agentId: import("typebox").TString;
    workspace: import("typebox").TString;
    files: import("typebox").TArray<import("typebox").TObject<{
      name: import("typebox").TString;
      path: import("typebox").TString;
      missing: import("typebox").TBoolean;
      expectedAbsent: import("typebox").TOptional<import("typebox").TBoolean>;
      size: import("typebox").TOptional<import("typebox").TInteger>;
      updatedAtMs: import("typebox").TOptional<import("typebox").TInteger>;
      content: import("typebox").TOptional<import("typebox").TString>;
    }>>;
  }>;
  readonly AgentsFilesGetParams: import("typebox").TObject<{
    agentId: import("typebox").TString;
    name: import("typebox").TString;
  }>;
  readonly AgentsFilesGetResult: import("typebox").TObject<{
    agentId: import("typebox").TString;
    workspace: import("typebox").TString;
    file: import("typebox").TObject<{
      name: import("typebox").TString;
      path: import("typebox").TString;
      missing: import("typebox").TBoolean;
      expectedAbsent: import("typebox").TOptional<import("typebox").TBoolean>;
      size: import("typebox").TOptional<import("typebox").TInteger>;
      updatedAtMs: import("typebox").TOptional<import("typebox").TInteger>;
      content: import("typebox").TOptional<import("typebox").TString>;
    }>;
  }>;
  readonly AgentsFilesSetParams: import("typebox").TObject<{
    agentId: import("typebox").TString;
    name: import("typebox").TString;
    content: import("typebox").TString;
  }>;
  readonly AgentsFilesSetResult: import("typebox").TObject<{
    ok: import("typebox").TLiteral<true>;
    agentId: import("typebox").TString;
    workspace: import("typebox").TString;
    file: import("typebox").TObject<{
      name: import("typebox").TString;
      path: import("typebox").TString;
      missing: import("typebox").TBoolean;
      expectedAbsent: import("typebox").TOptional<import("typebox").TBoolean>;
      size: import("typebox").TOptional<import("typebox").TInteger>;
      updatedAtMs: import("typebox").TOptional<import("typebox").TInteger>;
      content: import("typebox").TOptional<import("typebox").TString>;
    }>;
  }>;
  readonly AgentsWorkspaceEntry: import("typebox").TObject<{
    path: import("typebox").TString;
    name: import("typebox").TString;
    kind: import("typebox").TUnion<[import("typebox").TLiteral<"file">, import("typebox").TLiteral<"directory">]>;
    size: import("typebox").TOptional<import("typebox").TInteger>;
    updatedAtMs: import("typebox").TOptional<import("typebox").TInteger>;
  }>;
  readonly AgentsWorkspaceFile: import("typebox").TObject<{
    path: import("typebox").TString;
    name: import("typebox").TString;
    size: import("typebox").TInteger;
    updatedAtMs: import("typebox").TInteger;
    mimeType: import("typebox").TString;
    encoding: import("typebox").TUnion<[import("typebox").TLiteral<"utf8">, import("typebox").TLiteral<"base64">]>;
    content: import("typebox").TString;
  }>;
  readonly AgentsWorkspaceListParams: import("typebox").TObject<{
    agentId: import("typebox").TString;
    path: import("typebox").TOptional<import("typebox").TString>;
    offset: import("typebox").TOptional<import("typebox").TInteger>;
    limit: import("typebox").TOptional<import("typebox").TInteger>;
  }>;
  readonly AgentsWorkspaceListResult: import("typebox").TObject<{
    agentId: import("typebox").TString;
    path: import("typebox").TString;
    parentPath: import("typebox").TOptional<import("typebox").TString>;
    entries: import("typebox").TArray<import("typebox").TObject<{
      path: import("typebox").TString;
      name: import("typebox").TString;
      kind: import("typebox").TUnion<[import("typebox").TLiteral<"file">, import("typebox").TLiteral<"directory">]>;
      size: import("typebox").TOptional<import("typebox").TInteger>;
      updatedAtMs: import("typebox").TOptional<import("typebox").TInteger>;
    }>>;
    totalEntries: import("typebox").TInteger;
    offset: import("typebox").TInteger;
  }>;
  readonly AgentsWorkspaceGetParams: import("typebox").TObject<{
    agentId: import("typebox").TString;
    path: import("typebox").TString;
  }>;
  readonly AgentsWorkspaceGetResult: import("typebox").TObject<{
    agentId: import("typebox").TString;
    file: import("typebox").TObject<{
      path: import("typebox").TString;
      name: import("typebox").TString;
      size: import("typebox").TInteger;
      updatedAtMs: import("typebox").TInteger;
      mimeType: import("typebox").TString;
      encoding: import("typebox").TUnion<[import("typebox").TLiteral<"utf8">, import("typebox").TLiteral<"base64">]>;
      content: import("typebox").TString;
    }>;
  }>;
  readonly ArtifactSummary: import("typebox").TObject<{
    id: import("typebox").TString;
    type: import("typebox").TString;
    title: import("typebox").TString;
    mimeType: import("typebox").TOptional<import("typebox").TString>;
    sizeBytes: import("typebox").TOptional<import("typebox").TInteger>;
    sessionKey: import("typebox").TOptional<import("typebox").TString>;
    runId: import("typebox").TOptional<import("typebox").TString>;
    taskId: import("typebox").TOptional<import("typebox").TString>;
    messageSeq: import("typebox").TOptional<import("typebox").TInteger>;
    source: import("typebox").TOptional<import("typebox").TString>;
    download: import("typebox").TObject<{
      mode: import("typebox").TUnion<[import("typebox").TLiteral<"bytes">, import("typebox").TLiteral<"url">, import("typebox").TLiteral<"unsupported">]>;
    }>;
  }>;
  readonly ArtifactsListParams: import("typebox").TObject<{
    sessionKey: import("typebox").TOptional<import("typebox").TString>;
    runId: import("typebox").TOptional<import("typebox").TString>;
    taskId: import("typebox").TOptional<import("typebox").TString>;
    agentId: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly ArtifactsListResult: import("typebox").TObject<{
    artifacts: import("typebox").TArray<import("typebox").TObject<{
      id: import("typebox").TString;
      type: import("typebox").TString;
      title: import("typebox").TString;
      mimeType: import("typebox").TOptional<import("typebox").TString>;
      sizeBytes: import("typebox").TOptional<import("typebox").TInteger>;
      sessionKey: import("typebox").TOptional<import("typebox").TString>;
      runId: import("typebox").TOptional<import("typebox").TString>;
      taskId: import("typebox").TOptional<import("typebox").TString>;
      messageSeq: import("typebox").TOptional<import("typebox").TInteger>;
      source: import("typebox").TOptional<import("typebox").TString>;
      download: import("typebox").TObject<{
        mode: import("typebox").TUnion<[import("typebox").TLiteral<"bytes">, import("typebox").TLiteral<"url">, import("typebox").TLiteral<"unsupported">]>;
      }>;
    }>>;
  }>;
  readonly ArtifactsGetParams: import("typebox").TObject<{
    artifactId: import("typebox").TString;
    sessionKey: import("typebox").TOptional<import("typebox").TString>;
    runId: import("typebox").TOptional<import("typebox").TString>;
    taskId: import("typebox").TOptional<import("typebox").TString>;
    agentId: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly ArtifactsGetResult: import("typebox").TObject<{
    artifact: import("typebox").TObject<{
      id: import("typebox").TString;
      type: import("typebox").TString;
      title: import("typebox").TString;
      mimeType: import("typebox").TOptional<import("typebox").TString>;
      sizeBytes: import("typebox").TOptional<import("typebox").TInteger>;
      sessionKey: import("typebox").TOptional<import("typebox").TString>;
      runId: import("typebox").TOptional<import("typebox").TString>;
      taskId: import("typebox").TOptional<import("typebox").TString>;
      messageSeq: import("typebox").TOptional<import("typebox").TInteger>;
      source: import("typebox").TOptional<import("typebox").TString>;
      download: import("typebox").TObject<{
        mode: import("typebox").TUnion<[import("typebox").TLiteral<"bytes">, import("typebox").TLiteral<"url">, import("typebox").TLiteral<"unsupported">]>;
      }>;
    }>;
  }>;
  readonly ArtifactsDownloadParams: import("typebox").TObject<{
    artifactId: import("typebox").TString;
    sessionKey: import("typebox").TOptional<import("typebox").TString>;
    runId: import("typebox").TOptional<import("typebox").TString>;
    taskId: import("typebox").TOptional<import("typebox").TString>;
    agentId: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly ArtifactsDownloadResult: import("typebox").TObject<{
    artifact: import("typebox").TObject<{
      id: import("typebox").TString;
      type: import("typebox").TString;
      title: import("typebox").TString;
      mimeType: import("typebox").TOptional<import("typebox").TString>;
      sizeBytes: import("typebox").TOptional<import("typebox").TInteger>;
      sessionKey: import("typebox").TOptional<import("typebox").TString>;
      runId: import("typebox").TOptional<import("typebox").TString>;
      taskId: import("typebox").TOptional<import("typebox").TString>;
      messageSeq: import("typebox").TOptional<import("typebox").TInteger>;
      source: import("typebox").TOptional<import("typebox").TString>;
      download: import("typebox").TObject<{
        mode: import("typebox").TUnion<[import("typebox").TLiteral<"bytes">, import("typebox").TLiteral<"url">, import("typebox").TLiteral<"unsupported">]>;
      }>;
    }>;
    encoding: import("typebox").TOptional<import("typebox").TLiteral<"base64">>;
    data: import("typebox").TOptional<import("typebox").TString>;
    url: import("typebox").TOptional<import("typebox").TString>;
    expiresAt: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly AgentsListParams: import("typebox").TObject<{}>;
  readonly AgentsListResult: import("typebox").TObject<{
    defaultId: import("typebox").TString;
    mainKey: import("typebox").TString;
    scope: import("typebox").TUnion<[import("typebox").TLiteral<"per-sender">, import("typebox").TLiteral<"global">]>;
    agents: import("typebox").TArray<import("typebox").TObject<{
      id: import("typebox").TString;
      kind: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"agent">, import("typebox").TLiteral<"system">]>>;
      name: import("typebox").TOptional<import("typebox").TString>;
      identity: import("typebox").TOptional<import("typebox").TObject<{
        name: import("typebox").TOptional<import("typebox").TString>;
        theme: import("typebox").TOptional<import("typebox").TString>;
        emoji: import("typebox").TOptional<import("typebox").TString>;
        avatar: import("typebox").TOptional<import("typebox").TString>;
        avatarUrl: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      workspace: import("typebox").TOptional<import("typebox").TString>;
      workspaceGit: import("typebox").TOptional<import("typebox").TBoolean>;
      model: import("typebox").TOptional<import("typebox").TObject<{
        primary: import("typebox").TOptional<import("typebox").TString>;
        fallbacks: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
      }>>;
      agentRuntime: import("typebox").TOptional<import("typebox").TObject<{
        id: import("typebox").TString;
        fallback: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"openclaw">, import("typebox").TLiteral<"none">]>>;
        source: import("typebox").TUnion<[import("typebox").TLiteral<"env">, import("typebox").TLiteral<"agent">, import("typebox").TLiteral<"defaults">, import("typebox").TLiteral<"model">, import("typebox").TLiteral<"provider">, import("typebox").TLiteral<"implicit">, import("typebox").TLiteral<"session">, import("typebox").TLiteral<"session-key">]>;
      }>>;
      thinkingLevels: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
        id: import("typebox").TString;
        label: import("typebox").TString;
      }>>>;
      thinkingOptions: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
      thinkingDefault: import("typebox").TOptional<import("typebox").TString>;
    }>>;
  }>;
  readonly ModelChoice: import("typebox").TObject<{
    id: import("typebox").TString;
    name: import("typebox").TString;
    provider: import("typebox").TString;
    alias: import("typebox").TOptional<import("typebox").TString>;
    available: import("typebox").TOptional<import("typebox").TBoolean>;
    contextWindow: import("typebox").TOptional<import("typebox").TInteger>;
    reasoning: import("typebox").TOptional<import("typebox").TBoolean>;
    agentRuntime: import("typebox").TOptional<import("typebox").TObject<{
      id: import("typebox").TString;
      fallback: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"openclaw">, import("typebox").TLiteral<"none">]>>;
      source: import("typebox").TUnion<[import("typebox").TLiteral<"env">, import("typebox").TLiteral<"agent">, import("typebox").TLiteral<"defaults">, import("typebox").TLiteral<"model">, import("typebox").TLiteral<"provider">, import("typebox").TLiteral<"implicit">, import("typebox").TLiteral<"session">, import("typebox").TLiteral<"session-key">]>;
    }>>;
    apiKeySupported: import("typebox").TOptional<import("typebox").TBoolean>;
    input: import("typebox").TOptional<import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"text">, import("typebox").TLiteral<"image">, import("typebox").TLiteral<"audio">, import("typebox").TLiteral<"video">, import("typebox").TLiteral<"document">]>>>;
  }>;
  readonly ModelsAuthLogoutParams: import("typebox").TObject<{
    provider: import("typebox").TString;
    profileIds: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    agentId: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly ModelsAuthStatusParams: import("typebox").TObject<{
    refresh: import("typebox").TOptional<import("typebox").TBoolean>;
    agentId: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly ModelsListParams: import("typebox").TObject<{
    includeProviderCapabilities: import("typebox").TOptional<import("typebox").TBoolean>;
    view: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"default">, import("typebox").TLiteral<"configured">, import("typebox").TLiteral<"provider-config">, import("typebox").TLiteral<"all">]>>;
  }>;
  readonly ModelsListResult: import("typebox").TObject<{
    models: import("typebox").TArray<import("typebox").TObject<{
      id: import("typebox").TString;
      name: import("typebox").TString;
      provider: import("typebox").TString;
      alias: import("typebox").TOptional<import("typebox").TString>;
      available: import("typebox").TOptional<import("typebox").TBoolean>;
      contextWindow: import("typebox").TOptional<import("typebox").TInteger>;
      reasoning: import("typebox").TOptional<import("typebox").TBoolean>;
      agentRuntime: import("typebox").TOptional<import("typebox").TObject<{
        id: import("typebox").TString;
        fallback: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"openclaw">, import("typebox").TLiteral<"none">]>>;
        source: import("typebox").TUnion<[import("typebox").TLiteral<"env">, import("typebox").TLiteral<"agent">, import("typebox").TLiteral<"defaults">, import("typebox").TLiteral<"model">, import("typebox").TLiteral<"provider">, import("typebox").TLiteral<"implicit">, import("typebox").TLiteral<"session">, import("typebox").TLiteral<"session-key">]>;
      }>>;
      apiKeySupported: import("typebox").TOptional<import("typebox").TBoolean>;
      input: import("typebox").TOptional<import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"text">, import("typebox").TLiteral<"image">, import("typebox").TLiteral<"audio">, import("typebox").TLiteral<"video">, import("typebox").TLiteral<"document">]>>>;
    }>>;
  }>;
  readonly ModelsProbeParams: import("typebox").TObject<{
    provider: import("typebox").TString;
    profileId: import("typebox").TOptional<import("typebox").TString>;
    timeoutMs: import("typebox").TOptional<import("typebox").TInteger>;
    agentId: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly ModelsProbeTargetResult: import("typebox").TObject<{
    profileId: import("typebox").TOptional<import("typebox").TString>;
    label: import("typebox").TString;
    status: import("typebox").TUnion<[import("typebox").TLiteral<"ok">, import("typebox").TLiteral<"auth">, import("typebox").TLiteral<"rate_limit">, import("typebox").TLiteral<"billing">, import("typebox").TLiteral<"timeout">, import("typebox").TLiteral<"format">, import("typebox").TLiteral<"unknown">, import("typebox").TLiteral<"no_model">]>;
    latencyMs: import("typebox").TOptional<import("typebox").TInteger>;
    error: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly ModelsProbeResult: import("typebox").TObject<{
    provider: import("typebox").TString;
    status: import("typebox").TUnion<[import("typebox").TLiteral<"ok">, import("typebox").TLiteral<"auth">, import("typebox").TLiteral<"rate_limit">, import("typebox").TLiteral<"billing">, import("typebox").TLiteral<"timeout">, import("typebox").TLiteral<"format">, import("typebox").TLiteral<"unknown">, import("typebox").TLiteral<"no_model">]>;
    latencyMs: import("typebox").TOptional<import("typebox").TInteger>;
    error: import("typebox").TOptional<import("typebox").TString>;
    results: import("typebox").TArray<import("typebox").TObject<{
      profileId: import("typebox").TOptional<import("typebox").TString>;
      label: import("typebox").TString;
      status: import("typebox").TUnion<[import("typebox").TLiteral<"ok">, import("typebox").TLiteral<"auth">, import("typebox").TLiteral<"rate_limit">, import("typebox").TLiteral<"billing">, import("typebox").TLiteral<"timeout">, import("typebox").TLiteral<"format">, import("typebox").TLiteral<"unknown">, import("typebox").TLiteral<"no_model">]>;
      latencyMs: import("typebox").TOptional<import("typebox").TInteger>;
      error: import("typebox").TOptional<import("typebox").TString>;
    }>>;
  }>;
  readonly CommandEntry: import("typebox").TObject<{
    name: import("typebox").TString;
    nativeName: import("typebox").TOptional<import("typebox").TString>;
    textAliases: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    description: import("typebox").TString;
    category: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"session">, import("typebox").TLiteral<"options">, import("typebox").TLiteral<"status">, import("typebox").TLiteral<"management">, import("typebox").TLiteral<"media">, import("typebox").TLiteral<"tools">, import("typebox").TLiteral<"docks">]>>;
    source: import("typebox").TUnion<[import("typebox").TLiteral<"native">, import("typebox").TLiteral<"skill">, import("typebox").TLiteral<"plugin">]>;
    skillModelVisible: import("typebox").TOptional<import("typebox").TBoolean>;
    scope: import("typebox").TUnion<[import("typebox").TLiteral<"text">, import("typebox").TLiteral<"native">, import("typebox").TLiteral<"both">]>;
    acceptsArgs: import("typebox").TBoolean;
    args: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
      name: import("typebox").TString;
      description: import("typebox").TString;
      type: import("typebox").TUnion<[import("typebox").TLiteral<"string">, import("typebox").TLiteral<"number">, import("typebox").TLiteral<"boolean">]>;
      required: import("typebox").TOptional<import("typebox").TBoolean>;
      choices: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
        value: import("typebox").TString;
        label: import("typebox").TString;
      }>>>;
      dynamic: import("typebox").TOptional<import("typebox").TBoolean>;
    }>>>;
  }>;
  readonly CommandsListParams: import("typebox").TObject<{
    agentId: import("typebox").TOptional<import("typebox").TString>;
    provider: import("typebox").TOptional<import("typebox").TString>;
    scope: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"text">, import("typebox").TLiteral<"native">, import("typebox").TLiteral<"both">]>>;
    includeArgs: import("typebox").TOptional<import("typebox").TBoolean>;
  }>;
  readonly CommandsListResult: import("typebox").TObject<{
    commands: import("typebox").TArray<import("typebox").TObject<{
      name: import("typebox").TString;
      nativeName: import("typebox").TOptional<import("typebox").TString>;
      textAliases: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
      description: import("typebox").TString;
      category: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"session">, import("typebox").TLiteral<"options">, import("typebox").TLiteral<"status">, import("typebox").TLiteral<"management">, import("typebox").TLiteral<"media">, import("typebox").TLiteral<"tools">, import("typebox").TLiteral<"docks">]>>;
      source: import("typebox").TUnion<[import("typebox").TLiteral<"native">, import("typebox").TLiteral<"skill">, import("typebox").TLiteral<"plugin">]>;
      skillModelVisible: import("typebox").TOptional<import("typebox").TBoolean>;
      scope: import("typebox").TUnion<[import("typebox").TLiteral<"text">, import("typebox").TLiteral<"native">, import("typebox").TLiteral<"both">]>;
      acceptsArgs: import("typebox").TBoolean;
      args: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
        name: import("typebox").TString;
        description: import("typebox").TString;
        type: import("typebox").TUnion<[import("typebox").TLiteral<"string">, import("typebox").TLiteral<"number">, import("typebox").TLiteral<"boolean">]>;
        required: import("typebox").TOptional<import("typebox").TBoolean>;
        choices: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
          value: import("typebox").TString;
          label: import("typebox").TString;
        }>>>;
        dynamic: import("typebox").TOptional<import("typebox").TBoolean>;
      }>>>;
    }>>;
  }>;
  readonly SkillsStatusParams: import("typebox").TObject<{
    agentId: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly ToolsCatalogParams: import("typebox").TObject<{
    agentId: import("typebox").TOptional<import("typebox").TString>;
    includePlugins: import("typebox").TOptional<import("typebox").TBoolean>;
  }>;
  readonly ToolCatalogProfile: import("typebox").TObject<{
    id: import("typebox").TUnion<[import("typebox").TLiteral<"minimal">, import("typebox").TLiteral<"coding">, import("typebox").TLiteral<"messaging">, import("typebox").TLiteral<"full">]>;
    label: import("typebox").TString;
  }>;
  readonly ToolCatalogEntry: import("typebox").TObject<{
    id: import("typebox").TString;
    label: import("typebox").TString;
    description: import("typebox").TString;
    source: import("typebox").TUnion<[import("typebox").TLiteral<"core">, import("typebox").TLiteral<"plugin">]>;
    pluginId: import("typebox").TOptional<import("typebox").TString>;
    optional: import("typebox").TOptional<import("typebox").TBoolean>;
    risk: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"low">, import("typebox").TLiteral<"medium">, import("typebox").TLiteral<"high">]>>;
    tags: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    defaultProfiles: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"minimal">, import("typebox").TLiteral<"coding">, import("typebox").TLiteral<"messaging">, import("typebox").TLiteral<"full">]>>;
  }>;
  readonly ToolCatalogGroup: import("typebox").TObject<{
    id: import("typebox").TString;
    label: import("typebox").TString;
    source: import("typebox").TUnion<[import("typebox").TLiteral<"core">, import("typebox").TLiteral<"plugin">]>;
    pluginId: import("typebox").TOptional<import("typebox").TString>;
    tools: import("typebox").TArray<import("typebox").TObject<{
      id: import("typebox").TString;
      label: import("typebox").TString;
      description: import("typebox").TString;
      source: import("typebox").TUnion<[import("typebox").TLiteral<"core">, import("typebox").TLiteral<"plugin">]>;
      pluginId: import("typebox").TOptional<import("typebox").TString>;
      optional: import("typebox").TOptional<import("typebox").TBoolean>;
      risk: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"low">, import("typebox").TLiteral<"medium">, import("typebox").TLiteral<"high">]>>;
      tags: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
      defaultProfiles: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"minimal">, import("typebox").TLiteral<"coding">, import("typebox").TLiteral<"messaging">, import("typebox").TLiteral<"full">]>>;
    }>>;
  }>;
  readonly ToolsCatalogResult: import("typebox").TObject<{
    agentId: import("typebox").TString;
    profiles: import("typebox").TArray<import("typebox").TObject<{
      id: import("typebox").TUnion<[import("typebox").TLiteral<"minimal">, import("typebox").TLiteral<"coding">, import("typebox").TLiteral<"messaging">, import("typebox").TLiteral<"full">]>;
      label: import("typebox").TString;
    }>>;
    groups: import("typebox").TArray<import("typebox").TObject<{
      id: import("typebox").TString;
      label: import("typebox").TString;
      source: import("typebox").TUnion<[import("typebox").TLiteral<"core">, import("typebox").TLiteral<"plugin">]>;
      pluginId: import("typebox").TOptional<import("typebox").TString>;
      tools: import("typebox").TArray<import("typebox").TObject<{
        id: import("typebox").TString;
        label: import("typebox").TString;
        description: import("typebox").TString;
        source: import("typebox").TUnion<[import("typebox").TLiteral<"core">, import("typebox").TLiteral<"plugin">]>;
        pluginId: import("typebox").TOptional<import("typebox").TString>;
        optional: import("typebox").TOptional<import("typebox").TBoolean>;
        risk: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"low">, import("typebox").TLiteral<"medium">, import("typebox").TLiteral<"high">]>>;
        tags: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
        defaultProfiles: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"minimal">, import("typebox").TLiteral<"coding">, import("typebox").TLiteral<"messaging">, import("typebox").TLiteral<"full">]>>;
      }>>;
    }>>;
  }>;
  readonly ToolsEffectiveParams: import("typebox").TObject<{
    agentId: import("typebox").TOptional<import("typebox").TString>;
    sessionKey: import("typebox").TString;
  }>;
  readonly ToolsEffectiveEntry: import("typebox").TObject<{
    id: import("typebox").TString;
    label: import("typebox").TString;
    description: import("typebox").TString;
    rawDescription: import("typebox").TString;
    source: import("typebox").TUnion<[import("typebox").TLiteral<"core">, import("typebox").TLiteral<"plugin">, import("typebox").TLiteral<"channel">, import("typebox").TLiteral<"mcp">]>;
    pluginId: import("typebox").TOptional<import("typebox").TString>;
    channelId: import("typebox").TOptional<import("typebox").TString>;
    mcpServer: import("typebox").TOptional<import("typebox").TString>;
    mcpToolName: import("typebox").TOptional<import("typebox").TString>;
    deniedBySession: import("typebox").TOptional<import("typebox").TLiteral<true>>;
    risk: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"low">, import("typebox").TLiteral<"medium">, import("typebox").TLiteral<"high">]>>;
    tags: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
  }>;
  readonly ToolsEffectiveGroup: import("typebox").TObject<{
    id: import("typebox").TUnion<[import("typebox").TLiteral<"core">, import("typebox").TLiteral<"plugin">, import("typebox").TLiteral<"channel">, import("typebox").TLiteral<"mcp">]>;
    label: import("typebox").TString;
    source: import("typebox").TUnion<[import("typebox").TLiteral<"core">, import("typebox").TLiteral<"plugin">, import("typebox").TLiteral<"channel">, import("typebox").TLiteral<"mcp">]>;
    tools: import("typebox").TArray<import("typebox").TObject<{
      id: import("typebox").TString;
      label: import("typebox").TString;
      description: import("typebox").TString;
      rawDescription: import("typebox").TString;
      source: import("typebox").TUnion<[import("typebox").TLiteral<"core">, import("typebox").TLiteral<"plugin">, import("typebox").TLiteral<"channel">, import("typebox").TLiteral<"mcp">]>;
      pluginId: import("typebox").TOptional<import("typebox").TString>;
      channelId: import("typebox").TOptional<import("typebox").TString>;
      mcpServer: import("typebox").TOptional<import("typebox").TString>;
      mcpToolName: import("typebox").TOptional<import("typebox").TString>;
      deniedBySession: import("typebox").TOptional<import("typebox").TLiteral<true>>;
      risk: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"low">, import("typebox").TLiteral<"medium">, import("typebox").TLiteral<"high">]>>;
      tags: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    }>>;
  }>;
  readonly ToolsEffectiveNotice: import("typebox").TObject<{
    id: import("typebox").TString;
    severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">]>;
    message: import("typebox").TString;
    servers: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
  }>;
  readonly ToolsEffectiveResult: import("typebox").TObject<{
    agentId: import("typebox").TString;
    profile: import("typebox").TString;
    groups: import("typebox").TArray<import("typebox").TObject<{
      id: import("typebox").TUnion<[import("typebox").TLiteral<"core">, import("typebox").TLiteral<"plugin">, import("typebox").TLiteral<"channel">, import("typebox").TLiteral<"mcp">]>;
      label: import("typebox").TString;
      source: import("typebox").TUnion<[import("typebox").TLiteral<"core">, import("typebox").TLiteral<"plugin">, import("typebox").TLiteral<"channel">, import("typebox").TLiteral<"mcp">]>;
      tools: import("typebox").TArray<import("typebox").TObject<{
        id: import("typebox").TString;
        label: import("typebox").TString;
        description: import("typebox").TString;
        rawDescription: import("typebox").TString;
        source: import("typebox").TUnion<[import("typebox").TLiteral<"core">, import("typebox").TLiteral<"plugin">, import("typebox").TLiteral<"channel">, import("typebox").TLiteral<"mcp">]>;
        pluginId: import("typebox").TOptional<import("typebox").TString>;
        channelId: import("typebox").TOptional<import("typebox").TString>;
        mcpServer: import("typebox").TOptional<import("typebox").TString>;
        mcpToolName: import("typebox").TOptional<import("typebox").TString>;
        deniedBySession: import("typebox").TOptional<import("typebox").TLiteral<true>>;
        risk: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"low">, import("typebox").TLiteral<"medium">, import("typebox").TLiteral<"high">]>>;
        tags: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
      }>>;
    }>>;
    notices: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
      id: import("typebox").TString;
      severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">]>;
      message: import("typebox").TString;
      servers: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    }>>>;
  }>;
  readonly ToolsInvokeParams: import("typebox").TObject<{
    name: import("typebox").TString;
    args: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TUnknown>>;
    sessionKey: import("typebox").TOptional<import("typebox").TString>;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    confirm: import("typebox").TOptional<import("typebox").TBoolean>;
    idempotencyKey: import("typebox").TOptional<import("typebox").TString>;
    conversationReadOrigin: import("typebox").TOptional<import("typebox").TLiteral<"direct-operator">>;
  }>;
  readonly ToolsInvokeError: import("typebox").TObject<{
    code: import("typebox").TString;
    message: import("typebox").TString;
    details: import("typebox").TOptional<import("typebox").TUnknown>;
  }>;
  readonly ToolsInvokeResult: import("typebox").TObject<{
    ok: import("typebox").TBoolean;
    toolName: import("typebox").TString;
    output: import("typebox").TOptional<import("typebox").TUnknown>;
    requiresApproval: import("typebox").TOptional<import("typebox").TBoolean>;
    approvalId: import("typebox").TOptional<import("typebox").TString>;
    source: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"core">, import("typebox").TLiteral<"plugin">, import("typebox").TLiteral<"mcp">, import("typebox").TLiteral<"channel">, import("typebox").TString]>>;
    error: import("typebox").TOptional<import("typebox").TObject<{
      code: import("typebox").TString;
      message: import("typebox").TString;
      details: import("typebox").TOptional<import("typebox").TUnknown>;
    }>>;
  }>;
  readonly SkillsBinsParams: import("typebox").TObject<{}>;
  readonly SkillsBinsResult: import("typebox").TObject<{
    bins: import("typebox").TArray<import("typebox").TString>;
  }>;
  readonly SkillsSearchParams: import("typebox").TObject<{
    query: import("typebox").TOptional<import("typebox").TString>;
    limit: import("typebox").TOptional<import("typebox").TInteger>;
  }>;
  readonly SkillsSearchResult: import("typebox").TObject<{
    results: import("typebox").TArray<import("typebox").TObject<{
      score: import("typebox").TNumber;
      slug: import("typebox").TString;
      displayName: import("typebox").TString;
      summary: import("typebox").TOptional<import("typebox").TString>;
      version: import("typebox").TOptional<import("typebox").TString>;
      updatedAt: import("typebox").TOptional<import("typebox").TInteger>;
    }>>;
  }>;
  readonly SkillsDetailParams: import("typebox").TObject<{
    slug: import("typebox").TString;
  }>;
  readonly SkillsDetailResult: import("typebox").TObject<{
    skill: import("typebox").TUnion<[import("typebox").TObject<{
      slug: import("typebox").TString;
      displayName: import("typebox").TString;
      summary: import("typebox").TOptional<import("typebox").TString>;
      tags: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TString>>;
      channel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      isOfficial: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TBoolean, import("typebox").TNull]>>;
      createdAt: import("typebox").TInteger;
      updatedAt: import("typebox").TInteger;
    }>, import("typebox").TNull]>;
    latestVersion: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TObject<{
      version: import("typebox").TString;
      createdAt: import("typebox").TInteger;
      changelog: import("typebox").TOptional<import("typebox").TString>;
    }>, import("typebox").TNull]>>;
    metadata: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TObject<{
      os: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TArray<import("typebox").TString>, import("typebox").TNull]>>;
      systems: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TArray<import("typebox").TString>, import("typebox").TNull]>>;
    }>, import("typebox").TNull]>>;
    owner: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TObject<{
      handle: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      displayName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      image: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      official: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TBoolean, import("typebox").TNull]>>;
      channel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      isOfficial: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TBoolean, import("typebox").TNull]>>;
    }>, import("typebox").TNull]>>;
  }>;
  readonly SkillsCuratorActionParams: import("typebox").TObject<{
    skill: import("typebox").TString;
  }>;
  readonly SkillsCuratorActionResult: import("typebox").TObject<{
    skillFile: import("typebox").TString;
    skillKey: import("typebox").TString;
    skillName: import("typebox").TString;
    state: import("typebox").TUnion<[import("typebox").TLiteral<"active">, import("typebox").TLiteral<"stale">, import("typebox").TLiteral<"archived">]>;
    pinned: import("typebox").TBoolean;
    createdAtMs: import("typebox").TNumber;
    stateChangedAtMs: import("typebox").TNumber;
    lastUsedAtMs: import("typebox").TUnion<[import("typebox").TNumber, import("typebox").TNull]>;
    useCount: import("typebox").TNumber;
    archivedReason: import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>;
  }>;
  readonly SkillsCuratorStatusParams: import("typebox").TObject<{}>;
  readonly SkillsCuratorStatusResult: import("typebox").TObject<{
    lastAttemptAtMs: import("typebox").TUnion<[import("typebox").TNumber, import("typebox").TNull]>;
    lastSuccessAtMs: import("typebox").TUnion<[import("typebox").TNumber, import("typebox").TNull]>;
    lastError: import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>;
    counts: import("typebox").TObject<{
      active: import("typebox").TNumber;
      stale: import("typebox").TNumber;
      archived: import("typebox").TNumber;
    }>;
    skills: import("typebox").TArray<import("typebox").TObject<{
      skillFile: import("typebox").TString;
      skillKey: import("typebox").TString;
      skillName: import("typebox").TString;
      state: import("typebox").TUnion<[import("typebox").TLiteral<"active">, import("typebox").TLiteral<"stale">, import("typebox").TLiteral<"archived">]>;
      pinned: import("typebox").TBoolean;
      createdAtMs: import("typebox").TNumber;
      stateChangedAtMs: import("typebox").TNumber;
      lastUsedAtMs: import("typebox").TUnion<[import("typebox").TNumber, import("typebox").TNull]>;
      useCount: import("typebox").TNumber;
      archivedReason: import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>;
    }>>;
    overlaps: import("typebox").TArray<import("typebox").TObject<{
      left: import("typebox").TString;
      right: import("typebox").TString;
      score: import("typebox").TNumber;
    }>>;
  }>;
} & {
  readonly TerminalOpenParams: import("typebox").TObject<{
    agentId: import("typebox").TOptional<import("typebox").TString>;
    catalog: import("typebox").TOptional<import("typebox").TObject<{
      catalogId: import("typebox").TString;
      hostId: import("typebox").TString;
      threadId: import("typebox").TString;
    }>>;
    cols: import("typebox").TInteger;
    rows: import("typebox").TInteger;
  }>;
  readonly TerminalOpenResult: import("typebox").TObject<{
    sessionId: import("typebox").TString;
    agentId: import("typebox").TString;
    shell: import("typebox").TString;
    cwd: import("typebox").TString;
    confined: import("typebox").TBoolean;
    title: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly TerminalInputParams: import("typebox").TObject<{
    sessionId: import("typebox").TString;
    data: import("typebox").TString;
  }>;
  readonly TerminalResizeParams: import("typebox").TObject<{
    sessionId: import("typebox").TString;
    cols: import("typebox").TInteger;
    rows: import("typebox").TInteger;
  }>;
  readonly TerminalCloseParams: import("typebox").TObject<{
    sessionId: import("typebox").TString;
  }>;
  readonly TerminalAttachParams: import("typebox").TObject<{
    sessionId: import("typebox").TString;
  }>;
  readonly TerminalAttachResult: import("typebox").TObject<{
    sessionId: import("typebox").TString;
    agentId: import("typebox").TString;
    shell: import("typebox").TString;
    cwd: import("typebox").TString;
    confined: import("typebox").TBoolean;
    buffer: import("typebox").TString;
    seq: import("typebox").TOptional<import("typebox").TInteger>;
  }>;
  readonly TerminalSessionInfo: import("typebox").TObject<{
    sessionId: import("typebox").TString;
    agentId: import("typebox").TString;
    shell: import("typebox").TString;
    cwd: import("typebox").TString;
    confined: import("typebox").TBoolean;
    attached: import("typebox").TBoolean;
    owner: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"conn">, import("typebox").TString]>>;
    createdAtMs: import("typebox").TInteger;
  }>;
  readonly TerminalListResult: import("typebox").TObject<{
    sessions: import("typebox").TArray<import("typebox").TObject<{
      sessionId: import("typebox").TString;
      agentId: import("typebox").TString;
      shell: import("typebox").TString;
      cwd: import("typebox").TString;
      confined: import("typebox").TBoolean;
      attached: import("typebox").TBoolean;
      owner: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"conn">, import("typebox").TString]>>;
      createdAtMs: import("typebox").TInteger;
    }>>;
  }>;
  readonly TerminalTextParams: import("typebox").TObject<{
    sessionId: import("typebox").TString;
  }>;
  readonly TerminalTextResult: import("typebox").TObject<{
    text: import("typebox").TString;
  }>;
  readonly TerminalUploadParams: import("typebox").TObject<{
    sessionId: import("typebox").TString;
    name: import("typebox").TString;
    contentBase64: import("typebox").TString;
  }>;
  readonly TerminalUploadResult: import("typebox").TObject<{
    path: import("typebox").TString;
    size: import("typebox").TInteger;
  }>;
  readonly TerminalAckResult: import("typebox").TObject<{
    ok: import("typebox").TBoolean;
  }>;
  readonly TerminalDataEvent: import("typebox").TObject<{
    sessionId: import("typebox").TString;
    seq: import("typebox").TInteger;
    data: import("typebox").TString;
  }>;
  readonly TerminalExitEvent: import("typebox").TObject<{
    sessionId: import("typebox").TString;
    exitCode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TInteger, import("typebox").TNull]>>;
    signal: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TInteger, import("typebox").TNull]>>;
    reason: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"process_exit">, import("typebox").TLiteral<"closed">, import("typebox").TLiteral<"disconnected">, import("typebox").TLiteral<"detached">, import("typebox").TLiteral<"error">]>>;
    error: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly TerminalEvent: import("typebox").TUnion<[import("typebox").TObject<{
    sessionId: import("typebox").TString;
    seq: import("typebox").TInteger;
    data: import("typebox").TString;
  }>, import("typebox").TObject<{
    sessionId: import("typebox").TString;
    exitCode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TInteger, import("typebox").TNull]>>;
    signal: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TInteger, import("typebox").TNull]>>;
    reason: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"process_exit">, import("typebox").TLiteral<"closed">, import("typebox").TLiteral<"disconnected">, import("typebox").TLiteral<"detached">, import("typebox").TLiteral<"error">]>>;
    error: import("typebox").TOptional<import("typebox").TString>;
  }>]>;
  readonly MemoryMigrationItemStatus: import("typebox").TUnion<[import("typebox").TLiteral<"planned">, import("typebox").TLiteral<"migrated">, import("typebox").TLiteral<"skipped">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"conflict">, import("typebox").TLiteral<"error">]>;
  readonly MemoryMigrationItem: import("typebox").TObject<{
    id: import("typebox").TString;
    status: import("typebox").TUnion<[import("typebox").TLiteral<"planned">, import("typebox").TLiteral<"migrated">, import("typebox").TLiteral<"skipped">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"conflict">, import("typebox").TLiteral<"error">]>;
    source: import("typebox").TOptional<import("typebox").TString>;
    target: import("typebox").TOptional<import("typebox").TString>;
    message: import("typebox").TOptional<import("typebox").TString>;
    reason: import("typebox").TOptional<import("typebox").TString>;
    details: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TUnknown>>;
  }>;
  readonly MemoryMigrationSummary: import("typebox").TObject<{
    total: import("typebox").TInteger;
    planned: import("typebox").TInteger;
    migrated: import("typebox").TInteger;
    skipped: import("typebox").TInteger;
    conflicts: import("typebox").TInteger;
    errors: import("typebox").TInteger;
    sensitive: import("typebox").TInteger;
  }>;
  readonly MemoryMigrationProviderPlan: import("typebox").TObject<{
    providerId: import("typebox").TString;
    label: import("typebox").TString;
    description: import("typebox").TOptional<import("typebox").TString>;
    planFingerprint: import("typebox").TOptional<import("typebox").TString>;
    found: import("typebox").TBoolean;
    source: import("typebox").TOptional<import("typebox").TString>;
    target: import("typebox").TOptional<import("typebox").TString>;
    confidence: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"low">, import("typebox").TLiteral<"medium">, import("typebox").TLiteral<"high">]>>;
    message: import("typebox").TOptional<import("typebox").TString>;
    error: import("typebox").TOptional<import("typebox").TString>;
    summary: import("typebox").TObject<{
      total: import("typebox").TInteger;
      planned: import("typebox").TInteger;
      migrated: import("typebox").TInteger;
      skipped: import("typebox").TInteger;
      conflicts: import("typebox").TInteger;
      errors: import("typebox").TInteger;
      sensitive: import("typebox").TInteger;
    }>;
    items: import("typebox").TArray<import("typebox").TObject<{
      id: import("typebox").TString;
      status: import("typebox").TUnion<[import("typebox").TLiteral<"planned">, import("typebox").TLiteral<"migrated">, import("typebox").TLiteral<"skipped">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"conflict">, import("typebox").TLiteral<"error">]>;
      source: import("typebox").TOptional<import("typebox").TString>;
      target: import("typebox").TOptional<import("typebox").TString>;
      message: import("typebox").TOptional<import("typebox").TString>;
      reason: import("typebox").TOptional<import("typebox").TString>;
      details: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TUnknown>>;
    }>>;
    warnings: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
  }>;
  readonly MigrationsMemoryPlanParams: import("typebox").TObject<{
    agentId: import("typebox").TString;
    overwrite: import("typebox").TOptional<import("typebox").TBoolean>;
  }>;
  readonly MigrationsMemoryPlanResult: import("typebox").TObject<{
    agentId: import("typebox").TString;
    workspace: import("typebox").TString;
    providers: import("typebox").TArray<import("typebox").TObject<{
      providerId: import("typebox").TString;
      label: import("typebox").TString;
      description: import("typebox").TOptional<import("typebox").TString>;
      planFingerprint: import("typebox").TOptional<import("typebox").TString>;
      found: import("typebox").TBoolean;
      source: import("typebox").TOptional<import("typebox").TString>;
      target: import("typebox").TOptional<import("typebox").TString>;
      confidence: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"low">, import("typebox").TLiteral<"medium">, import("typebox").TLiteral<"high">]>>;
      message: import("typebox").TOptional<import("typebox").TString>;
      error: import("typebox").TOptional<import("typebox").TString>;
      summary: import("typebox").TObject<{
        total: import("typebox").TInteger;
        planned: import("typebox").TInteger;
        migrated: import("typebox").TInteger;
        skipped: import("typebox").TInteger;
        conflicts: import("typebox").TInteger;
        errors: import("typebox").TInteger;
        sensitive: import("typebox").TInteger;
      }>;
      items: import("typebox").TArray<import("typebox").TObject<{
        id: import("typebox").TString;
        status: import("typebox").TUnion<[import("typebox").TLiteral<"planned">, import("typebox").TLiteral<"migrated">, import("typebox").TLiteral<"skipped">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"conflict">, import("typebox").TLiteral<"error">]>;
        source: import("typebox").TOptional<import("typebox").TString>;
        target: import("typebox").TOptional<import("typebox").TString>;
        message: import("typebox").TOptional<import("typebox").TString>;
        reason: import("typebox").TOptional<import("typebox").TString>;
        details: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TUnknown>>;
      }>>;
      warnings: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    }>>;
  }>;
  readonly MigrationsMemoryApplyParams: import("typebox").TObject<{
    idempotencyKey: import("typebox").TString;
    agentId: import("typebox").TString;
    providerId: import("typebox").TString;
    planFingerprint: import("typebox").TString;
    itemIds: import("typebox").TArray<import("typebox").TString>;
    overwrite: import("typebox").TOptional<import("typebox").TBoolean>;
  }>;
  readonly MigrationsMemoryApplyResult: import("typebox").TObject<{
    providerId: import("typebox").TString;
    source: import("typebox").TString;
    target: import("typebox").TOptional<import("typebox").TString>;
    summary: import("typebox").TObject<{
      total: import("typebox").TInteger;
      planned: import("typebox").TInteger;
      migrated: import("typebox").TInteger;
      skipped: import("typebox").TInteger;
      conflicts: import("typebox").TInteger;
      errors: import("typebox").TInteger;
      sensitive: import("typebox").TInteger;
    }>;
    items: import("typebox").TArray<import("typebox").TObject<{
      id: import("typebox").TString;
      status: import("typebox").TUnion<[import("typebox").TLiteral<"planned">, import("typebox").TLiteral<"migrated">, import("typebox").TLiteral<"skipped">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"conflict">, import("typebox").TLiteral<"error">]>;
      source: import("typebox").TOptional<import("typebox").TString>;
      target: import("typebox").TOptional<import("typebox").TString>;
      message: import("typebox").TOptional<import("typebox").TString>;
      reason: import("typebox").TOptional<import("typebox").TString>;
      details: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TUnknown>>;
    }>>;
    warnings: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    backupPath: import("typebox").TOptional<import("typebox").TString>;
    reportDir: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly LogsTailParams: import("typebox").TObject<{
    cursor: import("typebox").TOptional<import("typebox").TInteger>;
    limit: import("typebox").TOptional<import("typebox").TInteger>;
    maxBytes: import("typebox").TOptional<import("typebox").TInteger>;
  }>;
  readonly LogsTailResult: import("typebox").TObject<{
    file: import("typebox").TString;
    cursor: import("typebox").TInteger;
    size: import("typebox").TInteger;
    lines: import("typebox").TArray<import("typebox").TString>;
    truncated: import("typebox").TOptional<import("typebox").TBoolean>;
    reset: import("typebox").TOptional<import("typebox").TBoolean>;
  }>;
  readonly CronJob: import("typebox").TObject<{
    id: import("typebox").TString;
    declarationKey: import("typebox").TOptional<import("typebox").TString>;
    displayName: import("typebox").TOptional<import("typebox").TString>;
    owner: import("typebox").TOptional<import("typebox").TObject<{
      agentId: import("typebox").TOptional<import("typebox").TString>;
      sessionKey: import("typebox").TOptional<import("typebox").TString>;
      accountId: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    scheduledToolPolicy: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TObject<{
      version: import("typebox").TLiteral<1>;
      mode: import("typebox").TLiteral<"trusted">;
    }>, import("typebox").TObject<{
      version: import("typebox").TLiteral<1>;
      mode: import("typebox").TLiteral<"account">;
      ownerSessionKey: import("typebox").TString;
      ownerAccountId: import("typebox").TString;
    }>]>>;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    sessionKey: import("typebox").TOptional<import("typebox").TString>;
    name: import("typebox").TString;
    description: import("typebox").TOptional<import("typebox").TString>;
    enabled: import("typebox").TBoolean;
    deleteAfterRun: import("typebox").TOptional<import("typebox").TBoolean>;
    createdAtMs: import("typebox").TInteger;
    updatedAtMs: import("typebox").TInteger;
    configRevision: import("typebox").TOptional<import("typebox").TString>;
    schedule: import("typebox").TUnion<[import("typebox").TObject<{
      kind: import("typebox").TLiteral<"at">;
      at: import("typebox").TString;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"every">;
      everyMs: import("typebox").TInteger;
      anchorMs: import("typebox").TOptional<import("typebox").TInteger>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"cron">;
      expr: import("typebox").TString;
      tz: import("typebox").TOptional<import("typebox").TString>;
      staggerMs: import("typebox").TOptional<import("typebox").TInteger>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"on-exit">;
      command: import("typebox").TString;
      cwd: import("typebox").TOptional<import("typebox").TString>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"stream">;
      command: import("typebox").TArray<import("typebox").TString>;
      cwd: import("typebox").TOptional<import("typebox").TString>;
      mode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"line">, import("typebox").TLiteral<"match">]>>;
      match: import("typebox").TOptional<import("typebox").TString>;
      batchMs: import("typebox").TOptional<import("typebox").TInteger>;
      maxBatchBytes: import("typebox").TOptional<import("typebox").TInteger>;
    }>]>;
    pacing: import("typebox").TOptional<import("typebox").TObject<{
      min: import("typebox").TOptional<import("typebox").TString>;
      max: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    trigger: import("typebox").TOptional<import("typebox").TObject<{
      script: import("typebox").TString;
      once: import("typebox").TOptional<import("typebox").TBoolean>;
    }>>;
    sessionTarget: import("typebox").TUnion<[import("typebox").TLiteral<"main">, import("typebox").TLiteral<"isolated">, import("typebox").TLiteral<"current">, import("typebox").TString]>;
    wakeMode: import("typebox").TUnion<[import("typebox").TLiteral<"next-heartbeat">, import("typebox").TLiteral<"now">]>;
    payload: import("typebox").TUnion<[import("typebox").TObject<{
      kind: import("typebox").TLiteral<"systemEvent">;
      text: import("typebox").TString;
      toolsAllow: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
      toolsAllowIsDefault: import("typebox").TOptional<import("typebox").TBoolean>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"agentTurn">;
      message: import("typebox").TSchema;
      model: import("typebox").TOptional<import("typebox").TSchema>;
      fallbacks: import("typebox").TOptional<import("typebox").TSchema>;
      thinking: import("typebox").TOptional<import("typebox").TSchema>;
      timeoutSeconds: import("typebox").TOptional<import("typebox").TNumber>;
      allowUnsafeExternalContent: import("typebox").TOptional<import("typebox").TBoolean>;
      lightContext: import("typebox").TOptional<import("typebox").TBoolean>;
      toolsAllow: import("typebox").TOptional<import("typebox").TSchema>;
      toolsAllowIsDefault: import("typebox").TOptional<import("typebox").TBoolean>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"command">;
      argv: import("typebox").TSchema;
      cwd: import("typebox").TOptional<import("typebox").TString>;
      env: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TString>>;
      input: import("typebox").TOptional<import("typebox").TString>;
      timeoutSeconds: import("typebox").TOptional<import("typebox").TNumber>;
      noOutputTimeoutSeconds: import("typebox").TOptional<import("typebox").TNumber>;
      outputMaxBytes: import("typebox").TOptional<import("typebox").TInteger>;
      toolsAllow: import("typebox").TOptional<import("typebox").TSchema>;
      toolsAllowIsDefault: import("typebox").TOptional<import("typebox").TBoolean>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"script">;
      script: import("typebox").TSchema;
      timeoutSeconds: import("typebox").TOptional<import("typebox").TNumber>;
      toolBudget: import("typebox").TOptional<import("typebox").TInteger>;
      toolsAllow: import("typebox").TOptional<import("typebox").TSchema>;
      toolsAllowIsDefault: import("typebox").TOptional<import("typebox").TBoolean>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"heartbeat">;
    }>]>;
    delivery: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TObject<{
      to: import("typebox").TOptional<import("typebox").TString>;
      channel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"last">, import("typebox").TString]>>;
      threadId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNumber]>>;
      accountId: import("typebox").TOptional<import("typebox").TString>;
      bestEffort: import("typebox").TOptional<import("typebox").TBoolean>;
      failureDestination: import("typebox").TOptional<import("typebox").TObject<{
        channel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"last">, import("typebox").TString]>>;
        to: import("typebox").TOptional<import("typebox").TString>;
        accountId: import("typebox").TOptional<import("typebox").TString>;
        mode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"announce">, import("typebox").TLiteral<"webhook">]>>;
      }>>;
      mode: import("typebox").TLiteral<"none">;
    }>, import("typebox").TObject<{
      completionDestination: import("typebox").TOptional<import("typebox").TObject<{
        mode: import("typebox").TLiteral<"webhook">;
        to: import("typebox").TString;
      }>>;
      to: import("typebox").TOptional<import("typebox").TString>;
      channel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"last">, import("typebox").TString]>>;
      threadId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNumber]>>;
      accountId: import("typebox").TOptional<import("typebox").TString>;
      bestEffort: import("typebox").TOptional<import("typebox").TBoolean>;
      failureDestination: import("typebox").TOptional<import("typebox").TObject<{
        channel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"last">, import("typebox").TString]>>;
        to: import("typebox").TOptional<import("typebox").TString>;
        accountId: import("typebox").TOptional<import("typebox").TString>;
        mode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"announce">, import("typebox").TLiteral<"webhook">]>>;
      }>>;
      mode: import("typebox").TLiteral<"announce">;
    }>, import("typebox").TObject<{
      to: import("typebox").TString;
      channel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"last">, import("typebox").TString]>>;
      threadId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNumber]>>;
      accountId: import("typebox").TOptional<import("typebox").TString>;
      bestEffort: import("typebox").TOptional<import("typebox").TBoolean>;
      failureDestination: import("typebox").TOptional<import("typebox").TObject<{
        channel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"last">, import("typebox").TString]>>;
        to: import("typebox").TOptional<import("typebox").TString>;
        accountId: import("typebox").TOptional<import("typebox").TString>;
        mode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"announce">, import("typebox").TLiteral<"webhook">]>>;
      }>>;
      mode: import("typebox").TLiteral<"webhook">;
    }>]>>;
    failureAlert: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<false>, import("typebox").TObject<{
      after: import("typebox").TOptional<import("typebox").TInteger>;
      channel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"last">, import("typebox").TString]>>;
      to: import("typebox").TOptional<import("typebox").TString>;
      cooldownMs: import("typebox").TOptional<import("typebox").TInteger>;
      includeSkipped: import("typebox").TOptional<import("typebox").TBoolean>;
      mode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"announce">, import("typebox").TLiteral<"webhook">]>>;
      accountId: import("typebox").TOptional<import("typebox").TString>;
    }>]>>;
    state: import("typebox").TObject<{
      nextRunAtMs: import("typebox").TOptional<import("typebox").TInteger>;
      scheduleActivatedAtMs: import("typebox").TOptional<import("typebox").TInteger>;
      runningAtMs: import("typebox").TOptional<import("typebox").TInteger>;
      lastRunAtMs: import("typebox").TOptional<import("typebox").TInteger>;
      lastRunStatus: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"ok">, import("typebox").TLiteral<"error">, import("typebox").TLiteral<"skipped">]>>;
      lastStatus: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"ok">, import("typebox").TLiteral<"error">, import("typebox").TLiteral<"skipped">]>>;
      lastError: import("typebox").TOptional<import("typebox").TString>;
      lastDiagnostics: import("typebox").TOptional<import("typebox").TObject<{
        summary: import("typebox").TOptional<import("typebox").TString>;
        entries: import("typebox").TArray<import("typebox").TObject<{
          ts: import("typebox").TInteger;
          source: import("typebox").TUnion<[import("typebox").TLiteral<"cron-preflight">, import("typebox").TLiteral<"cron-setup">, import("typebox").TLiteral<"model-preflight">, import("typebox").TLiteral<"agent-run">, import("typebox").TLiteral<"tool">, import("typebox").TLiteral<"exec">, import("typebox").TLiteral<"delivery">]>;
          severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warn">, import("typebox").TLiteral<"error">]>;
          message: import("typebox").TString;
          toolName: import("typebox").TOptional<import("typebox").TString>;
          exitCode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TNumber, import("typebox").TNull]>>;
          truncated: import("typebox").TOptional<import("typebox").TBoolean>;
        }>>;
      }>>;
      lastDiagnosticSummary: import("typebox").TOptional<import("typebox").TString>;
      lastErrorReason: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"auth">, import("typebox").TLiteral<"auth_permanent">, import("typebox").TLiteral<"format">, import("typebox").TLiteral<"rate_limit">, import("typebox").TLiteral<"overloaded">, import("typebox").TLiteral<"billing">, import("typebox").TLiteral<"server_error">, import("typebox").TLiteral<"timeout">, import("typebox").TLiteral<"context_overflow">, import("typebox").TLiteral<"model_not_found">, import("typebox").TLiteral<"session_expired">, import("typebox").TLiteral<"empty_response">, import("typebox").TLiteral<"no_error_details">, import("typebox").TLiteral<"unclassified">, import("typebox").TLiteral<"unknown">]>>;
      lastDurationMs: import("typebox").TOptional<import("typebox").TInteger>;
      consecutiveErrors: import("typebox").TOptional<import("typebox").TInteger>;
      consecutiveSkipped: import("typebox").TOptional<import("typebox").TInteger>;
      lastDelivered: import("typebox").TOptional<import("typebox").TBoolean>;
      lastDeliveryStatus: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"delivered">, import("typebox").TLiteral<"not-delivered">, import("typebox").TLiteral<"unknown">, import("typebox").TLiteral<"not-requested">]>>;
      lastDeliveryError: import("typebox").TOptional<import("typebox").TString>;
      lastFailureNotificationDelivered: import("typebox").TOptional<import("typebox").TBoolean>;
      lastFailureNotificationDeliveryStatus: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"delivered">, import("typebox").TLiteral<"not-delivered">, import("typebox").TLiteral<"unknown">, import("typebox").TLiteral<"not-requested">]>>;
      lastFailureNotificationDeliveryError: import("typebox").TOptional<import("typebox").TString>;
      lastFailureAlertAtMs: import("typebox").TOptional<import("typebox").TInteger>;
      lastTriggerEvalAtMs: import("typebox").TOptional<import("typebox").TInteger>;
      triggerEvalCount: import("typebox").TOptional<import("typebox").TInteger>;
      lastTriggerFireAtMs: import("typebox").TOptional<import("typebox").TInteger>;
      triggerState: import("typebox").TOptional<import("typebox").TUnknown>;
      streamStatus: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"starting">, import("typebox").TLiteral<"running">, import("typebox").TLiteral<"restarting">, import("typebox").TLiteral<"stopped">, import("typebox").TLiteral<"disabled">, import("typebox").TLiteral<"error">]>>;
      streamError: import("typebox").TOptional<import("typebox").TString>;
      streamConsecutiveFailures: import("typebox").TOptional<import("typebox").TInteger>;
      streamRestartExhausted: import("typebox").TOptional<import("typebox").TBoolean>;
      streamSourceIdentity: import("typebox").TOptional<import("typebox").TString>;
      streamDroppedBatches: import("typebox").TOptional<import("typebox").TInteger>;
      streamCoalescedBatches: import("typebox").TOptional<import("typebox").TInteger>;
      streamLastStartedAtMs: import("typebox").TOptional<import("typebox").TInteger>;
      streamLastExitAtMs: import("typebox").TOptional<import("typebox").TInteger>;
    }>;
    nextRunAtMs: import("typebox").TOptional<import("typebox").TInteger>;
    lastRunAtMs: import("typebox").TOptional<import("typebox").TInteger>;
    lastRunStatus: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"ok">, import("typebox").TLiteral<"error">, import("typebox").TLiteral<"skipped">]>>;
    lastRunError: import("typebox").TOptional<import("typebox").TString>;
    lastDelivered: import("typebox").TOptional<import("typebox").TBoolean>;
    lastDeliveryStatus: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"delivered">, import("typebox").TLiteral<"not-delivered">, import("typebox").TLiteral<"unknown">, import("typebox").TLiteral<"not-requested">]>>;
    lastDeliveryError: import("typebox").TOptional<import("typebox").TString>;
    lastFailureNotificationDelivered: import("typebox").TOptional<import("typebox").TBoolean>;
    lastFailureNotificationDeliveryStatus: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"delivered">, import("typebox").TLiteral<"not-delivered">, import("typebox").TLiteral<"unknown">, import("typebox").TLiteral<"not-requested">]>>;
    lastFailureNotificationDeliveryError: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly CronListParams: import("typebox").TObject<{
    includeDisabled: import("typebox").TOptional<import("typebox").TBoolean>;
    limit: import("typebox").TOptional<import("typebox").TInteger>;
    offset: import("typebox").TOptional<import("typebox").TInteger>;
    query: import("typebox").TOptional<import("typebox").TString>;
    enabled: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"all">, import("typebox").TLiteral<"enabled">, import("typebox").TLiteral<"disabled">]>>;
    scheduleKind: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"all">, import("typebox").TLiteral<"at">, import("typebox").TLiteral<"every">, import("typebox").TLiteral<"cron">, import("typebox").TLiteral<"on-exit">, import("typebox").TLiteral<"stream">]>>;
    lastRunStatus: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"all">, import("typebox").TLiteral<"ok">, import("typebox").TLiteral<"error">, import("typebox").TLiteral<"skipped">, import("typebox").TLiteral<"unknown">]>>;
    sortBy: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"nextRunAtMs">, import("typebox").TLiteral<"updatedAtMs">, import("typebox").TLiteral<"name">]>>;
    sortDir: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"asc">, import("typebox").TLiteral<"desc">]>>;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    compact: import("typebox").TOptional<import("typebox").TBoolean>;
    includeDeliveryPreviews: import("typebox").TOptional<import("typebox").TBoolean>;
  }>;
  readonly CronStatusParams: import("typebox").TObject<{}>;
  readonly CronGetParams: import("typebox").TUnion<[import("typebox").TObject<{
    id: import("typebox").TString;
  }>, import("typebox").TObject<{
    jobId: import("typebox").TString;
  }>]>;
  readonly CronAddParams: import("typebox").TObject<{
    schedule: import("typebox").TUnion<[import("typebox").TObject<{
      kind: import("typebox").TLiteral<"at">;
      at: import("typebox").TString;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"every">;
      everyMs: import("typebox").TInteger;
      anchorMs: import("typebox").TOptional<import("typebox").TInteger>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"cron">;
      expr: import("typebox").TString;
      tz: import("typebox").TOptional<import("typebox").TString>;
      staggerMs: import("typebox").TOptional<import("typebox").TInteger>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"on-exit">;
      command: import("typebox").TString;
      cwd: import("typebox").TOptional<import("typebox").TString>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"stream">;
      command: import("typebox").TArray<import("typebox").TString>;
      cwd: import("typebox").TOptional<import("typebox").TString>;
      mode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"line">, import("typebox").TLiteral<"match">]>>;
      match: import("typebox").TOptional<import("typebox").TString>;
      batchMs: import("typebox").TOptional<import("typebox").TInteger>;
      maxBatchBytes: import("typebox").TOptional<import("typebox").TInteger>;
    }>]>;
    pacing: import("typebox").TOptional<import("typebox").TObject<{
      min: import("typebox").TOptional<import("typebox").TString>;
      max: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    trigger: import("typebox").TOptional<import("typebox").TObject<{
      script: import("typebox").TString;
      once: import("typebox").TOptional<import("typebox").TBoolean>;
    }>>;
    sessionTarget: import("typebox").TUnion<[import("typebox").TLiteral<"main">, import("typebox").TLiteral<"isolated">, import("typebox").TLiteral<"current">, import("typebox").TString]>;
    wakeMode: import("typebox").TUnion<[import("typebox").TLiteral<"next-heartbeat">, import("typebox").TLiteral<"now">]>;
    payload: import("typebox").TUnion<[import("typebox").TObject<{
      kind: import("typebox").TLiteral<"systemEvent">;
      text: import("typebox").TString;
      toolsAllow: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
      toolsAllowIsDefault: import("typebox").TOptional<import("typebox").TBoolean>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"agentTurn">;
      message: import("typebox").TSchema;
      model: import("typebox").TOptional<import("typebox").TSchema>;
      fallbacks: import("typebox").TOptional<import("typebox").TSchema>;
      thinking: import("typebox").TOptional<import("typebox").TSchema>;
      timeoutSeconds: import("typebox").TOptional<import("typebox").TNumber>;
      allowUnsafeExternalContent: import("typebox").TOptional<import("typebox").TBoolean>;
      lightContext: import("typebox").TOptional<import("typebox").TBoolean>;
      toolsAllow: import("typebox").TOptional<import("typebox").TSchema>;
      toolsAllowIsDefault: import("typebox").TOptional<import("typebox").TBoolean>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"command">;
      argv: import("typebox").TSchema;
      cwd: import("typebox").TOptional<import("typebox").TString>;
      env: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TString>>;
      input: import("typebox").TOptional<import("typebox").TString>;
      timeoutSeconds: import("typebox").TOptional<import("typebox").TNumber>;
      noOutputTimeoutSeconds: import("typebox").TOptional<import("typebox").TNumber>;
      outputMaxBytes: import("typebox").TOptional<import("typebox").TInteger>;
      toolsAllow: import("typebox").TOptional<import("typebox").TSchema>;
      toolsAllowIsDefault: import("typebox").TOptional<import("typebox").TBoolean>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"script">;
      script: import("typebox").TSchema;
      timeoutSeconds: import("typebox").TOptional<import("typebox").TNumber>;
      toolBudget: import("typebox").TOptional<import("typebox").TInteger>;
      toolsAllow: import("typebox").TOptional<import("typebox").TSchema>;
      toolsAllowIsDefault: import("typebox").TOptional<import("typebox").TBoolean>;
    }>]>;
    delivery: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TObject<{
      to: import("typebox").TOptional<import("typebox").TString>;
      channel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"last">, import("typebox").TString]>>;
      threadId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNumber]>>;
      accountId: import("typebox").TOptional<import("typebox").TString>;
      bestEffort: import("typebox").TOptional<import("typebox").TBoolean>;
      failureDestination: import("typebox").TOptional<import("typebox").TObject<{
        channel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"last">, import("typebox").TString]>>;
        to: import("typebox").TOptional<import("typebox").TString>;
        accountId: import("typebox").TOptional<import("typebox").TString>;
        mode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"announce">, import("typebox").TLiteral<"webhook">]>>;
      }>>;
      mode: import("typebox").TLiteral<"none">;
    }>, import("typebox").TObject<{
      completionDestination: import("typebox").TOptional<import("typebox").TObject<{
        mode: import("typebox").TLiteral<"webhook">;
        to: import("typebox").TString;
      }>>;
      to: import("typebox").TOptional<import("typebox").TString>;
      channel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"last">, import("typebox").TString]>>;
      threadId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNumber]>>;
      accountId: import("typebox").TOptional<import("typebox").TString>;
      bestEffort: import("typebox").TOptional<import("typebox").TBoolean>;
      failureDestination: import("typebox").TOptional<import("typebox").TObject<{
        channel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"last">, import("typebox").TString]>>;
        to: import("typebox").TOptional<import("typebox").TString>;
        accountId: import("typebox").TOptional<import("typebox").TString>;
        mode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"announce">, import("typebox").TLiteral<"webhook">]>>;
      }>>;
      mode: import("typebox").TLiteral<"announce">;
    }>, import("typebox").TObject<{
      to: import("typebox").TString;
      channel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"last">, import("typebox").TString]>>;
      threadId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNumber]>>;
      accountId: import("typebox").TOptional<import("typebox").TString>;
      bestEffort: import("typebox").TOptional<import("typebox").TBoolean>;
      failureDestination: import("typebox").TOptional<import("typebox").TObject<{
        channel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"last">, import("typebox").TString]>>;
        to: import("typebox").TOptional<import("typebox").TString>;
        accountId: import("typebox").TOptional<import("typebox").TString>;
        mode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"announce">, import("typebox").TLiteral<"webhook">]>>;
      }>>;
      mode: import("typebox").TLiteral<"webhook">;
    }>]>>;
    failureAlert: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<false>, import("typebox").TObject<{
      after: import("typebox").TOptional<import("typebox").TInteger>;
      channel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"last">, import("typebox").TString]>>;
      to: import("typebox").TOptional<import("typebox").TString>;
      cooldownMs: import("typebox").TOptional<import("typebox").TInteger>;
      includeSkipped: import("typebox").TOptional<import("typebox").TBoolean>;
      mode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"announce">, import("typebox").TLiteral<"webhook">]>>;
      accountId: import("typebox").TOptional<import("typebox").TString>;
    }>]>>;
    agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    sessionKey: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    description: import("typebox").TOptional<import("typebox").TString>;
    enabled: import("typebox").TOptional<import("typebox").TBoolean>;
    deleteAfterRun: import("typebox").TOptional<import("typebox").TBoolean>;
    name: import("typebox").TString;
    declarationKey: import("typebox").TOptional<import("typebox").TString>;
    displayName: import("typebox").TOptional<import("typebox").TString>;
    owner: import("typebox").TOptional<import("typebox").TObject<{
      agentId: import("typebox").TOptional<import("typebox").TString>;
      sessionKey: import("typebox").TOptional<import("typebox").TString>;
      accountId: import("typebox").TOptional<import("typebox").TString>;
    }>>;
  }>;
  readonly CronAddResult: import("typebox").TUnion<[import("typebox").TObject<{
    id: import("typebox").TString;
    declarationKey: import("typebox").TOptional<import("typebox").TString>;
    displayName: import("typebox").TOptional<import("typebox").TString>;
    owner: import("typebox").TOptional<import("typebox").TObject<{
      agentId: import("typebox").TOptional<import("typebox").TString>;
      sessionKey: import("typebox").TOptional<import("typebox").TString>;
      accountId: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    scheduledToolPolicy: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TObject<{
      version: import("typebox").TLiteral<1>;
      mode: import("typebox").TLiteral<"trusted">;
    }>, import("typebox").TObject<{
      version: import("typebox").TLiteral<1>;
      mode: import("typebox").TLiteral<"account">;
      ownerSessionKey: import("typebox").TString;
      ownerAccountId: import("typebox").TString;
    }>]>>;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    sessionKey: import("typebox").TOptional<import("typebox").TString>;
    name: import("typebox").TString;
    description: import("typebox").TOptional<import("typebox").TString>;
    enabled: import("typebox").TBoolean;
    deleteAfterRun: import("typebox").TOptional<import("typebox").TBoolean>;
    createdAtMs: import("typebox").TInteger;
    updatedAtMs: import("typebox").TInteger;
    configRevision: import("typebox").TOptional<import("typebox").TString>;
    schedule: import("typebox").TUnion<[import("typebox").TObject<{
      kind: import("typebox").TLiteral<"at">;
      at: import("typebox").TString;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"every">;
      everyMs: import("typebox").TInteger;
      anchorMs: import("typebox").TOptional<import("typebox").TInteger>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"cron">;
      expr: import("typebox").TString;
      tz: import("typebox").TOptional<import("typebox").TString>;
      staggerMs: import("typebox").TOptional<import("typebox").TInteger>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"on-exit">;
      command: import("typebox").TString;
      cwd: import("typebox").TOptional<import("typebox").TString>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"stream">;
      command: import("typebox").TArray<import("typebox").TString>;
      cwd: import("typebox").TOptional<import("typebox").TString>;
      mode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"line">, import("typebox").TLiteral<"match">]>>;
      match: import("typebox").TOptional<import("typebox").TString>;
      batchMs: import("typebox").TOptional<import("typebox").TInteger>;
      maxBatchBytes: import("typebox").TOptional<import("typebox").TInteger>;
    }>]>;
    pacing: import("typebox").TOptional<import("typebox").TObject<{
      min: import("typebox").TOptional<import("typebox").TString>;
      max: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    trigger: import("typebox").TOptional<import("typebox").TObject<{
      script: import("typebox").TString;
      once: import("typebox").TOptional<import("typebox").TBoolean>;
    }>>;
    sessionTarget: import("typebox").TUnion<[import("typebox").TLiteral<"main">, import("typebox").TLiteral<"isolated">, import("typebox").TLiteral<"current">, import("typebox").TString]>;
    wakeMode: import("typebox").TUnion<[import("typebox").TLiteral<"next-heartbeat">, import("typebox").TLiteral<"now">]>;
    payload: import("typebox").TUnion<[import("typebox").TObject<{
      kind: import("typebox").TLiteral<"systemEvent">;
      text: import("typebox").TString;
      toolsAllow: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
      toolsAllowIsDefault: import("typebox").TOptional<import("typebox").TBoolean>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"agentTurn">;
      message: import("typebox").TSchema;
      model: import("typebox").TOptional<import("typebox").TSchema>;
      fallbacks: import("typebox").TOptional<import("typebox").TSchema>;
      thinking: import("typebox").TOptional<import("typebox").TSchema>;
      timeoutSeconds: import("typebox").TOptional<import("typebox").TNumber>;
      allowUnsafeExternalContent: import("typebox").TOptional<import("typebox").TBoolean>;
      lightContext: import("typebox").TOptional<import("typebox").TBoolean>;
      toolsAllow: import("typebox").TOptional<import("typebox").TSchema>;
      toolsAllowIsDefault: import("typebox").TOptional<import("typebox").TBoolean>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"command">;
      argv: import("typebox").TSchema;
      cwd: import("typebox").TOptional<import("typebox").TString>;
      env: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TString>>;
      input: import("typebox").TOptional<import("typebox").TString>;
      timeoutSeconds: import("typebox").TOptional<import("typebox").TNumber>;
      noOutputTimeoutSeconds: import("typebox").TOptional<import("typebox").TNumber>;
      outputMaxBytes: import("typebox").TOptional<import("typebox").TInteger>;
      toolsAllow: import("typebox").TOptional<import("typebox").TSchema>;
      toolsAllowIsDefault: import("typebox").TOptional<import("typebox").TBoolean>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"script">;
      script: import("typebox").TSchema;
      timeoutSeconds: import("typebox").TOptional<import("typebox").TNumber>;
      toolBudget: import("typebox").TOptional<import("typebox").TInteger>;
      toolsAllow: import("typebox").TOptional<import("typebox").TSchema>;
      toolsAllowIsDefault: import("typebox").TOptional<import("typebox").TBoolean>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"heartbeat">;
    }>]>;
    delivery: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TObject<{
      to: import("typebox").TOptional<import("typebox").TString>;
      channel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"last">, import("typebox").TString]>>;
      threadId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNumber]>>;
      accountId: import("typebox").TOptional<import("typebox").TString>;
      bestEffort: import("typebox").TOptional<import("typebox").TBoolean>;
      failureDestination: import("typebox").TOptional<import("typebox").TObject<{
        channel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"last">, import("typebox").TString]>>;
        to: import("typebox").TOptional<import("typebox").TString>;
        accountId: import("typebox").TOptional<import("typebox").TString>;
        mode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"announce">, import("typebox").TLiteral<"webhook">]>>;
      }>>;
      mode: import("typebox").TLiteral<"none">;
    }>, import("typebox").TObject<{
      completionDestination: import("typebox").TOptional<import("typebox").TObject<{
        mode: import("typebox").TLiteral<"webhook">;
        to: import("typebox").TString;
      }>>;
      to: import("typebox").TOptional<import("typebox").TString>;
      channel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"last">, import("typebox").TString]>>;
      threadId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNumber]>>;
      accountId: import("typebox").TOptional<import("typebox").TString>;
      bestEffort: import("typebox").TOptional<import("typebox").TBoolean>;
      failureDestination: import("typebox").TOptional<import("typebox").TObject<{
        channel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"last">, import("typebox").TString]>>;
        to: import("typebox").TOptional<import("typebox").TString>;
        accountId: import("typebox").TOptional<import("typebox").TString>;
        mode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"announce">, import("typebox").TLiteral<"webhook">]>>;
      }>>;
      mode: import("typebox").TLiteral<"announce">;
    }>, import("typebox").TObject<{
      to: import("typebox").TString;
      channel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"last">, import("typebox").TString]>>;
      threadId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNumber]>>;
      accountId: import("typebox").TOptional<import("typebox").TString>;
      bestEffort: import("typebox").TOptional<import("typebox").TBoolean>;
      failureDestination: import("typebox").TOptional<import("typebox").TObject<{
        channel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"last">, import("typebox").TString]>>;
        to: import("typebox").TOptional<import("typebox").TString>;
        accountId: import("typebox").TOptional<import("typebox").TString>;
        mode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"announce">, import("typebox").TLiteral<"webhook">]>>;
      }>>;
      mode: import("typebox").TLiteral<"webhook">;
    }>]>>;
    failureAlert: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<false>, import("typebox").TObject<{
      after: import("typebox").TOptional<import("typebox").TInteger>;
      channel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"last">, import("typebox").TString]>>;
      to: import("typebox").TOptional<import("typebox").TString>;
      cooldownMs: import("typebox").TOptional<import("typebox").TInteger>;
      includeSkipped: import("typebox").TOptional<import("typebox").TBoolean>;
      mode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"announce">, import("typebox").TLiteral<"webhook">]>>;
      accountId: import("typebox").TOptional<import("typebox").TString>;
    }>]>>;
    state: import("typebox").TObject<{
      nextRunAtMs: import("typebox").TOptional<import("typebox").TInteger>;
      scheduleActivatedAtMs: import("typebox").TOptional<import("typebox").TInteger>;
      runningAtMs: import("typebox").TOptional<import("typebox").TInteger>;
      lastRunAtMs: import("typebox").TOptional<import("typebox").TInteger>;
      lastRunStatus: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"ok">, import("typebox").TLiteral<"error">, import("typebox").TLiteral<"skipped">]>>;
      lastStatus: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"ok">, import("typebox").TLiteral<"error">, import("typebox").TLiteral<"skipped">]>>;
      lastError: import("typebox").TOptional<import("typebox").TString>;
      lastDiagnostics: import("typebox").TOptional<import("typebox").TObject<{
        summary: import("typebox").TOptional<import("typebox").TString>;
        entries: import("typebox").TArray<import("typebox").TObject<{
          ts: import("typebox").TInteger;
          source: import("typebox").TUnion<[import("typebox").TLiteral<"cron-preflight">, import("typebox").TLiteral<"cron-setup">, import("typebox").TLiteral<"model-preflight">, import("typebox").TLiteral<"agent-run">, import("typebox").TLiteral<"tool">, import("typebox").TLiteral<"exec">, import("typebox").TLiteral<"delivery">]>;
          severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warn">, import("typebox").TLiteral<"error">]>;
          message: import("typebox").TString;
          toolName: import("typebox").TOptional<import("typebox").TString>;
          exitCode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TNumber, import("typebox").TNull]>>;
          truncated: import("typebox").TOptional<import("typebox").TBoolean>;
        }>>;
      }>>;
      lastDiagnosticSummary: import("typebox").TOptional<import("typebox").TString>;
      lastErrorReason: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"auth">, import("typebox").TLiteral<"auth_permanent">, import("typebox").TLiteral<"format">, import("typebox").TLiteral<"rate_limit">, import("typebox").TLiteral<"overloaded">, import("typebox").TLiteral<"billing">, import("typebox").TLiteral<"server_error">, import("typebox").TLiteral<"timeout">, import("typebox").TLiteral<"context_overflow">, import("typebox").TLiteral<"model_not_found">, import("typebox").TLiteral<"session_expired">, import("typebox").TLiteral<"empty_response">, import("typebox").TLiteral<"no_error_details">, import("typebox").TLiteral<"unclassified">, import("typebox").TLiteral<"unknown">]>>;
      lastDurationMs: import("typebox").TOptional<import("typebox").TInteger>;
      consecutiveErrors: import("typebox").TOptional<import("typebox").TInteger>;
      consecutiveSkipped: import("typebox").TOptional<import("typebox").TInteger>;
      lastDelivered: import("typebox").TOptional<import("typebox").TBoolean>;
      lastDeliveryStatus: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"delivered">, import("typebox").TLiteral<"not-delivered">, import("typebox").TLiteral<"unknown">, import("typebox").TLiteral<"not-requested">]>>;
      lastDeliveryError: import("typebox").TOptional<import("typebox").TString>;
      lastFailureNotificationDelivered: import("typebox").TOptional<import("typebox").TBoolean>;
      lastFailureNotificationDeliveryStatus: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"delivered">, import("typebox").TLiteral<"not-delivered">, import("typebox").TLiteral<"unknown">, import("typebox").TLiteral<"not-requested">]>>;
      lastFailureNotificationDeliveryError: import("typebox").TOptional<import("typebox").TString>;
      lastFailureAlertAtMs: import("typebox").TOptional<import("typebox").TInteger>;
      lastTriggerEvalAtMs: import("typebox").TOptional<import("typebox").TInteger>;
      triggerEvalCount: import("typebox").TOptional<import("typebox").TInteger>;
      lastTriggerFireAtMs: import("typebox").TOptional<import("typebox").TInteger>;
      triggerState: import("typebox").TOptional<import("typebox").TUnknown>;
      streamStatus: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"starting">, import("typebox").TLiteral<"running">, import("typebox").TLiteral<"restarting">, import("typebox").TLiteral<"stopped">, import("typebox").TLiteral<"disabled">, import("typebox").TLiteral<"error">]>>;
      streamError: import("typebox").TOptional<import("typebox").TString>;
      streamConsecutiveFailures: import("typebox").TOptional<import("typebox").TInteger>;
      streamRestartExhausted: import("typebox").TOptional<import("typebox").TBoolean>;
      streamSourceIdentity: import("typebox").TOptional<import("typebox").TString>;
      streamDroppedBatches: import("typebox").TOptional<import("typebox").TInteger>;
      streamCoalescedBatches: import("typebox").TOptional<import("typebox").TInteger>;
      streamLastStartedAtMs: import("typebox").TOptional<import("typebox").TInteger>;
      streamLastExitAtMs: import("typebox").TOptional<import("typebox").TInteger>;
    }>;
    nextRunAtMs: import("typebox").TOptional<import("typebox").TInteger>;
    lastRunAtMs: import("typebox").TOptional<import("typebox").TInteger>;
    lastRunStatus: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"ok">, import("typebox").TLiteral<"error">, import("typebox").TLiteral<"skipped">]>>;
    lastRunError: import("typebox").TOptional<import("typebox").TString>;
    lastDelivered: import("typebox").TOptional<import("typebox").TBoolean>;
    lastDeliveryStatus: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"delivered">, import("typebox").TLiteral<"not-delivered">, import("typebox").TLiteral<"unknown">, import("typebox").TLiteral<"not-requested">]>>;
    lastDeliveryError: import("typebox").TOptional<import("typebox").TString>;
    lastFailureNotificationDelivered: import("typebox").TOptional<import("typebox").TBoolean>;
    lastFailureNotificationDeliveryStatus: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"delivered">, import("typebox").TLiteral<"not-delivered">, import("typebox").TLiteral<"unknown">, import("typebox").TLiteral<"not-requested">]>>;
    lastFailureNotificationDeliveryError: import("typebox").TOptional<import("typebox").TString>;
  }>, import("typebox").TObject<{
    created: import("typebox").TBoolean;
    updated: import("typebox").TOptional<import("typebox").TBoolean>;
    job: import("typebox").TObject<{
      id: import("typebox").TString;
      declarationKey: import("typebox").TOptional<import("typebox").TString>;
      displayName: import("typebox").TOptional<import("typebox").TString>;
      owner: import("typebox").TOptional<import("typebox").TObject<{
        agentId: import("typebox").TOptional<import("typebox").TString>;
        sessionKey: import("typebox").TOptional<import("typebox").TString>;
        accountId: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      scheduledToolPolicy: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TObject<{
        version: import("typebox").TLiteral<1>;
        mode: import("typebox").TLiteral<"trusted">;
      }>, import("typebox").TObject<{
        version: import("typebox").TLiteral<1>;
        mode: import("typebox").TLiteral<"account">;
        ownerSessionKey: import("typebox").TString;
        ownerAccountId: import("typebox").TString;
      }>]>>;
      agentId: import("typebox").TOptional<import("typebox").TString>;
      sessionKey: import("typebox").TOptional<import("typebox").TString>;
      name: import("typebox").TString;
      description: import("typebox").TOptional<import("typebox").TString>;
      enabled: import("typebox").TBoolean;
      deleteAfterRun: import("typebox").TOptional<import("typebox").TBoolean>;
      createdAtMs: import("typebox").TInteger;
      updatedAtMs: import("typebox").TInteger;
      configRevision: import("typebox").TOptional<import("typebox").TString>;
      schedule: import("typebox").TUnion<[import("typebox").TObject<{
        kind: import("typebox").TLiteral<"at">;
        at: import("typebox").TString;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"every">;
        everyMs: import("typebox").TInteger;
        anchorMs: import("typebox").TOptional<import("typebox").TInteger>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"cron">;
        expr: import("typebox").TString;
        tz: import("typebox").TOptional<import("typebox").TString>;
        staggerMs: import("typebox").TOptional<import("typebox").TInteger>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"on-exit">;
        command: import("typebox").TString;
        cwd: import("typebox").TOptional<import("typebox").TString>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"stream">;
        command: import("typebox").TArray<import("typebox").TString>;
        cwd: import("typebox").TOptional<import("typebox").TString>;
        mode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"line">, import("typebox").TLiteral<"match">]>>;
        match: import("typebox").TOptional<import("typebox").TString>;
        batchMs: import("typebox").TOptional<import("typebox").TInteger>;
        maxBatchBytes: import("typebox").TOptional<import("typebox").TInteger>;
      }>]>;
      pacing: import("typebox").TOptional<import("typebox").TObject<{
        min: import("typebox").TOptional<import("typebox").TString>;
        max: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      trigger: import("typebox").TOptional<import("typebox").TObject<{
        script: import("typebox").TString;
        once: import("typebox").TOptional<import("typebox").TBoolean>;
      }>>;
      sessionTarget: import("typebox").TUnion<[import("typebox").TLiteral<"main">, import("typebox").TLiteral<"isolated">, import("typebox").TLiteral<"current">, import("typebox").TString]>;
      wakeMode: import("typebox").TUnion<[import("typebox").TLiteral<"next-heartbeat">, import("typebox").TLiteral<"now">]>;
      payload: import("typebox").TUnion<[import("typebox").TObject<{
        kind: import("typebox").TLiteral<"systemEvent">;
        text: import("typebox").TString;
        toolsAllow: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
        toolsAllowIsDefault: import("typebox").TOptional<import("typebox").TBoolean>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"agentTurn">;
        message: import("typebox").TSchema;
        model: import("typebox").TOptional<import("typebox").TSchema>;
        fallbacks: import("typebox").TOptional<import("typebox").TSchema>;
        thinking: import("typebox").TOptional<import("typebox").TSchema>;
        timeoutSeconds: import("typebox").TOptional<import("typebox").TNumber>;
        allowUnsafeExternalContent: import("typebox").TOptional<import("typebox").TBoolean>;
        lightContext: import("typebox").TOptional<import("typebox").TBoolean>;
        toolsAllow: import("typebox").TOptional<import("typebox").TSchema>;
        toolsAllowIsDefault: import("typebox").TOptional<import("typebox").TBoolean>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"command">;
        argv: import("typebox").TSchema;
        cwd: import("typebox").TOptional<import("typebox").TString>;
        env: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TString>>;
        input: import("typebox").TOptional<import("typebox").TString>;
        timeoutSeconds: import("typebox").TOptional<import("typebox").TNumber>;
        noOutputTimeoutSeconds: import("typebox").TOptional<import("typebox").TNumber>;
        outputMaxBytes: import("typebox").TOptional<import("typebox").TInteger>;
        toolsAllow: import("typebox").TOptional<import("typebox").TSchema>;
        toolsAllowIsDefault: import("typebox").TOptional<import("typebox").TBoolean>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"script">;
        script: import("typebox").TSchema;
        timeoutSeconds: import("typebox").TOptional<import("typebox").TNumber>;
        toolBudget: import("typebox").TOptional<import("typebox").TInteger>;
        toolsAllow: import("typebox").TOptional<import("typebox").TSchema>;
        toolsAllowIsDefault: import("typebox").TOptional<import("typebox").TBoolean>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"heartbeat">;
      }>]>;
      delivery: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TObject<{
        to: import("typebox").TOptional<import("typebox").TString>;
        channel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"last">, import("typebox").TString]>>;
        threadId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNumber]>>;
        accountId: import("typebox").TOptional<import("typebox").TString>;
        bestEffort: import("typebox").TOptional<import("typebox").TBoolean>;
        failureDestination: import("typebox").TOptional<import("typebox").TObject<{
          channel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"last">, import("typebox").TString]>>;
          to: import("typebox").TOptional<import("typebox").TString>;
          accountId: import("typebox").TOptional<import("typebox").TString>;
          mode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"announce">, import("typebox").TLiteral<"webhook">]>>;
        }>>;
        mode: import("typebox").TLiteral<"none">;
      }>, import("typebox").TObject<{
        completionDestination: import("typebox").TOptional<import("typebox").TObject<{
          mode: import("typebox").TLiteral<"webhook">;
          to: import("typebox").TString;
        }>>;
        to: import("typebox").TOptional<import("typebox").TString>;
        channel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"last">, import("typebox").TString]>>;
        threadId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNumber]>>;
        accountId: import("typebox").TOptional<import("typebox").TString>;
        bestEffort: import("typebox").TOptional<import("typebox").TBoolean>;
        failureDestination: import("typebox").TOptional<import("typebox").TObject<{
          channel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"last">, import("typebox").TString]>>;
          to: import("typebox").TOptional<import("typebox").TString>;
          accountId: import("typebox").TOptional<import("typebox").TString>;
          mode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"announce">, import("typebox").TLiteral<"webhook">]>>;
        }>>;
        mode: import("typebox").TLiteral<"announce">;
      }>, import("typebox").TObject<{
        to: import("typebox").TString;
        channel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"last">, import("typebox").TString]>>;
        threadId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNumber]>>;
        accountId: import("typebox").TOptional<import("typebox").TString>;
        bestEffort: import("typebox").TOptional<import("typebox").TBoolean>;
        failureDestination: import("typebox").TOptional<import("typebox").TObject<{
          channel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"last">, import("typebox").TString]>>;
          to: import("typebox").TOptional<import("typebox").TString>;
          accountId: import("typebox").TOptional<import("typebox").TString>;
          mode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"announce">, import("typebox").TLiteral<"webhook">]>>;
        }>>;
        mode: import("typebox").TLiteral<"webhook">;
      }>]>>;
      failureAlert: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<false>, import("typebox").TObject<{
        after: import("typebox").TOptional<import("typebox").TInteger>;
        channel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"last">, import("typebox").TString]>>;
        to: import("typebox").TOptional<import("typebox").TString>;
        cooldownMs: import("typebox").TOptional<import("typebox").TInteger>;
        includeSkipped: import("typebox").TOptional<import("typebox").TBoolean>;
        mode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"announce">, import("typebox").TLiteral<"webhook">]>>;
        accountId: import("typebox").TOptional<import("typebox").TString>;
      }>]>>;
      state: import("typebox").TObject<{
        nextRunAtMs: import("typebox").TOptional<import("typebox").TInteger>;
        scheduleActivatedAtMs: import("typebox").TOptional<import("typebox").TInteger>;
        runningAtMs: import("typebox").TOptional<import("typebox").TInteger>;
        lastRunAtMs: import("typebox").TOptional<import("typebox").TInteger>;
        lastRunStatus: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"ok">, import("typebox").TLiteral<"error">, import("typebox").TLiteral<"skipped">]>>;
        lastStatus: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"ok">, import("typebox").TLiteral<"error">, import("typebox").TLiteral<"skipped">]>>;
        lastError: import("typebox").TOptional<import("typebox").TString>;
        lastDiagnostics: import("typebox").TOptional<import("typebox").TObject<{
          summary: import("typebox").TOptional<import("typebox").TString>;
          entries: import("typebox").TArray<import("typebox").TObject<{
            ts: import("typebox").TInteger;
            source: import("typebox").TUnion<[import("typebox").TLiteral<"cron-preflight">, import("typebox").TLiteral<"cron-setup">, import("typebox").TLiteral<"model-preflight">, import("typebox").TLiteral<"agent-run">, import("typebox").TLiteral<"tool">, import("typebox").TLiteral<"exec">, import("typebox").TLiteral<"delivery">]>;
            severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warn">, import("typebox").TLiteral<"error">]>;
            message: import("typebox").TString;
            toolName: import("typebox").TOptional<import("typebox").TString>;
            exitCode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TNumber, import("typebox").TNull]>>;
            truncated: import("typebox").TOptional<import("typebox").TBoolean>;
          }>>;
        }>>;
        lastDiagnosticSummary: import("typebox").TOptional<import("typebox").TString>;
        lastErrorReason: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"auth">, import("typebox").TLiteral<"auth_permanent">, import("typebox").TLiteral<"format">, import("typebox").TLiteral<"rate_limit">, import("typebox").TLiteral<"overloaded">, import("typebox").TLiteral<"billing">, import("typebox").TLiteral<"server_error">, import("typebox").TLiteral<"timeout">, import("typebox").TLiteral<"context_overflow">, import("typebox").TLiteral<"model_not_found">, import("typebox").TLiteral<"session_expired">, import("typebox").TLiteral<"empty_response">, import("typebox").TLiteral<"no_error_details">, import("typebox").TLiteral<"unclassified">, import("typebox").TLiteral<"unknown">]>>;
        lastDurationMs: import("typebox").TOptional<import("typebox").TInteger>;
        consecutiveErrors: import("typebox").TOptional<import("typebox").TInteger>;
        consecutiveSkipped: import("typebox").TOptional<import("typebox").TInteger>;
        lastDelivered: import("typebox").TOptional<import("typebox").TBoolean>;
        lastDeliveryStatus: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"delivered">, import("typebox").TLiteral<"not-delivered">, import("typebox").TLiteral<"unknown">, import("typebox").TLiteral<"not-requested">]>>;
        lastDeliveryError: import("typebox").TOptional<import("typebox").TString>;
        lastFailureNotificationDelivered: import("typebox").TOptional<import("typebox").TBoolean>;
        lastFailureNotificationDeliveryStatus: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"delivered">, import("typebox").TLiteral<"not-delivered">, import("typebox").TLiteral<"unknown">, import("typebox").TLiteral<"not-requested">]>>;
        lastFailureNotificationDeliveryError: import("typebox").TOptional<import("typebox").TString>;
        lastFailureAlertAtMs: import("typebox").TOptional<import("typebox").TInteger>;
        lastTriggerEvalAtMs: import("typebox").TOptional<import("typebox").TInteger>;
        triggerEvalCount: import("typebox").TOptional<import("typebox").TInteger>;
        lastTriggerFireAtMs: import("typebox").TOptional<import("typebox").TInteger>;
        triggerState: import("typebox").TOptional<import("typebox").TUnknown>;
        streamStatus: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"starting">, import("typebox").TLiteral<"running">, import("typebox").TLiteral<"restarting">, import("typebox").TLiteral<"stopped">, import("typebox").TLiteral<"disabled">, import("typebox").TLiteral<"error">]>>;
        streamError: import("typebox").TOptional<import("typebox").TString>;
        streamConsecutiveFailures: import("typebox").TOptional<import("typebox").TInteger>;
        streamRestartExhausted: import("typebox").TOptional<import("typebox").TBoolean>;
        streamSourceIdentity: import("typebox").TOptional<import("typebox").TString>;
        streamDroppedBatches: import("typebox").TOptional<import("typebox").TInteger>;
        streamCoalescedBatches: import("typebox").TOptional<import("typebox").TInteger>;
        streamLastStartedAtMs: import("typebox").TOptional<import("typebox").TInteger>;
        streamLastExitAtMs: import("typebox").TOptional<import("typebox").TInteger>;
      }>;
      nextRunAtMs: import("typebox").TOptional<import("typebox").TInteger>;
      lastRunAtMs: import("typebox").TOptional<import("typebox").TInteger>;
      lastRunStatus: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"ok">, import("typebox").TLiteral<"error">, import("typebox").TLiteral<"skipped">]>>;
      lastRunError: import("typebox").TOptional<import("typebox").TString>;
      lastDelivered: import("typebox").TOptional<import("typebox").TBoolean>;
      lastDeliveryStatus: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"delivered">, import("typebox").TLiteral<"not-delivered">, import("typebox").TLiteral<"unknown">, import("typebox").TLiteral<"not-requested">]>>;
      lastDeliveryError: import("typebox").TOptional<import("typebox").TString>;
      lastFailureNotificationDelivered: import("typebox").TOptional<import("typebox").TBoolean>;
      lastFailureNotificationDeliveryStatus: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"delivered">, import("typebox").TLiteral<"not-delivered">, import("typebox").TLiteral<"unknown">, import("typebox").TLiteral<"not-requested">]>>;
      lastFailureNotificationDeliveryError: import("typebox").TOptional<import("typebox").TString>;
    }>;
  }>]>;
  readonly CronDeclarativeAddResult: import("typebox").TObject<{
    created: import("typebox").TBoolean;
    updated: import("typebox").TOptional<import("typebox").TBoolean>;
    job: import("typebox").TObject<{
      id: import("typebox").TString;
      declarationKey: import("typebox").TOptional<import("typebox").TString>;
      displayName: import("typebox").TOptional<import("typebox").TString>;
      owner: import("typebox").TOptional<import("typebox").TObject<{
        agentId: import("typebox").TOptional<import("typebox").TString>;
        sessionKey: import("typebox").TOptional<import("typebox").TString>;
        accountId: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      scheduledToolPolicy: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TObject<{
        version: import("typebox").TLiteral<1>;
        mode: import("typebox").TLiteral<"trusted">;
      }>, import("typebox").TObject<{
        version: import("typebox").TLiteral<1>;
        mode: import("typebox").TLiteral<"account">;
        ownerSessionKey: import("typebox").TString;
        ownerAccountId: import("typebox").TString;
      }>]>>;
      agentId: import("typebox").TOptional<import("typebox").TString>;
      sessionKey: import("typebox").TOptional<import("typebox").TString>;
      name: import("typebox").TString;
      description: import("typebox").TOptional<import("typebox").TString>;
      enabled: import("typebox").TBoolean;
      deleteAfterRun: import("typebox").TOptional<import("typebox").TBoolean>;
      createdAtMs: import("typebox").TInteger;
      updatedAtMs: import("typebox").TInteger;
      configRevision: import("typebox").TOptional<import("typebox").TString>;
      schedule: import("typebox").TUnion<[import("typebox").TObject<{
        kind: import("typebox").TLiteral<"at">;
        at: import("typebox").TString;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"every">;
        everyMs: import("typebox").TInteger;
        anchorMs: import("typebox").TOptional<import("typebox").TInteger>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"cron">;
        expr: import("typebox").TString;
        tz: import("typebox").TOptional<import("typebox").TString>;
        staggerMs: import("typebox").TOptional<import("typebox").TInteger>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"on-exit">;
        command: import("typebox").TString;
        cwd: import("typebox").TOptional<import("typebox").TString>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"stream">;
        command: import("typebox").TArray<import("typebox").TString>;
        cwd: import("typebox").TOptional<import("typebox").TString>;
        mode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"line">, import("typebox").TLiteral<"match">]>>;
        match: import("typebox").TOptional<import("typebox").TString>;
        batchMs: import("typebox").TOptional<import("typebox").TInteger>;
        maxBatchBytes: import("typebox").TOptional<import("typebox").TInteger>;
      }>]>;
      pacing: import("typebox").TOptional<import("typebox").TObject<{
        min: import("typebox").TOptional<import("typebox").TString>;
        max: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      trigger: import("typebox").TOptional<import("typebox").TObject<{
        script: import("typebox").TString;
        once: import("typebox").TOptional<import("typebox").TBoolean>;
      }>>;
      sessionTarget: import("typebox").TUnion<[import("typebox").TLiteral<"main">, import("typebox").TLiteral<"isolated">, import("typebox").TLiteral<"current">, import("typebox").TString]>;
      wakeMode: import("typebox").TUnion<[import("typebox").TLiteral<"next-heartbeat">, import("typebox").TLiteral<"now">]>;
      payload: import("typebox").TUnion<[import("typebox").TObject<{
        kind: import("typebox").TLiteral<"systemEvent">;
        text: import("typebox").TString;
        toolsAllow: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
        toolsAllowIsDefault: import("typebox").TOptional<import("typebox").TBoolean>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"agentTurn">;
        message: import("typebox").TSchema;
        model: import("typebox").TOptional<import("typebox").TSchema>;
        fallbacks: import("typebox").TOptional<import("typebox").TSchema>;
        thinking: import("typebox").TOptional<import("typebox").TSchema>;
        timeoutSeconds: import("typebox").TOptional<import("typebox").TNumber>;
        allowUnsafeExternalContent: import("typebox").TOptional<import("typebox").TBoolean>;
        lightContext: import("typebox").TOptional<import("typebox").TBoolean>;
        toolsAllow: import("typebox").TOptional<import("typebox").TSchema>;
        toolsAllowIsDefault: import("typebox").TOptional<import("typebox").TBoolean>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"command">;
        argv: import("typebox").TSchema;
        cwd: import("typebox").TOptional<import("typebox").TString>;
        env: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TString>>;
        input: import("typebox").TOptional<import("typebox").TString>;
        timeoutSeconds: import("typebox").TOptional<import("typebox").TNumber>;
        noOutputTimeoutSeconds: import("typebox").TOptional<import("typebox").TNumber>;
        outputMaxBytes: import("typebox").TOptional<import("typebox").TInteger>;
        toolsAllow: import("typebox").TOptional<import("typebox").TSchema>;
        toolsAllowIsDefault: import("typebox").TOptional<import("typebox").TBoolean>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"script">;
        script: import("typebox").TSchema;
        timeoutSeconds: import("typebox").TOptional<import("typebox").TNumber>;
        toolBudget: import("typebox").TOptional<import("typebox").TInteger>;
        toolsAllow: import("typebox").TOptional<import("typebox").TSchema>;
        toolsAllowIsDefault: import("typebox").TOptional<import("typebox").TBoolean>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"heartbeat">;
      }>]>;
      delivery: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TObject<{
        to: import("typebox").TOptional<import("typebox").TString>;
        channel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"last">, import("typebox").TString]>>;
        threadId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNumber]>>;
        accountId: import("typebox").TOptional<import("typebox").TString>;
        bestEffort: import("typebox").TOptional<import("typebox").TBoolean>;
        failureDestination: import("typebox").TOptional<import("typebox").TObject<{
          channel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"last">, import("typebox").TString]>>;
          to: import("typebox").TOptional<import("typebox").TString>;
          accountId: import("typebox").TOptional<import("typebox").TString>;
          mode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"announce">, import("typebox").TLiteral<"webhook">]>>;
        }>>;
        mode: import("typebox").TLiteral<"none">;
      }>, import("typebox").TObject<{
        completionDestination: import("typebox").TOptional<import("typebox").TObject<{
          mode: import("typebox").TLiteral<"webhook">;
          to: import("typebox").TString;
        }>>;
        to: import("typebox").TOptional<import("typebox").TString>;
        channel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"last">, import("typebox").TString]>>;
        threadId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNumber]>>;
        accountId: import("typebox").TOptional<import("typebox").TString>;
        bestEffort: import("typebox").TOptional<import("typebox").TBoolean>;
        failureDestination: import("typebox").TOptional<import("typebox").TObject<{
          channel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"last">, import("typebox").TString]>>;
          to: import("typebox").TOptional<import("typebox").TString>;
          accountId: import("typebox").TOptional<import("typebox").TString>;
          mode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"announce">, import("typebox").TLiteral<"webhook">]>>;
        }>>;
        mode: import("typebox").TLiteral<"announce">;
      }>, import("typebox").TObject<{
        to: import("typebox").TString;
        channel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"last">, import("typebox").TString]>>;
        threadId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNumber]>>;
        accountId: import("typebox").TOptional<import("typebox").TString>;
        bestEffort: import("typebox").TOptional<import("typebox").TBoolean>;
        failureDestination: import("typebox").TOptional<import("typebox").TObject<{
          channel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"last">, import("typebox").TString]>>;
          to: import("typebox").TOptional<import("typebox").TString>;
          accountId: import("typebox").TOptional<import("typebox").TString>;
          mode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"announce">, import("typebox").TLiteral<"webhook">]>>;
        }>>;
        mode: import("typebox").TLiteral<"webhook">;
      }>]>>;
      failureAlert: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<false>, import("typebox").TObject<{
        after: import("typebox").TOptional<import("typebox").TInteger>;
        channel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"last">, import("typebox").TString]>>;
        to: import("typebox").TOptional<import("typebox").TString>;
        cooldownMs: import("typebox").TOptional<import("typebox").TInteger>;
        includeSkipped: import("typebox").TOptional<import("typebox").TBoolean>;
        mode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"announce">, import("typebox").TLiteral<"webhook">]>>;
        accountId: import("typebox").TOptional<import("typebox").TString>;
      }>]>>;
      state: import("typebox").TObject<{
        nextRunAtMs: import("typebox").TOptional<import("typebox").TInteger>;
        scheduleActivatedAtMs: import("typebox").TOptional<import("typebox").TInteger>;
        runningAtMs: import("typebox").TOptional<import("typebox").TInteger>;
        lastRunAtMs: import("typebox").TOptional<import("typebox").TInteger>;
        lastRunStatus: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"ok">, import("typebox").TLiteral<"error">, import("typebox").TLiteral<"skipped">]>>;
        lastStatus: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"ok">, import("typebox").TLiteral<"error">, import("typebox").TLiteral<"skipped">]>>;
        lastError: import("typebox").TOptional<import("typebox").TString>;
        lastDiagnostics: import("typebox").TOptional<import("typebox").TObject<{
          summary: import("typebox").TOptional<import("typebox").TString>;
          entries: import("typebox").TArray<import("typebox").TObject<{
            ts: import("typebox").TInteger;
            source: import("typebox").TUnion<[import("typebox").TLiteral<"cron-preflight">, import("typebox").TLiteral<"cron-setup">, import("typebox").TLiteral<"model-preflight">, import("typebox").TLiteral<"agent-run">, import("typebox").TLiteral<"tool">, import("typebox").TLiteral<"exec">, import("typebox").TLiteral<"delivery">]>;
            severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warn">, import("typebox").TLiteral<"error">]>;
            message: import("typebox").TString;
            toolName: import("typebox").TOptional<import("typebox").TString>;
            exitCode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TNumber, import("typebox").TNull]>>;
            truncated: import("typebox").TOptional<import("typebox").TBoolean>;
          }>>;
        }>>;
        lastDiagnosticSummary: import("typebox").TOptional<import("typebox").TString>;
        lastErrorReason: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"auth">, import("typebox").TLiteral<"auth_permanent">, import("typebox").TLiteral<"format">, import("typebox").TLiteral<"rate_limit">, import("typebox").TLiteral<"overloaded">, import("typebox").TLiteral<"billing">, import("typebox").TLiteral<"server_error">, import("typebox").TLiteral<"timeout">, import("typebox").TLiteral<"context_overflow">, import("typebox").TLiteral<"model_not_found">, import("typebox").TLiteral<"session_expired">, import("typebox").TLiteral<"empty_response">, import("typebox").TLiteral<"no_error_details">, import("typebox").TLiteral<"unclassified">, import("typebox").TLiteral<"unknown">]>>;
        lastDurationMs: import("typebox").TOptional<import("typebox").TInteger>;
        consecutiveErrors: import("typebox").TOptional<import("typebox").TInteger>;
        consecutiveSkipped: import("typebox").TOptional<import("typebox").TInteger>;
        lastDelivered: import("typebox").TOptional<import("typebox").TBoolean>;
        lastDeliveryStatus: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"delivered">, import("typebox").TLiteral<"not-delivered">, import("typebox").TLiteral<"unknown">, import("typebox").TLiteral<"not-requested">]>>;
        lastDeliveryError: import("typebox").TOptional<import("typebox").TString>;
        lastFailureNotificationDelivered: import("typebox").TOptional<import("typebox").TBoolean>;
        lastFailureNotificationDeliveryStatus: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"delivered">, import("typebox").TLiteral<"not-delivered">, import("typebox").TLiteral<"unknown">, import("typebox").TLiteral<"not-requested">]>>;
        lastFailureNotificationDeliveryError: import("typebox").TOptional<import("typebox").TString>;
        lastFailureAlertAtMs: import("typebox").TOptional<import("typebox").TInteger>;
        lastTriggerEvalAtMs: import("typebox").TOptional<import("typebox").TInteger>;
        triggerEvalCount: import("typebox").TOptional<import("typebox").TInteger>;
        lastTriggerFireAtMs: import("typebox").TOptional<import("typebox").TInteger>;
        triggerState: import("typebox").TOptional<import("typebox").TUnknown>;
        streamStatus: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"starting">, import("typebox").TLiteral<"running">, import("typebox").TLiteral<"restarting">, import("typebox").TLiteral<"stopped">, import("typebox").TLiteral<"disabled">, import("typebox").TLiteral<"error">]>>;
        streamError: import("typebox").TOptional<import("typebox").TString>;
        streamConsecutiveFailures: import("typebox").TOptional<import("typebox").TInteger>;
        streamRestartExhausted: import("typebox").TOptional<import("typebox").TBoolean>;
        streamSourceIdentity: import("typebox").TOptional<import("typebox").TString>;
        streamDroppedBatches: import("typebox").TOptional<import("typebox").TInteger>;
        streamCoalescedBatches: import("typebox").TOptional<import("typebox").TInteger>;
        streamLastStartedAtMs: import("typebox").TOptional<import("typebox").TInteger>;
        streamLastExitAtMs: import("typebox").TOptional<import("typebox").TInteger>;
      }>;
      nextRunAtMs: import("typebox").TOptional<import("typebox").TInteger>;
      lastRunAtMs: import("typebox").TOptional<import("typebox").TInteger>;
      lastRunStatus: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"ok">, import("typebox").TLiteral<"error">, import("typebox").TLiteral<"skipped">]>>;
      lastRunError: import("typebox").TOptional<import("typebox").TString>;
      lastDelivered: import("typebox").TOptional<import("typebox").TBoolean>;
      lastDeliveryStatus: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"delivered">, import("typebox").TLiteral<"not-delivered">, import("typebox").TLiteral<"unknown">, import("typebox").TLiteral<"not-requested">]>>;
      lastDeliveryError: import("typebox").TOptional<import("typebox").TString>;
      lastFailureNotificationDelivered: import("typebox").TOptional<import("typebox").TBoolean>;
      lastFailureNotificationDeliveryStatus: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"delivered">, import("typebox").TLiteral<"not-delivered">, import("typebox").TLiteral<"unknown">, import("typebox").TLiteral<"not-requested">]>>;
      lastFailureNotificationDeliveryError: import("typebox").TOptional<import("typebox").TString>;
    }>;
  }>;
  readonly CronUpdateParams: import("typebox").TUnion<[import("typebox").TObject<{
    id: import("typebox").TString;
  }>, import("typebox").TObject<{
    jobId: import("typebox").TString;
  }>]>;
  readonly CronRemoveParams: import("typebox").TUnion<[import("typebox").TObject<{
    id: import("typebox").TString;
  }>, import("typebox").TObject<{
    jobId: import("typebox").TString;
  }>]>;
  readonly CronRunParams: import("typebox").TUnion<[import("typebox").TObject<{
    id: import("typebox").TString;
  }>, import("typebox").TObject<{
    jobId: import("typebox").TString;
  }>]>;
  readonly CronRunsParams: import("typebox").TObject<{
    agentId: import("typebox").TOptional<import("typebox").TString>;
    scope: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"job">, import("typebox").TLiteral<"all">]>>;
    id: import("typebox").TOptional<import("typebox").TString>;
    jobId: import("typebox").TOptional<import("typebox").TString>;
    runId: import("typebox").TOptional<import("typebox").TString>;
    limit: import("typebox").TOptional<import("typebox").TInteger>;
    offset: import("typebox").TOptional<import("typebox").TInteger>;
    statuses: import("typebox").TOptional<import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"ok">, import("typebox").TLiteral<"error">, import("typebox").TLiteral<"skipped">]>>>;
    status: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"all">, import("typebox").TLiteral<"ok">, import("typebox").TLiteral<"error">, import("typebox").TLiteral<"skipped">]>>;
    deliveryStatuses: import("typebox").TOptional<import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"delivered">, import("typebox").TLiteral<"not-delivered">, import("typebox").TLiteral<"unknown">, import("typebox").TLiteral<"not-requested">]>>>;
    deliveryStatus: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"delivered">, import("typebox").TLiteral<"not-delivered">, import("typebox").TLiteral<"unknown">, import("typebox").TLiteral<"not-requested">]>>;
    query: import("typebox").TOptional<import("typebox").TString>;
    sortDir: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"asc">, import("typebox").TLiteral<"desc">]>>;
  }>;
  readonly CronScratchGetParams: import("typebox").TUnion<[import("typebox").TObject<{
    id: import("typebox").TString;
  }>, import("typebox").TObject<{
    jobId: import("typebox").TString;
  }>]>;
  readonly CronScratchGetResult: import("typebox").TObject<{
    scratch: import("typebox").TUnion<[import("typebox").TObject<{
      content: import("typebox").TString;
      revision: import("typebox").TInteger;
      updatedAtMs: import("typebox").TInteger;
    }>, import("typebox").TNull]>;
    currentRevision: import("typebox").TInteger;
    maxBytes: import("typebox").TInteger;
  }>;
  readonly CronScratchSetParams: import("typebox").TUnion<[import("typebox").TObject<{
    id: import("typebox").TString;
  }>, import("typebox").TObject<{
    jobId: import("typebox").TString;
  }>]>;
  readonly CronScratchSetResult: import("typebox").TUnion<[import("typebox").TObject<{
    ok: import("typebox").TLiteral<true>;
    scratch: import("typebox").TUnion<[import("typebox").TObject<{
      content: import("typebox").TString;
      revision: import("typebox").TInteger;
      updatedAtMs: import("typebox").TInteger;
    }>, import("typebox").TNull]>;
    currentRevision: import("typebox").TInteger;
    maxBytes: import("typebox").TInteger;
  }>, import("typebox").TObject<{
    ok: import("typebox").TLiteral<false>;
    reason: import("typebox").TLiteral<"revision-conflict">;
    currentRevision: import("typebox").TInteger;
  }>]>;
  readonly CronRunLogEntry: import("typebox").TObject<{
    ts: import("typebox").TInteger;
    jobId: import("typebox").TString;
    action: import("typebox").TLiteral<"finished">;
    status: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"ok">, import("typebox").TLiteral<"error">, import("typebox").TLiteral<"skipped">]>>;
    error: import("typebox").TOptional<import("typebox").TString>;
    errorReason: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"auth">, import("typebox").TLiteral<"auth_permanent">, import("typebox").TLiteral<"format">, import("typebox").TLiteral<"rate_limit">, import("typebox").TLiteral<"overloaded">, import("typebox").TLiteral<"billing">, import("typebox").TLiteral<"server_error">, import("typebox").TLiteral<"timeout">, import("typebox").TLiteral<"context_overflow">, import("typebox").TLiteral<"model_not_found">, import("typebox").TLiteral<"session_expired">, import("typebox").TLiteral<"empty_response">, import("typebox").TLiteral<"no_error_details">, import("typebox").TLiteral<"unclassified">, import("typebox").TLiteral<"unknown">]>>;
    summary: import("typebox").TOptional<import("typebox").TString>;
    diagnostics: import("typebox").TOptional<import("typebox").TObject<{
      summary: import("typebox").TOptional<import("typebox").TString>;
      entries: import("typebox").TArray<import("typebox").TObject<{
        ts: import("typebox").TInteger;
        source: import("typebox").TUnion<[import("typebox").TLiteral<"cron-preflight">, import("typebox").TLiteral<"cron-setup">, import("typebox").TLiteral<"model-preflight">, import("typebox").TLiteral<"agent-run">, import("typebox").TLiteral<"tool">, import("typebox").TLiteral<"exec">, import("typebox").TLiteral<"delivery">]>;
        severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warn">, import("typebox").TLiteral<"error">]>;
        message: import("typebox").TString;
        toolName: import("typebox").TOptional<import("typebox").TString>;
        exitCode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TNumber, import("typebox").TNull]>>;
        truncated: import("typebox").TOptional<import("typebox").TBoolean>;
      }>>;
    }>>;
    delivered: import("typebox").TOptional<import("typebox").TBoolean>;
    deliveryStatus: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"delivered">, import("typebox").TLiteral<"not-delivered">, import("typebox").TLiteral<"unknown">, import("typebox").TLiteral<"not-requested">]>>;
    deliveryError: import("typebox").TOptional<import("typebox").TString>;
    failureNotificationDelivery: import("typebox").TOptional<import("typebox").TObject<{
      delivered: import("typebox").TOptional<import("typebox").TBoolean>;
      status: import("typebox").TUnion<[import("typebox").TLiteral<"delivered">, import("typebox").TLiteral<"not-delivered">, import("typebox").TLiteral<"unknown">, import("typebox").TLiteral<"not-requested">]>;
      error: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    sessionId: import("typebox").TOptional<import("typebox").TString>;
    sessionKey: import("typebox").TOptional<import("typebox").TString>;
    runId: import("typebox").TOptional<import("typebox").TString>;
    runAtMs: import("typebox").TOptional<import("typebox").TInteger>;
    durationMs: import("typebox").TOptional<import("typebox").TInteger>;
    nextRunAtMs: import("typebox").TOptional<import("typebox").TInteger>;
    triggerFired: import("typebox").TOptional<import("typebox").TBoolean>;
    model: import("typebox").TOptional<import("typebox").TString>;
    provider: import("typebox").TOptional<import("typebox").TString>;
    usage: import("typebox").TOptional<import("typebox").TObject<{
      input_tokens: import("typebox").TOptional<import("typebox").TNumber>;
      output_tokens: import("typebox").TOptional<import("typebox").TNumber>;
      total_tokens: import("typebox").TOptional<import("typebox").TNumber>;
      cache_read_tokens: import("typebox").TOptional<import("typebox").TNumber>;
      cache_write_tokens: import("typebox").TOptional<import("typebox").TNumber>;
    }>>;
    jobName: import("typebox").TOptional<import("typebox").TString>;
  }>;
} & {
  readonly ApprovalKind: import("typebox").TUnion<[import("typebox").TLiteral<"exec">, import("typebox").TLiteral<"plugin">, import("typebox").TLiteral<"system-agent">]>;
  readonly ApprovalDecision: import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>;
  readonly ApprovalAllowDecision: import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">]>;
  readonly ApprovalAllowedReason: import("typebox").TUnion<[import("typebox").TLiteral<"user">]>;
  readonly ApprovalDeniedReason: import("typebox").TUnion<[import("typebox").TLiteral<"user">, import("typebox").TLiteral<"malformed-verdict">, import("typebox").TLiteral<"no-route">, import("typebox").TLiteral<"storage-corrupt">]>;
  readonly ApprovalExpiredReason: import("typebox").TUnion<[import("typebox").TLiteral<"timeout">]>;
  readonly ApprovalCancelledReason: import("typebox").TUnion<[import("typebox").TLiteral<"run-aborted">, import("typebox").TLiteral<"gateway-restart">]>;
  readonly PluginApprovalSeverity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"critical">]>;
  readonly ExecApprovalPresentation: import("typebox").TObject<{
    kind: import("typebox").TLiteral<"exec">;
    commandText: import("typebox").TString;
    commandPreview: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    warningText: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    host: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    nodeId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
  }>;
  readonly PluginApprovalPresentation: import("typebox").TObject<{
    kind: import("typebox").TLiteral<"plugin">;
    title: import("typebox").TString;
    description: import("typebox").TString;
    detail: import("typebox").TOptional<import("typebox").TString>;
    severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"critical">]>;
    pluginId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    toolName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
  }>;
  readonly SystemAgentApprovalPresentation: import("typebox").TObject<{
    kind: import("typebox").TLiteral<"system-agent">;
    title: import("typebox").TString;
    description: import("typebox").TString;
    proposalHash: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    allowedDecisions: import("typebox").TTuple<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"deny">]>;
  }>;
  readonly ApprovalPresentation: import("typebox").TUnion<[import("typebox").TObject<{
    kind: import("typebox").TLiteral<"exec">;
    commandText: import("typebox").TString;
    commandPreview: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    warningText: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    host: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    nodeId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
  }>, import("typebox").TObject<{
    kind: import("typebox").TLiteral<"plugin">;
    title: import("typebox").TString;
    description: import("typebox").TString;
    detail: import("typebox").TOptional<import("typebox").TString>;
    severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"critical">]>;
    pluginId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    toolName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
  }>, import("typebox").TObject<{
    kind: import("typebox").TLiteral<"system-agent">;
    title: import("typebox").TString;
    description: import("typebox").TString;
    proposalHash: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    allowedDecisions: import("typebox").TTuple<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"deny">]>;
  }>]>;
  readonly PendingApprovalSnapshot: import("typebox").TObject<{
    status: import("typebox").TLiteral<"pending">;
    id: import("typebox").TString;
    urlPath: import("typebox").TString;
    createdAtMs: import("typebox").TInteger;
    expiresAtMs: import("typebox").TInteger;
    presentation: import("typebox").TUnion<[import("typebox").TObject<{
      kind: import("typebox").TLiteral<"exec">;
      commandText: import("typebox").TString;
      commandPreview: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      warningText: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      host: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      nodeId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"plugin">;
      title: import("typebox").TString;
      description: import("typebox").TString;
      detail: import("typebox").TOptional<import("typebox").TString>;
      severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"critical">]>;
      pluginId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      toolName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"system-agent">;
      title: import("typebox").TString;
      description: import("typebox").TString;
      proposalHash: import("typebox").TString;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TTuple<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"deny">]>;
    }>]>;
  }>;
  readonly AllowedApprovalSnapshot: import("typebox").TObject<{
    status: import("typebox").TLiteral<"allowed">;
    decision: import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">]>;
    reason: import("typebox").TUnion<[import("typebox").TLiteral<"user">]>;
    resolvedAtMs: import("typebox").TInteger;
    source: import("typebox").TOptional<import("typebox").TObject<{
      agentId: import("typebox").TOptional<import("typebox").TString>;
      sessionKey: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    resolver: import("typebox").TOptional<import("typebox").TObject<{
      kind: import("typebox").TUnion<[import("typebox").TLiteral<"device">, import("typebox").TLiteral<"channel">, import("typebox").TLiteral<"runtime">, import("typebox").TLiteral<"system">]>;
      id: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    id: import("typebox").TString;
    urlPath: import("typebox").TString;
    createdAtMs: import("typebox").TInteger;
    expiresAtMs: import("typebox").TInteger;
    presentation: import("typebox").TUnion<[import("typebox").TObject<{
      kind: import("typebox").TLiteral<"exec">;
      commandText: import("typebox").TString;
      commandPreview: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      warningText: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      host: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      nodeId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"plugin">;
      title: import("typebox").TString;
      description: import("typebox").TString;
      detail: import("typebox").TOptional<import("typebox").TString>;
      severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"critical">]>;
      pluginId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      toolName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"system-agent">;
      title: import("typebox").TString;
      description: import("typebox").TString;
      proposalHash: import("typebox").TString;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TTuple<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"deny">]>;
    }>]>;
  }>;
  readonly DeniedApprovalSnapshot: import("typebox").TObject<{
    status: import("typebox").TLiteral<"denied">;
    decision: import("typebox").TLiteral<"deny">;
    reason: import("typebox").TUnion<[import("typebox").TLiteral<"user">, import("typebox").TLiteral<"malformed-verdict">, import("typebox").TLiteral<"no-route">, import("typebox").TLiteral<"storage-corrupt">]>;
    resolvedAtMs: import("typebox").TInteger;
    source: import("typebox").TOptional<import("typebox").TObject<{
      agentId: import("typebox").TOptional<import("typebox").TString>;
      sessionKey: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    resolver: import("typebox").TOptional<import("typebox").TObject<{
      kind: import("typebox").TUnion<[import("typebox").TLiteral<"device">, import("typebox").TLiteral<"channel">, import("typebox").TLiteral<"runtime">, import("typebox").TLiteral<"system">]>;
      id: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    id: import("typebox").TString;
    urlPath: import("typebox").TString;
    createdAtMs: import("typebox").TInteger;
    expiresAtMs: import("typebox").TInteger;
    presentation: import("typebox").TUnion<[import("typebox").TObject<{
      kind: import("typebox").TLiteral<"exec">;
      commandText: import("typebox").TString;
      commandPreview: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      warningText: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      host: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      nodeId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"plugin">;
      title: import("typebox").TString;
      description: import("typebox").TString;
      detail: import("typebox").TOptional<import("typebox").TString>;
      severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"critical">]>;
      pluginId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      toolName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"system-agent">;
      title: import("typebox").TString;
      description: import("typebox").TString;
      proposalHash: import("typebox").TString;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TTuple<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"deny">]>;
    }>]>;
  }>;
  readonly ExpiredApprovalSnapshot: import("typebox").TObject<{
    status: import("typebox").TLiteral<"expired">;
    reason: import("typebox").TUnion<[import("typebox").TLiteral<"timeout">]>;
    resolvedAtMs: import("typebox").TInteger;
    source: import("typebox").TOptional<import("typebox").TObject<{
      agentId: import("typebox").TOptional<import("typebox").TString>;
      sessionKey: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    resolver: import("typebox").TOptional<import("typebox").TObject<{
      kind: import("typebox").TUnion<[import("typebox").TLiteral<"device">, import("typebox").TLiteral<"channel">, import("typebox").TLiteral<"runtime">, import("typebox").TLiteral<"system">]>;
      id: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    id: import("typebox").TString;
    urlPath: import("typebox").TString;
    createdAtMs: import("typebox").TInteger;
    expiresAtMs: import("typebox").TInteger;
    presentation: import("typebox").TUnion<[import("typebox").TObject<{
      kind: import("typebox").TLiteral<"exec">;
      commandText: import("typebox").TString;
      commandPreview: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      warningText: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      host: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      nodeId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"plugin">;
      title: import("typebox").TString;
      description: import("typebox").TString;
      detail: import("typebox").TOptional<import("typebox").TString>;
      severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"critical">]>;
      pluginId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      toolName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"system-agent">;
      title: import("typebox").TString;
      description: import("typebox").TString;
      proposalHash: import("typebox").TString;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TTuple<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"deny">]>;
    }>]>;
  }>;
  readonly CancelledApprovalSnapshot: import("typebox").TObject<{
    status: import("typebox").TLiteral<"cancelled">;
    reason: import("typebox").TUnion<[import("typebox").TLiteral<"run-aborted">, import("typebox").TLiteral<"gateway-restart">]>;
    resolvedAtMs: import("typebox").TInteger;
    source: import("typebox").TOptional<import("typebox").TObject<{
      agentId: import("typebox").TOptional<import("typebox").TString>;
      sessionKey: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    resolver: import("typebox").TOptional<import("typebox").TObject<{
      kind: import("typebox").TUnion<[import("typebox").TLiteral<"device">, import("typebox").TLiteral<"channel">, import("typebox").TLiteral<"runtime">, import("typebox").TLiteral<"system">]>;
      id: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    id: import("typebox").TString;
    urlPath: import("typebox").TString;
    createdAtMs: import("typebox").TInteger;
    expiresAtMs: import("typebox").TInteger;
    presentation: import("typebox").TUnion<[import("typebox").TObject<{
      kind: import("typebox").TLiteral<"exec">;
      commandText: import("typebox").TString;
      commandPreview: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      warningText: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      host: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      nodeId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"plugin">;
      title: import("typebox").TString;
      description: import("typebox").TString;
      detail: import("typebox").TOptional<import("typebox").TString>;
      severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"critical">]>;
      pluginId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      toolName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"system-agent">;
      title: import("typebox").TString;
      description: import("typebox").TString;
      proposalHash: import("typebox").TString;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TTuple<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"deny">]>;
    }>]>;
  }>;
  readonly ApprovalSnapshot: import("typebox").TUnion<[import("typebox").TObject<{
    status: import("typebox").TLiteral<"pending">;
    id: import("typebox").TString;
    urlPath: import("typebox").TString;
    createdAtMs: import("typebox").TInteger;
    expiresAtMs: import("typebox").TInteger;
    presentation: import("typebox").TUnion<[import("typebox").TObject<{
      kind: import("typebox").TLiteral<"exec">;
      commandText: import("typebox").TString;
      commandPreview: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      warningText: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      host: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      nodeId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"plugin">;
      title: import("typebox").TString;
      description: import("typebox").TString;
      detail: import("typebox").TOptional<import("typebox").TString>;
      severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"critical">]>;
      pluginId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      toolName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"system-agent">;
      title: import("typebox").TString;
      description: import("typebox").TString;
      proposalHash: import("typebox").TString;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TTuple<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"deny">]>;
    }>]>;
  }>, import("typebox").TObject<{
    status: import("typebox").TLiteral<"allowed">;
    decision: import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">]>;
    reason: import("typebox").TUnion<[import("typebox").TLiteral<"user">]>;
    resolvedAtMs: import("typebox").TInteger;
    source: import("typebox").TOptional<import("typebox").TObject<{
      agentId: import("typebox").TOptional<import("typebox").TString>;
      sessionKey: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    resolver: import("typebox").TOptional<import("typebox").TObject<{
      kind: import("typebox").TUnion<[import("typebox").TLiteral<"device">, import("typebox").TLiteral<"channel">, import("typebox").TLiteral<"runtime">, import("typebox").TLiteral<"system">]>;
      id: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    id: import("typebox").TString;
    urlPath: import("typebox").TString;
    createdAtMs: import("typebox").TInteger;
    expiresAtMs: import("typebox").TInteger;
    presentation: import("typebox").TUnion<[import("typebox").TObject<{
      kind: import("typebox").TLiteral<"exec">;
      commandText: import("typebox").TString;
      commandPreview: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      warningText: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      host: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      nodeId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"plugin">;
      title: import("typebox").TString;
      description: import("typebox").TString;
      detail: import("typebox").TOptional<import("typebox").TString>;
      severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"critical">]>;
      pluginId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      toolName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"system-agent">;
      title: import("typebox").TString;
      description: import("typebox").TString;
      proposalHash: import("typebox").TString;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TTuple<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"deny">]>;
    }>]>;
  }>, import("typebox").TObject<{
    status: import("typebox").TLiteral<"denied">;
    decision: import("typebox").TLiteral<"deny">;
    reason: import("typebox").TUnion<[import("typebox").TLiteral<"user">, import("typebox").TLiteral<"malformed-verdict">, import("typebox").TLiteral<"no-route">, import("typebox").TLiteral<"storage-corrupt">]>;
    resolvedAtMs: import("typebox").TInteger;
    source: import("typebox").TOptional<import("typebox").TObject<{
      agentId: import("typebox").TOptional<import("typebox").TString>;
      sessionKey: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    resolver: import("typebox").TOptional<import("typebox").TObject<{
      kind: import("typebox").TUnion<[import("typebox").TLiteral<"device">, import("typebox").TLiteral<"channel">, import("typebox").TLiteral<"runtime">, import("typebox").TLiteral<"system">]>;
      id: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    id: import("typebox").TString;
    urlPath: import("typebox").TString;
    createdAtMs: import("typebox").TInteger;
    expiresAtMs: import("typebox").TInteger;
    presentation: import("typebox").TUnion<[import("typebox").TObject<{
      kind: import("typebox").TLiteral<"exec">;
      commandText: import("typebox").TString;
      commandPreview: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      warningText: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      host: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      nodeId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"plugin">;
      title: import("typebox").TString;
      description: import("typebox").TString;
      detail: import("typebox").TOptional<import("typebox").TString>;
      severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"critical">]>;
      pluginId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      toolName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"system-agent">;
      title: import("typebox").TString;
      description: import("typebox").TString;
      proposalHash: import("typebox").TString;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TTuple<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"deny">]>;
    }>]>;
  }>, import("typebox").TObject<{
    status: import("typebox").TLiteral<"expired">;
    reason: import("typebox").TUnion<[import("typebox").TLiteral<"timeout">]>;
    resolvedAtMs: import("typebox").TInteger;
    source: import("typebox").TOptional<import("typebox").TObject<{
      agentId: import("typebox").TOptional<import("typebox").TString>;
      sessionKey: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    resolver: import("typebox").TOptional<import("typebox").TObject<{
      kind: import("typebox").TUnion<[import("typebox").TLiteral<"device">, import("typebox").TLiteral<"channel">, import("typebox").TLiteral<"runtime">, import("typebox").TLiteral<"system">]>;
      id: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    id: import("typebox").TString;
    urlPath: import("typebox").TString;
    createdAtMs: import("typebox").TInteger;
    expiresAtMs: import("typebox").TInteger;
    presentation: import("typebox").TUnion<[import("typebox").TObject<{
      kind: import("typebox").TLiteral<"exec">;
      commandText: import("typebox").TString;
      commandPreview: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      warningText: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      host: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      nodeId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"plugin">;
      title: import("typebox").TString;
      description: import("typebox").TString;
      detail: import("typebox").TOptional<import("typebox").TString>;
      severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"critical">]>;
      pluginId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      toolName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"system-agent">;
      title: import("typebox").TString;
      description: import("typebox").TString;
      proposalHash: import("typebox").TString;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TTuple<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"deny">]>;
    }>]>;
  }>, import("typebox").TObject<{
    status: import("typebox").TLiteral<"cancelled">;
    reason: import("typebox").TUnion<[import("typebox").TLiteral<"run-aborted">, import("typebox").TLiteral<"gateway-restart">]>;
    resolvedAtMs: import("typebox").TInteger;
    source: import("typebox").TOptional<import("typebox").TObject<{
      agentId: import("typebox").TOptional<import("typebox").TString>;
      sessionKey: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    resolver: import("typebox").TOptional<import("typebox").TObject<{
      kind: import("typebox").TUnion<[import("typebox").TLiteral<"device">, import("typebox").TLiteral<"channel">, import("typebox").TLiteral<"runtime">, import("typebox").TLiteral<"system">]>;
      id: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    id: import("typebox").TString;
    urlPath: import("typebox").TString;
    createdAtMs: import("typebox").TInteger;
    expiresAtMs: import("typebox").TInteger;
    presentation: import("typebox").TUnion<[import("typebox").TObject<{
      kind: import("typebox").TLiteral<"exec">;
      commandText: import("typebox").TString;
      commandPreview: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      warningText: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      host: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      nodeId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"plugin">;
      title: import("typebox").TString;
      description: import("typebox").TString;
      detail: import("typebox").TOptional<import("typebox").TString>;
      severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"critical">]>;
      pluginId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      toolName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"system-agent">;
      title: import("typebox").TString;
      description: import("typebox").TString;
      proposalHash: import("typebox").TString;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TTuple<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"deny">]>;
    }>]>;
  }>]>;
  readonly ApprovalTerminalReason: import("typebox").TUnion<[import("typebox").TLiteral<"user">, import("typebox").TLiteral<"timeout">, import("typebox").TLiteral<"malformed-verdict">, import("typebox").TLiteral<"no-route">, import("typebox").TLiteral<"run-aborted">, import("typebox").TLiteral<"gateway-restart">, import("typebox").TLiteral<"storage-corrupt">]>;
  readonly TerminalApprovalSnapshot: import("typebox").TUnion<[import("typebox").TObject<{
    status: import("typebox").TLiteral<"allowed">;
    decision: import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">]>;
    reason: import("typebox").TUnion<[import("typebox").TLiteral<"user">]>;
    resolvedAtMs: import("typebox").TInteger;
    source: import("typebox").TOptional<import("typebox").TObject<{
      agentId: import("typebox").TOptional<import("typebox").TString>;
      sessionKey: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    resolver: import("typebox").TOptional<import("typebox").TObject<{
      kind: import("typebox").TUnion<[import("typebox").TLiteral<"device">, import("typebox").TLiteral<"channel">, import("typebox").TLiteral<"runtime">, import("typebox").TLiteral<"system">]>;
      id: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    id: import("typebox").TString;
    urlPath: import("typebox").TString;
    createdAtMs: import("typebox").TInteger;
    expiresAtMs: import("typebox").TInteger;
    presentation: import("typebox").TUnion<[import("typebox").TObject<{
      kind: import("typebox").TLiteral<"exec">;
      commandText: import("typebox").TString;
      commandPreview: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      warningText: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      host: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      nodeId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"plugin">;
      title: import("typebox").TString;
      description: import("typebox").TString;
      detail: import("typebox").TOptional<import("typebox").TString>;
      severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"critical">]>;
      pluginId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      toolName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"system-agent">;
      title: import("typebox").TString;
      description: import("typebox").TString;
      proposalHash: import("typebox").TString;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TTuple<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"deny">]>;
    }>]>;
  }>, import("typebox").TObject<{
    status: import("typebox").TLiteral<"denied">;
    decision: import("typebox").TLiteral<"deny">;
    reason: import("typebox").TUnion<[import("typebox").TLiteral<"user">, import("typebox").TLiteral<"malformed-verdict">, import("typebox").TLiteral<"no-route">, import("typebox").TLiteral<"storage-corrupt">]>;
    resolvedAtMs: import("typebox").TInteger;
    source: import("typebox").TOptional<import("typebox").TObject<{
      agentId: import("typebox").TOptional<import("typebox").TString>;
      sessionKey: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    resolver: import("typebox").TOptional<import("typebox").TObject<{
      kind: import("typebox").TUnion<[import("typebox").TLiteral<"device">, import("typebox").TLiteral<"channel">, import("typebox").TLiteral<"runtime">, import("typebox").TLiteral<"system">]>;
      id: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    id: import("typebox").TString;
    urlPath: import("typebox").TString;
    createdAtMs: import("typebox").TInteger;
    expiresAtMs: import("typebox").TInteger;
    presentation: import("typebox").TUnion<[import("typebox").TObject<{
      kind: import("typebox").TLiteral<"exec">;
      commandText: import("typebox").TString;
      commandPreview: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      warningText: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      host: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      nodeId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"plugin">;
      title: import("typebox").TString;
      description: import("typebox").TString;
      detail: import("typebox").TOptional<import("typebox").TString>;
      severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"critical">]>;
      pluginId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      toolName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"system-agent">;
      title: import("typebox").TString;
      description: import("typebox").TString;
      proposalHash: import("typebox").TString;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TTuple<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"deny">]>;
    }>]>;
  }>, import("typebox").TObject<{
    status: import("typebox").TLiteral<"expired">;
    reason: import("typebox").TUnion<[import("typebox").TLiteral<"timeout">]>;
    resolvedAtMs: import("typebox").TInteger;
    source: import("typebox").TOptional<import("typebox").TObject<{
      agentId: import("typebox").TOptional<import("typebox").TString>;
      sessionKey: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    resolver: import("typebox").TOptional<import("typebox").TObject<{
      kind: import("typebox").TUnion<[import("typebox").TLiteral<"device">, import("typebox").TLiteral<"channel">, import("typebox").TLiteral<"runtime">, import("typebox").TLiteral<"system">]>;
      id: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    id: import("typebox").TString;
    urlPath: import("typebox").TString;
    createdAtMs: import("typebox").TInteger;
    expiresAtMs: import("typebox").TInteger;
    presentation: import("typebox").TUnion<[import("typebox").TObject<{
      kind: import("typebox").TLiteral<"exec">;
      commandText: import("typebox").TString;
      commandPreview: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      warningText: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      host: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      nodeId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"plugin">;
      title: import("typebox").TString;
      description: import("typebox").TString;
      detail: import("typebox").TOptional<import("typebox").TString>;
      severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"critical">]>;
      pluginId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      toolName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"system-agent">;
      title: import("typebox").TString;
      description: import("typebox").TString;
      proposalHash: import("typebox").TString;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TTuple<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"deny">]>;
    }>]>;
  }>, import("typebox").TObject<{
    status: import("typebox").TLiteral<"cancelled">;
    reason: import("typebox").TUnion<[import("typebox").TLiteral<"run-aborted">, import("typebox").TLiteral<"gateway-restart">]>;
    resolvedAtMs: import("typebox").TInteger;
    source: import("typebox").TOptional<import("typebox").TObject<{
      agentId: import("typebox").TOptional<import("typebox").TString>;
      sessionKey: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    resolver: import("typebox").TOptional<import("typebox").TObject<{
      kind: import("typebox").TUnion<[import("typebox").TLiteral<"device">, import("typebox").TLiteral<"channel">, import("typebox").TLiteral<"runtime">, import("typebox").TLiteral<"system">]>;
      id: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    id: import("typebox").TString;
    urlPath: import("typebox").TString;
    createdAtMs: import("typebox").TInteger;
    expiresAtMs: import("typebox").TInteger;
    presentation: import("typebox").TUnion<[import("typebox").TObject<{
      kind: import("typebox").TLiteral<"exec">;
      commandText: import("typebox").TString;
      commandPreview: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      warningText: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      host: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      nodeId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"plugin">;
      title: import("typebox").TString;
      description: import("typebox").TString;
      detail: import("typebox").TOptional<import("typebox").TString>;
      severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"critical">]>;
      pluginId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      toolName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
    }>, import("typebox").TObject<{
      kind: import("typebox").TLiteral<"system-agent">;
      title: import("typebox").TString;
      description: import("typebox").TString;
      proposalHash: import("typebox").TString;
      agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      allowedDecisions: import("typebox").TTuple<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"deny">]>;
    }>]>;
  }>]>;
  readonly ApprovalGetParams: import("typebox").TObject<{
    id: import("typebox").TString;
  }>;
  readonly ApprovalGetResult: import("typebox").TObject<{
    approval: import("typebox").TUnion<[import("typebox").TObject<{
      status: import("typebox").TLiteral<"pending">;
      id: import("typebox").TString;
      urlPath: import("typebox").TString;
      createdAtMs: import("typebox").TInteger;
      expiresAtMs: import("typebox").TInteger;
      presentation: import("typebox").TUnion<[import("typebox").TObject<{
        kind: import("typebox").TLiteral<"exec">;
        commandText: import("typebox").TString;
        commandPreview: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        warningText: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        host: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        nodeId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"plugin">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        detail: import("typebox").TOptional<import("typebox").TString>;
        severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"critical">]>;
        pluginId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        toolName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"system-agent">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        proposalHash: import("typebox").TString;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TTuple<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"deny">]>;
      }>]>;
    }>, import("typebox").TObject<{
      status: import("typebox").TLiteral<"allowed">;
      decision: import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">]>;
      reason: import("typebox").TUnion<[import("typebox").TLiteral<"user">]>;
      resolvedAtMs: import("typebox").TInteger;
      source: import("typebox").TOptional<import("typebox").TObject<{
        agentId: import("typebox").TOptional<import("typebox").TString>;
        sessionKey: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      resolver: import("typebox").TOptional<import("typebox").TObject<{
        kind: import("typebox").TUnion<[import("typebox").TLiteral<"device">, import("typebox").TLiteral<"channel">, import("typebox").TLiteral<"runtime">, import("typebox").TLiteral<"system">]>;
        id: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      id: import("typebox").TString;
      urlPath: import("typebox").TString;
      createdAtMs: import("typebox").TInteger;
      expiresAtMs: import("typebox").TInteger;
      presentation: import("typebox").TUnion<[import("typebox").TObject<{
        kind: import("typebox").TLiteral<"exec">;
        commandText: import("typebox").TString;
        commandPreview: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        warningText: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        host: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        nodeId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"plugin">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        detail: import("typebox").TOptional<import("typebox").TString>;
        severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"critical">]>;
        pluginId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        toolName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"system-agent">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        proposalHash: import("typebox").TString;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TTuple<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"deny">]>;
      }>]>;
    }>, import("typebox").TObject<{
      status: import("typebox").TLiteral<"denied">;
      decision: import("typebox").TLiteral<"deny">;
      reason: import("typebox").TUnion<[import("typebox").TLiteral<"user">, import("typebox").TLiteral<"malformed-verdict">, import("typebox").TLiteral<"no-route">, import("typebox").TLiteral<"storage-corrupt">]>;
      resolvedAtMs: import("typebox").TInteger;
      source: import("typebox").TOptional<import("typebox").TObject<{
        agentId: import("typebox").TOptional<import("typebox").TString>;
        sessionKey: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      resolver: import("typebox").TOptional<import("typebox").TObject<{
        kind: import("typebox").TUnion<[import("typebox").TLiteral<"device">, import("typebox").TLiteral<"channel">, import("typebox").TLiteral<"runtime">, import("typebox").TLiteral<"system">]>;
        id: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      id: import("typebox").TString;
      urlPath: import("typebox").TString;
      createdAtMs: import("typebox").TInteger;
      expiresAtMs: import("typebox").TInteger;
      presentation: import("typebox").TUnion<[import("typebox").TObject<{
        kind: import("typebox").TLiteral<"exec">;
        commandText: import("typebox").TString;
        commandPreview: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        warningText: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        host: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        nodeId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"plugin">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        detail: import("typebox").TOptional<import("typebox").TString>;
        severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"critical">]>;
        pluginId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        toolName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"system-agent">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        proposalHash: import("typebox").TString;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TTuple<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"deny">]>;
      }>]>;
    }>, import("typebox").TObject<{
      status: import("typebox").TLiteral<"expired">;
      reason: import("typebox").TUnion<[import("typebox").TLiteral<"timeout">]>;
      resolvedAtMs: import("typebox").TInteger;
      source: import("typebox").TOptional<import("typebox").TObject<{
        agentId: import("typebox").TOptional<import("typebox").TString>;
        sessionKey: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      resolver: import("typebox").TOptional<import("typebox").TObject<{
        kind: import("typebox").TUnion<[import("typebox").TLiteral<"device">, import("typebox").TLiteral<"channel">, import("typebox").TLiteral<"runtime">, import("typebox").TLiteral<"system">]>;
        id: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      id: import("typebox").TString;
      urlPath: import("typebox").TString;
      createdAtMs: import("typebox").TInteger;
      expiresAtMs: import("typebox").TInteger;
      presentation: import("typebox").TUnion<[import("typebox").TObject<{
        kind: import("typebox").TLiteral<"exec">;
        commandText: import("typebox").TString;
        commandPreview: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        warningText: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        host: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        nodeId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"plugin">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        detail: import("typebox").TOptional<import("typebox").TString>;
        severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"critical">]>;
        pluginId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        toolName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"system-agent">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        proposalHash: import("typebox").TString;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TTuple<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"deny">]>;
      }>]>;
    }>, import("typebox").TObject<{
      status: import("typebox").TLiteral<"cancelled">;
      reason: import("typebox").TUnion<[import("typebox").TLiteral<"run-aborted">, import("typebox").TLiteral<"gateway-restart">]>;
      resolvedAtMs: import("typebox").TInteger;
      source: import("typebox").TOptional<import("typebox").TObject<{
        agentId: import("typebox").TOptional<import("typebox").TString>;
        sessionKey: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      resolver: import("typebox").TOptional<import("typebox").TObject<{
        kind: import("typebox").TUnion<[import("typebox").TLiteral<"device">, import("typebox").TLiteral<"channel">, import("typebox").TLiteral<"runtime">, import("typebox").TLiteral<"system">]>;
        id: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      id: import("typebox").TString;
      urlPath: import("typebox").TString;
      createdAtMs: import("typebox").TInteger;
      expiresAtMs: import("typebox").TInteger;
      presentation: import("typebox").TUnion<[import("typebox").TObject<{
        kind: import("typebox").TLiteral<"exec">;
        commandText: import("typebox").TString;
        commandPreview: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        warningText: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        host: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        nodeId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"plugin">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        detail: import("typebox").TOptional<import("typebox").TString>;
        severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"critical">]>;
        pluginId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        toolName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"system-agent">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        proposalHash: import("typebox").TString;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TTuple<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"deny">]>;
      }>]>;
    }>]>;
  }>;
  readonly ApprovalHistoryParams: import("typebox").TObject<{
    cursor: import("typebox").TOptional<import("typebox").TString>;
    limit: import("typebox").TOptional<import("typebox").TInteger>;
    kind: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"exec">, import("typebox").TLiteral<"plugin">, import("typebox").TLiteral<"system-agent">]>>;
  }>;
  readonly ApprovalHistoryResult: import("typebox").TObject<{
    items: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TObject<{
      status: import("typebox").TLiteral<"allowed">;
      decision: import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">]>;
      reason: import("typebox").TUnion<[import("typebox").TLiteral<"user">]>;
      resolvedAtMs: import("typebox").TInteger;
      source: import("typebox").TOptional<import("typebox").TObject<{
        agentId: import("typebox").TOptional<import("typebox").TString>;
        sessionKey: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      resolver: import("typebox").TOptional<import("typebox").TObject<{
        kind: import("typebox").TUnion<[import("typebox").TLiteral<"device">, import("typebox").TLiteral<"channel">, import("typebox").TLiteral<"runtime">, import("typebox").TLiteral<"system">]>;
        id: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      id: import("typebox").TString;
      urlPath: import("typebox").TString;
      createdAtMs: import("typebox").TInteger;
      expiresAtMs: import("typebox").TInteger;
      presentation: import("typebox").TUnion<[import("typebox").TObject<{
        kind: import("typebox").TLiteral<"exec">;
        commandText: import("typebox").TString;
        commandPreview: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        warningText: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        host: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        nodeId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"plugin">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        detail: import("typebox").TOptional<import("typebox").TString>;
        severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"critical">]>;
        pluginId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        toolName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"system-agent">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        proposalHash: import("typebox").TString;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TTuple<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"deny">]>;
      }>]>;
    }>, import("typebox").TObject<{
      status: import("typebox").TLiteral<"denied">;
      decision: import("typebox").TLiteral<"deny">;
      reason: import("typebox").TUnion<[import("typebox").TLiteral<"user">, import("typebox").TLiteral<"malformed-verdict">, import("typebox").TLiteral<"no-route">, import("typebox").TLiteral<"storage-corrupt">]>;
      resolvedAtMs: import("typebox").TInteger;
      source: import("typebox").TOptional<import("typebox").TObject<{
        agentId: import("typebox").TOptional<import("typebox").TString>;
        sessionKey: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      resolver: import("typebox").TOptional<import("typebox").TObject<{
        kind: import("typebox").TUnion<[import("typebox").TLiteral<"device">, import("typebox").TLiteral<"channel">, import("typebox").TLiteral<"runtime">, import("typebox").TLiteral<"system">]>;
        id: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      id: import("typebox").TString;
      urlPath: import("typebox").TString;
      createdAtMs: import("typebox").TInteger;
      expiresAtMs: import("typebox").TInteger;
      presentation: import("typebox").TUnion<[import("typebox").TObject<{
        kind: import("typebox").TLiteral<"exec">;
        commandText: import("typebox").TString;
        commandPreview: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        warningText: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        host: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        nodeId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"plugin">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        detail: import("typebox").TOptional<import("typebox").TString>;
        severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"critical">]>;
        pluginId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        toolName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"system-agent">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        proposalHash: import("typebox").TString;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TTuple<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"deny">]>;
      }>]>;
    }>, import("typebox").TObject<{
      status: import("typebox").TLiteral<"expired">;
      reason: import("typebox").TUnion<[import("typebox").TLiteral<"timeout">]>;
      resolvedAtMs: import("typebox").TInteger;
      source: import("typebox").TOptional<import("typebox").TObject<{
        agentId: import("typebox").TOptional<import("typebox").TString>;
        sessionKey: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      resolver: import("typebox").TOptional<import("typebox").TObject<{
        kind: import("typebox").TUnion<[import("typebox").TLiteral<"device">, import("typebox").TLiteral<"channel">, import("typebox").TLiteral<"runtime">, import("typebox").TLiteral<"system">]>;
        id: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      id: import("typebox").TString;
      urlPath: import("typebox").TString;
      createdAtMs: import("typebox").TInteger;
      expiresAtMs: import("typebox").TInteger;
      presentation: import("typebox").TUnion<[import("typebox").TObject<{
        kind: import("typebox").TLiteral<"exec">;
        commandText: import("typebox").TString;
        commandPreview: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        warningText: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        host: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        nodeId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"plugin">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        detail: import("typebox").TOptional<import("typebox").TString>;
        severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"critical">]>;
        pluginId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        toolName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"system-agent">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        proposalHash: import("typebox").TString;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TTuple<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"deny">]>;
      }>]>;
    }>, import("typebox").TObject<{
      status: import("typebox").TLiteral<"cancelled">;
      reason: import("typebox").TUnion<[import("typebox").TLiteral<"run-aborted">, import("typebox").TLiteral<"gateway-restart">]>;
      resolvedAtMs: import("typebox").TInteger;
      source: import("typebox").TOptional<import("typebox").TObject<{
        agentId: import("typebox").TOptional<import("typebox").TString>;
        sessionKey: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      resolver: import("typebox").TOptional<import("typebox").TObject<{
        kind: import("typebox").TUnion<[import("typebox").TLiteral<"device">, import("typebox").TLiteral<"channel">, import("typebox").TLiteral<"runtime">, import("typebox").TLiteral<"system">]>;
        id: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      id: import("typebox").TString;
      urlPath: import("typebox").TString;
      createdAtMs: import("typebox").TInteger;
      expiresAtMs: import("typebox").TInteger;
      presentation: import("typebox").TUnion<[import("typebox").TObject<{
        kind: import("typebox").TLiteral<"exec">;
        commandText: import("typebox").TString;
        commandPreview: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        warningText: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        host: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        nodeId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"plugin">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        detail: import("typebox").TOptional<import("typebox").TString>;
        severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"critical">]>;
        pluginId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        toolName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"system-agent">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        proposalHash: import("typebox").TString;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TTuple<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"deny">]>;
      }>]>;
    }>]>>;
    nextCursor: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly ApprovalResolveParams: import("typebox").TObject<{
    id: import("typebox").TString;
    kind: import("typebox").TUnion<[import("typebox").TLiteral<"exec">, import("typebox").TLiteral<"plugin">, import("typebox").TLiteral<"system-agent">]>;
    decision: import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>;
  }>;
  readonly ApprovalResolveResult: import("typebox").TObject<{
    applied: import("typebox").TBoolean;
    approval: import("typebox").TUnion<[import("typebox").TObject<{
      status: import("typebox").TLiteral<"allowed">;
      decision: import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">]>;
      reason: import("typebox").TUnion<[import("typebox").TLiteral<"user">]>;
      resolvedAtMs: import("typebox").TInteger;
      source: import("typebox").TOptional<import("typebox").TObject<{
        agentId: import("typebox").TOptional<import("typebox").TString>;
        sessionKey: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      resolver: import("typebox").TOptional<import("typebox").TObject<{
        kind: import("typebox").TUnion<[import("typebox").TLiteral<"device">, import("typebox").TLiteral<"channel">, import("typebox").TLiteral<"runtime">, import("typebox").TLiteral<"system">]>;
        id: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      id: import("typebox").TString;
      urlPath: import("typebox").TString;
      createdAtMs: import("typebox").TInteger;
      expiresAtMs: import("typebox").TInteger;
      presentation: import("typebox").TUnion<[import("typebox").TObject<{
        kind: import("typebox").TLiteral<"exec">;
        commandText: import("typebox").TString;
        commandPreview: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        warningText: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        host: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        nodeId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"plugin">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        detail: import("typebox").TOptional<import("typebox").TString>;
        severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"critical">]>;
        pluginId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        toolName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"system-agent">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        proposalHash: import("typebox").TString;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TTuple<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"deny">]>;
      }>]>;
    }>, import("typebox").TObject<{
      status: import("typebox").TLiteral<"denied">;
      decision: import("typebox").TLiteral<"deny">;
      reason: import("typebox").TUnion<[import("typebox").TLiteral<"user">, import("typebox").TLiteral<"malformed-verdict">, import("typebox").TLiteral<"no-route">, import("typebox").TLiteral<"storage-corrupt">]>;
      resolvedAtMs: import("typebox").TInteger;
      source: import("typebox").TOptional<import("typebox").TObject<{
        agentId: import("typebox").TOptional<import("typebox").TString>;
        sessionKey: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      resolver: import("typebox").TOptional<import("typebox").TObject<{
        kind: import("typebox").TUnion<[import("typebox").TLiteral<"device">, import("typebox").TLiteral<"channel">, import("typebox").TLiteral<"runtime">, import("typebox").TLiteral<"system">]>;
        id: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      id: import("typebox").TString;
      urlPath: import("typebox").TString;
      createdAtMs: import("typebox").TInteger;
      expiresAtMs: import("typebox").TInteger;
      presentation: import("typebox").TUnion<[import("typebox").TObject<{
        kind: import("typebox").TLiteral<"exec">;
        commandText: import("typebox").TString;
        commandPreview: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        warningText: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        host: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        nodeId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"plugin">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        detail: import("typebox").TOptional<import("typebox").TString>;
        severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"critical">]>;
        pluginId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        toolName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"system-agent">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        proposalHash: import("typebox").TString;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TTuple<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"deny">]>;
      }>]>;
    }>, import("typebox").TObject<{
      status: import("typebox").TLiteral<"expired">;
      reason: import("typebox").TUnion<[import("typebox").TLiteral<"timeout">]>;
      resolvedAtMs: import("typebox").TInteger;
      source: import("typebox").TOptional<import("typebox").TObject<{
        agentId: import("typebox").TOptional<import("typebox").TString>;
        sessionKey: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      resolver: import("typebox").TOptional<import("typebox").TObject<{
        kind: import("typebox").TUnion<[import("typebox").TLiteral<"device">, import("typebox").TLiteral<"channel">, import("typebox").TLiteral<"runtime">, import("typebox").TLiteral<"system">]>;
        id: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      id: import("typebox").TString;
      urlPath: import("typebox").TString;
      createdAtMs: import("typebox").TInteger;
      expiresAtMs: import("typebox").TInteger;
      presentation: import("typebox").TUnion<[import("typebox").TObject<{
        kind: import("typebox").TLiteral<"exec">;
        commandText: import("typebox").TString;
        commandPreview: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        warningText: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        host: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        nodeId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"plugin">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        detail: import("typebox").TOptional<import("typebox").TString>;
        severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"critical">]>;
        pluginId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        toolName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"system-agent">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        proposalHash: import("typebox").TString;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TTuple<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"deny">]>;
      }>]>;
    }>, import("typebox").TObject<{
      status: import("typebox").TLiteral<"cancelled">;
      reason: import("typebox").TUnion<[import("typebox").TLiteral<"run-aborted">, import("typebox").TLiteral<"gateway-restart">]>;
      resolvedAtMs: import("typebox").TInteger;
      source: import("typebox").TOptional<import("typebox").TObject<{
        agentId: import("typebox").TOptional<import("typebox").TString>;
        sessionKey: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      resolver: import("typebox").TOptional<import("typebox").TObject<{
        kind: import("typebox").TUnion<[import("typebox").TLiteral<"device">, import("typebox").TLiteral<"channel">, import("typebox").TLiteral<"runtime">, import("typebox").TLiteral<"system">]>;
        id: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      id: import("typebox").TString;
      urlPath: import("typebox").TString;
      createdAtMs: import("typebox").TInteger;
      expiresAtMs: import("typebox").TInteger;
      presentation: import("typebox").TUnion<[import("typebox").TObject<{
        kind: import("typebox").TLiteral<"exec">;
        commandText: import("typebox").TString;
        commandPreview: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        warningText: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        host: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        nodeId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"plugin">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        detail: import("typebox").TOptional<import("typebox").TString>;
        severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"critical">]>;
        pluginId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        toolName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"system-agent">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        proposalHash: import("typebox").TString;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TTuple<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"deny">]>;
      }>]>;
    }>]>;
  }>;
  readonly PendingSessionApprovalEvent: import("typebox").TObject<{
    phase: import("typebox").TLiteral<"pending">;
    approval: import("typebox").TObject<{
      status: import("typebox").TLiteral<"pending">;
      id: import("typebox").TString;
      urlPath: import("typebox").TString;
      createdAtMs: import("typebox").TInteger;
      expiresAtMs: import("typebox").TInteger;
      presentation: import("typebox").TUnion<[import("typebox").TObject<{
        kind: import("typebox").TLiteral<"exec">;
        commandText: import("typebox").TString;
        commandPreview: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        warningText: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        host: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        nodeId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"plugin">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        detail: import("typebox").TOptional<import("typebox").TString>;
        severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"critical">]>;
        pluginId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        toolName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"system-agent">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        proposalHash: import("typebox").TString;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TTuple<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"deny">]>;
      }>]>;
    }>;
    sessionKey: import("typebox").TString;
    sourceSessionKey: import("typebox").TOptional<import("typebox").TString>;
    updatedAtMs: import("typebox").TInteger;
  }>;
  readonly TerminalSessionApprovalEvent: import("typebox").TObject<{
    phase: import("typebox").TLiteral<"terminal">;
    approval: import("typebox").TUnion<[import("typebox").TObject<{
      status: import("typebox").TLiteral<"allowed">;
      decision: import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">]>;
      reason: import("typebox").TUnion<[import("typebox").TLiteral<"user">]>;
      resolvedAtMs: import("typebox").TInteger;
      source: import("typebox").TOptional<import("typebox").TObject<{
        agentId: import("typebox").TOptional<import("typebox").TString>;
        sessionKey: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      resolver: import("typebox").TOptional<import("typebox").TObject<{
        kind: import("typebox").TUnion<[import("typebox").TLiteral<"device">, import("typebox").TLiteral<"channel">, import("typebox").TLiteral<"runtime">, import("typebox").TLiteral<"system">]>;
        id: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      id: import("typebox").TString;
      urlPath: import("typebox").TString;
      createdAtMs: import("typebox").TInteger;
      expiresAtMs: import("typebox").TInteger;
      presentation: import("typebox").TUnion<[import("typebox").TObject<{
        kind: import("typebox").TLiteral<"exec">;
        commandText: import("typebox").TString;
        commandPreview: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        warningText: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        host: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        nodeId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"plugin">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        detail: import("typebox").TOptional<import("typebox").TString>;
        severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"critical">]>;
        pluginId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        toolName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"system-agent">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        proposalHash: import("typebox").TString;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TTuple<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"deny">]>;
      }>]>;
    }>, import("typebox").TObject<{
      status: import("typebox").TLiteral<"denied">;
      decision: import("typebox").TLiteral<"deny">;
      reason: import("typebox").TUnion<[import("typebox").TLiteral<"user">, import("typebox").TLiteral<"malformed-verdict">, import("typebox").TLiteral<"no-route">, import("typebox").TLiteral<"storage-corrupt">]>;
      resolvedAtMs: import("typebox").TInteger;
      source: import("typebox").TOptional<import("typebox").TObject<{
        agentId: import("typebox").TOptional<import("typebox").TString>;
        sessionKey: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      resolver: import("typebox").TOptional<import("typebox").TObject<{
        kind: import("typebox").TUnion<[import("typebox").TLiteral<"device">, import("typebox").TLiteral<"channel">, import("typebox").TLiteral<"runtime">, import("typebox").TLiteral<"system">]>;
        id: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      id: import("typebox").TString;
      urlPath: import("typebox").TString;
      createdAtMs: import("typebox").TInteger;
      expiresAtMs: import("typebox").TInteger;
      presentation: import("typebox").TUnion<[import("typebox").TObject<{
        kind: import("typebox").TLiteral<"exec">;
        commandText: import("typebox").TString;
        commandPreview: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        warningText: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        host: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        nodeId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"plugin">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        detail: import("typebox").TOptional<import("typebox").TString>;
        severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"critical">]>;
        pluginId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        toolName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"system-agent">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        proposalHash: import("typebox").TString;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TTuple<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"deny">]>;
      }>]>;
    }>, import("typebox").TObject<{
      status: import("typebox").TLiteral<"expired">;
      reason: import("typebox").TUnion<[import("typebox").TLiteral<"timeout">]>;
      resolvedAtMs: import("typebox").TInteger;
      source: import("typebox").TOptional<import("typebox").TObject<{
        agentId: import("typebox").TOptional<import("typebox").TString>;
        sessionKey: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      resolver: import("typebox").TOptional<import("typebox").TObject<{
        kind: import("typebox").TUnion<[import("typebox").TLiteral<"device">, import("typebox").TLiteral<"channel">, import("typebox").TLiteral<"runtime">, import("typebox").TLiteral<"system">]>;
        id: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      id: import("typebox").TString;
      urlPath: import("typebox").TString;
      createdAtMs: import("typebox").TInteger;
      expiresAtMs: import("typebox").TInteger;
      presentation: import("typebox").TUnion<[import("typebox").TObject<{
        kind: import("typebox").TLiteral<"exec">;
        commandText: import("typebox").TString;
        commandPreview: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        warningText: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        host: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        nodeId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"plugin">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        detail: import("typebox").TOptional<import("typebox").TString>;
        severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"critical">]>;
        pluginId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        toolName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"system-agent">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        proposalHash: import("typebox").TString;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TTuple<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"deny">]>;
      }>]>;
    }>, import("typebox").TObject<{
      status: import("typebox").TLiteral<"cancelled">;
      reason: import("typebox").TUnion<[import("typebox").TLiteral<"run-aborted">, import("typebox").TLiteral<"gateway-restart">]>;
      resolvedAtMs: import("typebox").TInteger;
      source: import("typebox").TOptional<import("typebox").TObject<{
        agentId: import("typebox").TOptional<import("typebox").TString>;
        sessionKey: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      resolver: import("typebox").TOptional<import("typebox").TObject<{
        kind: import("typebox").TUnion<[import("typebox").TLiteral<"device">, import("typebox").TLiteral<"channel">, import("typebox").TLiteral<"runtime">, import("typebox").TLiteral<"system">]>;
        id: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      id: import("typebox").TString;
      urlPath: import("typebox").TString;
      createdAtMs: import("typebox").TInteger;
      expiresAtMs: import("typebox").TInteger;
      presentation: import("typebox").TUnion<[import("typebox").TObject<{
        kind: import("typebox").TLiteral<"exec">;
        commandText: import("typebox").TString;
        commandPreview: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        warningText: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        host: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        nodeId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"plugin">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        detail: import("typebox").TOptional<import("typebox").TString>;
        severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"critical">]>;
        pluginId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        toolName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"system-agent">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        proposalHash: import("typebox").TString;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TTuple<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"deny">]>;
      }>]>;
    }>]>;
    sessionKey: import("typebox").TString;
    sourceSessionKey: import("typebox").TOptional<import("typebox").TString>;
    updatedAtMs: import("typebox").TInteger;
  }>;
  readonly SessionApprovalEvent: import("typebox").TUnion<[import("typebox").TObject<{
    phase: import("typebox").TLiteral<"pending">;
    approval: import("typebox").TObject<{
      status: import("typebox").TLiteral<"pending">;
      id: import("typebox").TString;
      urlPath: import("typebox").TString;
      createdAtMs: import("typebox").TInteger;
      expiresAtMs: import("typebox").TInteger;
      presentation: import("typebox").TUnion<[import("typebox").TObject<{
        kind: import("typebox").TLiteral<"exec">;
        commandText: import("typebox").TString;
        commandPreview: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        warningText: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        host: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        nodeId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"plugin">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        detail: import("typebox").TOptional<import("typebox").TString>;
        severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"critical">]>;
        pluginId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        toolName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"system-agent">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        proposalHash: import("typebox").TString;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TTuple<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"deny">]>;
      }>]>;
    }>;
    sessionKey: import("typebox").TString;
    sourceSessionKey: import("typebox").TOptional<import("typebox").TString>;
    updatedAtMs: import("typebox").TInteger;
  }>, import("typebox").TObject<{
    phase: import("typebox").TLiteral<"terminal">;
    approval: import("typebox").TUnion<[import("typebox").TObject<{
      status: import("typebox").TLiteral<"allowed">;
      decision: import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">]>;
      reason: import("typebox").TUnion<[import("typebox").TLiteral<"user">]>;
      resolvedAtMs: import("typebox").TInteger;
      source: import("typebox").TOptional<import("typebox").TObject<{
        agentId: import("typebox").TOptional<import("typebox").TString>;
        sessionKey: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      resolver: import("typebox").TOptional<import("typebox").TObject<{
        kind: import("typebox").TUnion<[import("typebox").TLiteral<"device">, import("typebox").TLiteral<"channel">, import("typebox").TLiteral<"runtime">, import("typebox").TLiteral<"system">]>;
        id: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      id: import("typebox").TString;
      urlPath: import("typebox").TString;
      createdAtMs: import("typebox").TInteger;
      expiresAtMs: import("typebox").TInteger;
      presentation: import("typebox").TUnion<[import("typebox").TObject<{
        kind: import("typebox").TLiteral<"exec">;
        commandText: import("typebox").TString;
        commandPreview: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        warningText: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        host: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        nodeId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"plugin">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        detail: import("typebox").TOptional<import("typebox").TString>;
        severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"critical">]>;
        pluginId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        toolName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"system-agent">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        proposalHash: import("typebox").TString;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TTuple<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"deny">]>;
      }>]>;
    }>, import("typebox").TObject<{
      status: import("typebox").TLiteral<"denied">;
      decision: import("typebox").TLiteral<"deny">;
      reason: import("typebox").TUnion<[import("typebox").TLiteral<"user">, import("typebox").TLiteral<"malformed-verdict">, import("typebox").TLiteral<"no-route">, import("typebox").TLiteral<"storage-corrupt">]>;
      resolvedAtMs: import("typebox").TInteger;
      source: import("typebox").TOptional<import("typebox").TObject<{
        agentId: import("typebox").TOptional<import("typebox").TString>;
        sessionKey: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      resolver: import("typebox").TOptional<import("typebox").TObject<{
        kind: import("typebox").TUnion<[import("typebox").TLiteral<"device">, import("typebox").TLiteral<"channel">, import("typebox").TLiteral<"runtime">, import("typebox").TLiteral<"system">]>;
        id: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      id: import("typebox").TString;
      urlPath: import("typebox").TString;
      createdAtMs: import("typebox").TInteger;
      expiresAtMs: import("typebox").TInteger;
      presentation: import("typebox").TUnion<[import("typebox").TObject<{
        kind: import("typebox").TLiteral<"exec">;
        commandText: import("typebox").TString;
        commandPreview: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        warningText: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        host: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        nodeId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"plugin">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        detail: import("typebox").TOptional<import("typebox").TString>;
        severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"critical">]>;
        pluginId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        toolName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"system-agent">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        proposalHash: import("typebox").TString;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TTuple<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"deny">]>;
      }>]>;
    }>, import("typebox").TObject<{
      status: import("typebox").TLiteral<"expired">;
      reason: import("typebox").TUnion<[import("typebox").TLiteral<"timeout">]>;
      resolvedAtMs: import("typebox").TInteger;
      source: import("typebox").TOptional<import("typebox").TObject<{
        agentId: import("typebox").TOptional<import("typebox").TString>;
        sessionKey: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      resolver: import("typebox").TOptional<import("typebox").TObject<{
        kind: import("typebox").TUnion<[import("typebox").TLiteral<"device">, import("typebox").TLiteral<"channel">, import("typebox").TLiteral<"runtime">, import("typebox").TLiteral<"system">]>;
        id: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      id: import("typebox").TString;
      urlPath: import("typebox").TString;
      createdAtMs: import("typebox").TInteger;
      expiresAtMs: import("typebox").TInteger;
      presentation: import("typebox").TUnion<[import("typebox").TObject<{
        kind: import("typebox").TLiteral<"exec">;
        commandText: import("typebox").TString;
        commandPreview: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        warningText: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        host: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        nodeId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"plugin">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        detail: import("typebox").TOptional<import("typebox").TString>;
        severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"critical">]>;
        pluginId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        toolName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"system-agent">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        proposalHash: import("typebox").TString;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TTuple<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"deny">]>;
      }>]>;
    }>, import("typebox").TObject<{
      status: import("typebox").TLiteral<"cancelled">;
      reason: import("typebox").TUnion<[import("typebox").TLiteral<"run-aborted">, import("typebox").TLiteral<"gateway-restart">]>;
      resolvedAtMs: import("typebox").TInteger;
      source: import("typebox").TOptional<import("typebox").TObject<{
        agentId: import("typebox").TOptional<import("typebox").TString>;
        sessionKey: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      resolver: import("typebox").TOptional<import("typebox").TObject<{
        kind: import("typebox").TUnion<[import("typebox").TLiteral<"device">, import("typebox").TLiteral<"channel">, import("typebox").TLiteral<"runtime">, import("typebox").TLiteral<"system">]>;
        id: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      id: import("typebox").TString;
      urlPath: import("typebox").TString;
      createdAtMs: import("typebox").TInteger;
      expiresAtMs: import("typebox").TInteger;
      presentation: import("typebox").TUnion<[import("typebox").TObject<{
        kind: import("typebox").TLiteral<"exec">;
        commandText: import("typebox").TString;
        commandPreview: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        warningText: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        host: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        nodeId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"plugin">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        detail: import("typebox").TOptional<import("typebox").TString>;
        severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"critical">]>;
        pluginId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        toolName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"system-agent">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        proposalHash: import("typebox").TString;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TTuple<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"deny">]>;
      }>]>;
    }>]>;
    sessionKey: import("typebox").TString;
    sourceSessionKey: import("typebox").TOptional<import("typebox").TString>;
    updatedAtMs: import("typebox").TInteger;
  }>]>;
  readonly SessionApprovalReplay: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
    updatedAtMs: import("typebox").TInteger;
    approvals: import("typebox").TArray<import("typebox").TObject<{
      status: import("typebox").TLiteral<"pending">;
      id: import("typebox").TString;
      urlPath: import("typebox").TString;
      createdAtMs: import("typebox").TInteger;
      expiresAtMs: import("typebox").TInteger;
      presentation: import("typebox").TUnion<[import("typebox").TObject<{
        kind: import("typebox").TLiteral<"exec">;
        commandText: import("typebox").TString;
        commandPreview: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        warningText: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        host: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        nodeId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"plugin">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        detail: import("typebox").TOptional<import("typebox").TString>;
        severity: import("typebox").TUnion<[import("typebox").TLiteral<"info">, import("typebox").TLiteral<"warning">, import("typebox").TLiteral<"critical">]>;
        pluginId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        toolName: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TArray<import("typebox").TUnion<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"allow-always">, import("typebox").TLiteral<"deny">]>>;
      }>, import("typebox").TObject<{
        kind: import("typebox").TLiteral<"system-agent">;
        title: import("typebox").TString;
        description: import("typebox").TString;
        proposalHash: import("typebox").TString;
        agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
        allowedDecisions: import("typebox").TTuple<[import("typebox").TLiteral<"allow-once">, import("typebox").TLiteral<"deny">]>;
      }>]>;
    }>>;
    truncated: import("typebox").TBoolean;
  }>;
  readonly ExecApprovalsGetParams: import("typebox").TObject<{}>;
  readonly ExecApprovalsSetParams: import("typebox").TObject<{
    file: import("typebox").TObject<{
      version: import("typebox").TLiteral<1>;
      socket: import("typebox").TOptional<import("typebox").TObject<{
        path: import("typebox").TOptional<import("typebox").TString>;
        token: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      defaults: import("typebox").TOptional<import("typebox").TObject<{
        security: import("typebox").TOptional<import("typebox").TString>;
        ask: import("typebox").TOptional<import("typebox").TString>;
        askFallback: import("typebox").TOptional<import("typebox").TString>;
        autoAllowSkills: import("typebox").TOptional<import("typebox").TBoolean>;
      }>>;
      agents: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TObject<{
        allowlist: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
          id: import("typebox").TOptional<import("typebox").TString>;
          pattern: import("typebox").TString;
          source: import("typebox").TOptional<import("typebox").TLiteral<"allow-always">>;
          commandText: import("typebox").TOptional<import("typebox").TString>;
          argPattern: import("typebox").TOptional<import("typebox").TString>;
          lastUsedAt: import("typebox").TOptional<import("typebox").TNumber>;
          lastUsedCommand: import("typebox").TOptional<import("typebox").TString>;
          lastResolvedPath: import("typebox").TOptional<import("typebox").TString>;
        }>>>;
        security: import("typebox").TOptional<import("typebox").TString>;
        ask: import("typebox").TOptional<import("typebox").TString>;
        askFallback: import("typebox").TOptional<import("typebox").TString>;
        autoAllowSkills: import("typebox").TOptional<import("typebox").TBoolean>;
      }>>>;
    }>;
    baseHash: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly ExecApprovalsNodeGetParams: import("typebox").TObject<{
    nodeId: import("typebox").TString;
  }>;
  readonly ExecApprovalsNodeSnapshot: import("typebox").TObject<{
    path: import("typebox").TOptional<import("typebox").TString>;
    exists: import("typebox").TOptional<import("typebox").TBoolean>;
    hash: import("typebox").TOptional<import("typebox").TString>;
    file: import("typebox").TOptional<import("typebox").TObject<{
      version: import("typebox").TLiteral<1>;
      socket: import("typebox").TOptional<import("typebox").TObject<{
        path: import("typebox").TOptional<import("typebox").TString>;
        token: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      defaults: import("typebox").TOptional<import("typebox").TObject<{
        security: import("typebox").TOptional<import("typebox").TString>;
        ask: import("typebox").TOptional<import("typebox").TString>;
        askFallback: import("typebox").TOptional<import("typebox").TString>;
        autoAllowSkills: import("typebox").TOptional<import("typebox").TBoolean>;
      }>>;
      agents: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TObject<{
        allowlist: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
          id: import("typebox").TOptional<import("typebox").TString>;
          pattern: import("typebox").TString;
          source: import("typebox").TOptional<import("typebox").TLiteral<"allow-always">>;
          commandText: import("typebox").TOptional<import("typebox").TString>;
          argPattern: import("typebox").TOptional<import("typebox").TString>;
          lastUsedAt: import("typebox").TOptional<import("typebox").TNumber>;
          lastUsedCommand: import("typebox").TOptional<import("typebox").TString>;
          lastResolvedPath: import("typebox").TOptional<import("typebox").TString>;
        }>>>;
        security: import("typebox").TOptional<import("typebox").TString>;
        ask: import("typebox").TOptional<import("typebox").TString>;
        askFallback: import("typebox").TOptional<import("typebox").TString>;
        autoAllowSkills: import("typebox").TOptional<import("typebox").TBoolean>;
      }>>>;
    }>>;
    resolvedDefaults: import("typebox").TOptional<import("typebox").TObject<{
      security: import("typebox").TUnion<[import("typebox").TLiteral<"deny">, import("typebox").TLiteral<"allowlist">, import("typebox").TLiteral<"full">]>;
      ask: import("typebox").TUnion<[import("typebox").TLiteral<"off">, import("typebox").TLiteral<"on-miss">, import("typebox").TLiteral<"always">]>;
      askFallback: import("typebox").TUnion<[import("typebox").TLiteral<"deny">, import("typebox").TLiteral<"allowlist">, import("typebox").TLiteral<"full">]>;
      autoAllowSkills: import("typebox").TBoolean;
    }>>;
    enabled: import("typebox").TOptional<import("typebox").TBoolean>;
    baseHash: import("typebox").TOptional<import("typebox").TString>;
    defaultAction: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"allow">, import("typebox").TLiteral<"deny">, import("typebox").TLiteral<"prompt">]>>;
    rules: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
      pattern: import("typebox").TString;
      action: import("typebox").TUnion<[import("typebox").TLiteral<"allow">, import("typebox").TLiteral<"deny">, import("typebox").TLiteral<"prompt">]>;
      shells: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
      description: import("typebox").TOptional<import("typebox").TString>;
      enabled: import("typebox").TOptional<import("typebox").TBoolean>;
    }>>>;
    constraints: import("typebox").TOptional<import("typebox").TObject<{
      baseHashRequired: import("typebox").TOptional<import("typebox").TBoolean>;
      defaultAllowAllowed: import("typebox").TOptional<import("typebox").TBoolean>;
      broadAllowRulesAllowed: import("typebox").TOptional<import("typebox").TBoolean>;
      dangerousAllowRulesAllowed: import("typebox").TOptional<import("typebox").TBoolean>;
    }>>;
    message: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly ExecApprovalsNodeSetParams: import("typebox").TObject<{
    nodeId: import("typebox").TString;
    file: import("typebox").TOptional<import("typebox").TObject<{
      version: import("typebox").TLiteral<1>;
      socket: import("typebox").TOptional<import("typebox").TObject<{
        path: import("typebox").TOptional<import("typebox").TString>;
        token: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      defaults: import("typebox").TOptional<import("typebox").TObject<{
        security: import("typebox").TOptional<import("typebox").TString>;
        ask: import("typebox").TOptional<import("typebox").TString>;
        askFallback: import("typebox").TOptional<import("typebox").TString>;
        autoAllowSkills: import("typebox").TOptional<import("typebox").TBoolean>;
      }>>;
      agents: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TObject<{
        allowlist: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
          id: import("typebox").TOptional<import("typebox").TString>;
          pattern: import("typebox").TString;
          source: import("typebox").TOptional<import("typebox").TLiteral<"allow-always">>;
          commandText: import("typebox").TOptional<import("typebox").TString>;
          argPattern: import("typebox").TOptional<import("typebox").TString>;
          lastUsedAt: import("typebox").TOptional<import("typebox").TNumber>;
          lastUsedCommand: import("typebox").TOptional<import("typebox").TString>;
          lastResolvedPath: import("typebox").TOptional<import("typebox").TString>;
        }>>>;
        security: import("typebox").TOptional<import("typebox").TString>;
        ask: import("typebox").TOptional<import("typebox").TString>;
        askFallback: import("typebox").TOptional<import("typebox").TString>;
        autoAllowSkills: import("typebox").TOptional<import("typebox").TBoolean>;
      }>>>;
    }>>;
    native: import("typebox").TOptional<import("typebox").TObject<{
      defaultAction: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"allow">, import("typebox").TLiteral<"deny">, import("typebox").TLiteral<"prompt">]>>;
      rules: import("typebox").TArray<import("typebox").TObject<{
        pattern: import("typebox").TString;
        action: import("typebox").TUnion<[import("typebox").TLiteral<"allow">, import("typebox").TLiteral<"deny">, import("typebox").TLiteral<"prompt">]>;
        shells: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
        description: import("typebox").TOptional<import("typebox").TString>;
        enabled: import("typebox").TOptional<import("typebox").TBoolean>;
      }>>;
    }>>;
    baseHash: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly ExecApprovalsSnapshot: import("typebox").TObject<{
    path: import("typebox").TString;
    exists: import("typebox").TBoolean;
    hash: import("typebox").TString;
    file: import("typebox").TObject<{
      version: import("typebox").TLiteral<1>;
      socket: import("typebox").TOptional<import("typebox").TObject<{
        path: import("typebox").TOptional<import("typebox").TString>;
        token: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      defaults: import("typebox").TOptional<import("typebox").TObject<{
        security: import("typebox").TOptional<import("typebox").TString>;
        ask: import("typebox").TOptional<import("typebox").TString>;
        askFallback: import("typebox").TOptional<import("typebox").TString>;
        autoAllowSkills: import("typebox").TOptional<import("typebox").TBoolean>;
      }>>;
      agents: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TObject<{
        allowlist: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
          id: import("typebox").TOptional<import("typebox").TString>;
          pattern: import("typebox").TString;
          source: import("typebox").TOptional<import("typebox").TLiteral<"allow-always">>;
          commandText: import("typebox").TOptional<import("typebox").TString>;
          argPattern: import("typebox").TOptional<import("typebox").TString>;
          lastUsedAt: import("typebox").TOptional<import("typebox").TNumber>;
          lastUsedCommand: import("typebox").TOptional<import("typebox").TString>;
          lastResolvedPath: import("typebox").TOptional<import("typebox").TString>;
        }>>>;
        security: import("typebox").TOptional<import("typebox").TString>;
        ask: import("typebox").TOptional<import("typebox").TString>;
        askFallback: import("typebox").TOptional<import("typebox").TString>;
        autoAllowSkills: import("typebox").TOptional<import("typebox").TBoolean>;
      }>>>;
    }>;
  }>;
  readonly ExecApprovalGetParams: import("typebox").TObject<{
    id: import("typebox").TString;
  }>;
  readonly ExecApprovalRequestParams: import("typebox").TObject<{
    id: import("typebox").TOptional<import("typebox").TString>;
    command: import("typebox").TOptional<import("typebox").TString>;
    commandArgv: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    systemRunPlan: import("typebox").TOptional<import("typebox").TObject<{
      argv: import("typebox").TArray<import("typebox").TString>;
      cwd: import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>;
      commandText: import("typebox").TString;
      commandPreview: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
      agentId: import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>;
      sessionKey: import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>;
      policySnapshot: import("typebox").TOptional<import("typebox").TObject<{
        security: import("typebox").TUnion<[import("typebox").TLiteral<"deny">, import("typebox").TLiteral<"allowlist">, import("typebox").TLiteral<"full">]>;
        ask: import("typebox").TUnion<[import("typebox").TLiteral<"off">, import("typebox").TLiteral<"on-miss">, import("typebox").TLiteral<"always">]>;
        askFallback: import("typebox").TUnion<[import("typebox").TLiteral<"deny">, import("typebox").TLiteral<"allowlist">, import("typebox").TLiteral<"full">]>;
        autoAllowSkills: import("typebox").TBoolean;
        allowlistRules: import("typebox").TArray<import("typebox").TObject<{
          pattern: import("typebox").TString;
          argPattern: import("typebox").TOptional<import("typebox").TString>;
          source: import("typebox").TOptional<import("typebox").TLiteral<"allow-always">>;
        }>>;
      }>>;
      mutableFileOperand: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TObject<{
        argvIndex: import("typebox").TInteger;
        path: import("typebox").TString;
        sha256: import("typebox").TString;
      }>, import("typebox").TNull]>>;
    }>>;
    env: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TString>>;
    cwd: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    nodeId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    host: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    security: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    ask: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    warningText: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    unavailableDecisions: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    commandSpans: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
      startIndex: import("typebox").TInteger;
      endIndex: import("typebox").TInteger;
    }>>>;
    agentId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    resolvedPath: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    sessionKey: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    sessionId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    runId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    toolCallId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    turnSourceChannel: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    turnSourceTo: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    turnSourceAccountId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    turnSourceThreadId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNumber, import("typebox").TNull]>>;
    approvalReviewerDeviceIds: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    requireDeliveryRoute: import("typebox").TOptional<import("typebox").TBoolean>;
    suppressDelivery: import("typebox").TOptional<import("typebox").TBoolean>;
    timeoutMs: import("typebox").TOptional<import("typebox").TInteger>;
    twoPhase: import("typebox").TOptional<import("typebox").TBoolean>;
  }>;
  readonly ExecApprovalResolveParams: import("typebox").TObject<{
    id: import("typebox").TString;
    decision: import("typebox").TString;
  }>;
  readonly QuestionOption: import("typebox").TObject<{
    label: import("typebox").TString;
    description: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly Question: import("typebox").TObject<{
    questionId: import("typebox").TString;
    header: import("typebox").TString;
    question: import("typebox").TString;
    options: import("typebox").TArray<import("typebox").TObject<{
      label: import("typebox").TString;
      description: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    multiSelect: import("typebox").TOptional<import("typebox").TBoolean>;
    isOther: import("typebox").TOptional<import("typebox").TBoolean>;
    isSecret: import("typebox").TOptional<import("typebox").TBoolean>;
  }>;
  readonly QuestionRequestQuestion: import("typebox").TObject<{
    questionId: import("typebox").TString;
    header: import("typebox").TString;
    question: import("typebox").TString;
    options: import("typebox").TArray<import("typebox").TObject<{
      label: import("typebox").TString;
      description: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    multiSelect: import("typebox").TOptional<import("typebox").TBoolean>;
    isOther: import("typebox").TOptional<import("typebox").TBoolean>;
    isSecret: import("typebox").TOptional<import("typebox").TBoolean>;
  }>;
  readonly QuestionAnswers: import("typebox").TObject<{
    answers: import("typebox").TRecord<"^.*$", import("typebox").TArray<import("typebox").TString>>;
  }>;
  readonly QuestionStatus: import("typebox").TUnion<[import("typebox").TLiteral<"pending">, import("typebox").TLiteral<"answered">, import("typebox").TLiteral<"cancelled">, import("typebox").TLiteral<"expired">]>;
  readonly QuestionRecord: import("typebox").TObject<{
    id: import("typebox").TString;
    questions: import("typebox").TArray<import("typebox").TObject<{
      questionId: import("typebox").TString;
      header: import("typebox").TString;
      question: import("typebox").TString;
      options: import("typebox").TArray<import("typebox").TObject<{
        label: import("typebox").TString;
        description: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      multiSelect: import("typebox").TOptional<import("typebox").TBoolean>;
      isOther: import("typebox").TOptional<import("typebox").TBoolean>;
      isSecret: import("typebox").TOptional<import("typebox").TBoolean>;
    }>>;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    sessionKey: import("typebox").TOptional<import("typebox").TString>;
    runId: import("typebox").TOptional<import("typebox").TString>;
    createdAtMs: import("typebox").TInteger;
    expiresAtMs: import("typebox").TInteger;
    status: import("typebox").TUnion<[import("typebox").TLiteral<"pending">, import("typebox").TLiteral<"answered">, import("typebox").TLiteral<"cancelled">, import("typebox").TLiteral<"expired">]>;
    answers: import("typebox").TOptional<import("typebox").TObject<{
      answers: import("typebox").TRecord<"^.*$", import("typebox").TArray<import("typebox").TString>>;
    }>>;
    resolvedBy: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly QuestionRequestParams: import("typebox").TObject<{
    id: import("typebox").TOptional<import("typebox").TString>;
    questions: import("typebox").TArray<import("typebox").TObject<{
      questionId: import("typebox").TString;
      header: import("typebox").TString;
      question: import("typebox").TString;
      options: import("typebox").TArray<import("typebox").TObject<{
        label: import("typebox").TString;
        description: import("typebox").TOptional<import("typebox").TString>;
      }>>;
      multiSelect: import("typebox").TOptional<import("typebox").TBoolean>;
      isOther: import("typebox").TOptional<import("typebox").TBoolean>;
      isSecret: import("typebox").TOptional<import("typebox").TBoolean>;
    }>>;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    sessionKey: import("typebox").TOptional<import("typebox").TString>;
    runId: import("typebox").TOptional<import("typebox").TString>;
    timeoutMs: import("typebox").TOptional<import("typebox").TInteger>;
  }>;
  readonly QuestionRequestResult: import("typebox").TObject<{
    id: import("typebox").TString;
    expiresAtMs: import("typebox").TInteger;
  }>;
  readonly QuestionWaitAnswerParams: import("typebox").TObject<{
    id: import("typebox").TString;
    timeoutMs: import("typebox").TOptional<import("typebox").TInteger>;
  }>;
  readonly QuestionWaitAnswerResult: import("typebox").TUnion<[import("typebox").TObject<{
    status: import("typebox").TLiteral<"pending">;
  }>, import("typebox").TObject<{
    status: import("typebox").TLiteral<"answered">;
    answers: import("typebox").TObject<{
      answers: import("typebox").TRecord<"^.*$", import("typebox").TArray<import("typebox").TString>>;
    }>;
  }>, import("typebox").TObject<{
    status: import("typebox").TLiteral<"cancelled">;
  }>, import("typebox").TObject<{
    status: import("typebox").TLiteral<"expired">;
  }>]>;
  readonly QuestionResolveParams: import("typebox").TUnion<[import("typebox").TObject<{
    id: import("typebox").TString;
    answers: import("typebox").TObject<{
      answers: import("typebox").TRecord<"^.*$", import("typebox").TArray<import("typebox").TString>>;
    }>;
    resolvedBy: import("typebox").TOptional<import("typebox").TString>;
  }>, import("typebox").TObject<{
    id: import("typebox").TString;
    cancel: import("typebox").TLiteral<true>;
    resolvedBy: import("typebox").TOptional<import("typebox").TString>;
  }>]>;
  readonly QuestionResolveResult: import("typebox").TUnion<[import("typebox").TObject<{
    status: import("typebox").TLiteral<"answered">;
    answers: import("typebox").TObject<{
      answers: import("typebox").TRecord<"^.*$", import("typebox").TArray<import("typebox").TString>>;
    }>;
  }>, import("typebox").TObject<{
    status: import("typebox").TLiteral<"cancelled">;
  }>]>;
  readonly QuestionGetParams: import("typebox").TObject<{
    id: import("typebox").TString;
  }>;
  readonly QuestionGetResult: import("typebox").TObject<{
    question: import("typebox").TObject<{
      id: import("typebox").TString;
      questions: import("typebox").TArray<import("typebox").TObject<{
        questionId: import("typebox").TString;
        header: import("typebox").TString;
        question: import("typebox").TString;
        options: import("typebox").TArray<import("typebox").TObject<{
          label: import("typebox").TString;
          description: import("typebox").TOptional<import("typebox").TString>;
        }>>;
        multiSelect: import("typebox").TOptional<import("typebox").TBoolean>;
        isOther: import("typebox").TOptional<import("typebox").TBoolean>;
        isSecret: import("typebox").TOptional<import("typebox").TBoolean>;
      }>>;
      agentId: import("typebox").TOptional<import("typebox").TString>;
      sessionKey: import("typebox").TOptional<import("typebox").TString>;
      runId: import("typebox").TOptional<import("typebox").TString>;
      createdAtMs: import("typebox").TInteger;
      expiresAtMs: import("typebox").TInteger;
      status: import("typebox").TUnion<[import("typebox").TLiteral<"pending">, import("typebox").TLiteral<"answered">, import("typebox").TLiteral<"cancelled">, import("typebox").TLiteral<"expired">]>;
      answers: import("typebox").TOptional<import("typebox").TObject<{
        answers: import("typebox").TRecord<"^.*$", import("typebox").TArray<import("typebox").TString>>;
      }>>;
      resolvedBy: import("typebox").TOptional<import("typebox").TString>;
    }>;
  }>;
  readonly QuestionListParams: import("typebox").TObject<{}>;
  readonly QuestionListResult: import("typebox").TObject<{
    questions: import("typebox").TArray<import("typebox").TObject<{
      id: import("typebox").TString;
      questions: import("typebox").TArray<import("typebox").TObject<{
        questionId: import("typebox").TString;
        header: import("typebox").TString;
        question: import("typebox").TString;
        options: import("typebox").TArray<import("typebox").TObject<{
          label: import("typebox").TString;
          description: import("typebox").TOptional<import("typebox").TString>;
        }>>;
        multiSelect: import("typebox").TOptional<import("typebox").TBoolean>;
        isOther: import("typebox").TOptional<import("typebox").TBoolean>;
        isSecret: import("typebox").TOptional<import("typebox").TBoolean>;
      }>>;
      agentId: import("typebox").TOptional<import("typebox").TString>;
      sessionKey: import("typebox").TOptional<import("typebox").TString>;
      runId: import("typebox").TOptional<import("typebox").TString>;
      createdAtMs: import("typebox").TInteger;
      expiresAtMs: import("typebox").TInteger;
      status: import("typebox").TUnion<[import("typebox").TLiteral<"pending">, import("typebox").TLiteral<"answered">, import("typebox").TLiteral<"cancelled">, import("typebox").TLiteral<"expired">]>;
      answers: import("typebox").TOptional<import("typebox").TObject<{
        answers: import("typebox").TRecord<"^.*$", import("typebox").TArray<import("typebox").TString>>;
      }>>;
      resolvedBy: import("typebox").TOptional<import("typebox").TString>;
    }>>;
  }>;
  readonly QuestionResolvedEvent: import("typebox").TUnion<[import("typebox").TObject<{
    id: import("typebox").TString;
    status: import("typebox").TLiteral<"answered">;
    answers: import("typebox").TObject<{
      answers: import("typebox").TRecord<"^.*$", import("typebox").TArray<import("typebox").TString>>;
    }>;
  }>, import("typebox").TObject<{
    id: import("typebox").TString;
    status: import("typebox").TLiteral<"cancelled">;
  }>, import("typebox").TObject<{
    id: import("typebox").TString;
    status: import("typebox").TLiteral<"expired">;
  }>]>;
} & {
  readonly PluginApprovalRequestParams: import("typebox").TObject<{
    pluginId: import("typebox").TOptional<import("typebox").TString>;
    title: import("typebox").TString;
    description: import("typebox").TString;
    detail: import("typebox").TOptional<import("typebox").TString>;
    severity: import("typebox").TOptional<import("typebox").TString>;
    toolName: import("typebox").TOptional<import("typebox").TString>;
    toolCallId: import("typebox").TOptional<import("typebox").TString>;
    allowedDecisions: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    sessionKey: import("typebox").TOptional<import("typebox").TString>;
    approvalReviewerDeviceIds: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    turnSourceChannel: import("typebox").TOptional<import("typebox").TString>;
    turnSourceTo: import("typebox").TOptional<import("typebox").TString>;
    turnSourceAccountId: import("typebox").TOptional<import("typebox").TString>;
    turnSourceThreadId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNumber]>>;
    timeoutMs: import("typebox").TOptional<import("typebox").TInteger>;
    twoPhase: import("typebox").TOptional<import("typebox").TBoolean>;
  }>;
  readonly PluginApprovalResolveParams: import("typebox").TObject<{
    id: import("typebox").TString;
    decision: import("typebox").TString;
  }>;
  readonly PluginCatalogClawHubInstall: import("typebox").TObject<{
    source: import("typebox").TLiteral<"clawhub">;
    packageName: import("typebox").TString;
  }>;
  readonly PluginCatalogEntry: import("typebox").TObject<{
    id: import("typebox").TString;
    name: import("typebox").TString;
    packageName: import("typebox").TOptional<import("typebox").TString>;
    description: import("typebox").TOptional<import("typebox").TString>;
    version: import("typebox").TOptional<import("typebox").TString>;
    kind: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    origin: import("typebox").TOptional<import("typebox").TString>;
    installed: import("typebox").TBoolean;
    enabled: import("typebox").TBoolean;
    state: import("typebox").TUnion<[import("typebox").TLiteral<"enabled">, import("typebox").TLiteral<"disabled">, import("typebox").TLiteral<"not-installed">, import("typebox").TLiteral<"error">]>;
    featured: import("typebox").TOptional<import("typebox").TBoolean>;
    featuredAt: import("typebox").TOptional<import("typebox").TInteger>;
    order: import("typebox").TOptional<import("typebox").TNumber>;
    hasIcon: import("typebox").TOptional<import("typebox").TBoolean>;
    install: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TObject<{
      source: import("typebox").TLiteral<"clawhub">;
      packageName: import("typebox").TString;
    }>, import("typebox").TObject<{
      source: import("typebox").TLiteral<"official">;
      pluginId: import("typebox").TString;
    }>]>>;
    error: import("typebox").TOptional<import("typebox").TString>;
    category: import("typebox").TOptional<import("typebox").TString>;
    removable: import("typebox").TOptional<import("typebox").TBoolean>;
  }>;
  readonly PluginCatalogInstallAction: import("typebox").TUnion<[import("typebox").TObject<{
    source: import("typebox").TLiteral<"clawhub">;
    packageName: import("typebox").TString;
  }>, import("typebox").TObject<{
    source: import("typebox").TLiteral<"official">;
    pluginId: import("typebox").TString;
  }>]>;
  readonly PluginCatalogOfficialInstall: import("typebox").TObject<{
    source: import("typebox").TLiteral<"official">;
    pluginId: import("typebox").TString;
  }>;
  readonly PluginControlUiDescriptor: import("typebox").TObject<{
    id: import("typebox").TString;
    pluginId: import("typebox").TString;
    pluginName: import("typebox").TOptional<import("typebox").TString>;
    surface: import("typebox").TUnion<[import("typebox").TLiteral<"session">, import("typebox").TLiteral<"tool">, import("typebox").TLiteral<"run">, import("typebox").TLiteral<"settings">, import("typebox").TLiteral<"tab">, import("typebox").TLiteral<"widget">]>;
    label: import("typebox").TString;
    description: import("typebox").TOptional<import("typebox").TString>;
    placement: import("typebox").TOptional<import("typebox").TString>;
    schema: import("typebox").TOptional<import("typebox").TUnknown>;
    requiredScopes: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
  }>;
  readonly PluginSearchPackage: import("typebox").TObject<{
    name: import("typebox").TString;
    displayName: import("typebox").TString;
    family: import("typebox").TUnion<[import("typebox").TLiteral<"code-plugin">, import("typebox").TLiteral<"bundle-plugin">]>;
    channel: import("typebox").TUnion<[import("typebox").TLiteral<"official">, import("typebox").TLiteral<"community">, import("typebox").TLiteral<"private">]>;
    isOfficial: import("typebox").TBoolean;
    summary: import("typebox").TOptional<import("typebox").TString>;
    latestVersion: import("typebox").TOptional<import("typebox").TString>;
    runtimeId: import("typebox").TOptional<import("typebox").TString>;
    downloads: import("typebox").TOptional<import("typebox").TNumber>;
    verificationTier: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly PluginSearchResultEntry: import("typebox").TObject<{
    score: import("typebox").TNumber;
    package: import("typebox").TObject<{
      name: import("typebox").TString;
      displayName: import("typebox").TString;
      family: import("typebox").TUnion<[import("typebox").TLiteral<"code-plugin">, import("typebox").TLiteral<"bundle-plugin">]>;
      channel: import("typebox").TUnion<[import("typebox").TLiteral<"official">, import("typebox").TLiteral<"community">, import("typebox").TLiteral<"private">]>;
      isOfficial: import("typebox").TBoolean;
      summary: import("typebox").TOptional<import("typebox").TString>;
      latestVersion: import("typebox").TOptional<import("typebox").TString>;
      runtimeId: import("typebox").TOptional<import("typebox").TString>;
      downloads: import("typebox").TOptional<import("typebox").TNumber>;
      verificationTier: import("typebox").TOptional<import("typebox").TString>;
    }>;
  }>;
  readonly PluginsInstallParams: import("typebox").TUnion<[import("typebox").TObject<{
    source: import("typebox").TLiteral<"clawhub">;
    packageName: import("typebox").TString;
    version: import("typebox").TOptional<import("typebox").TString>;
    acknowledgeClawHubRisk: import("typebox").TOptional<import("typebox").TBoolean>;
  }>, import("typebox").TObject<{
    source: import("typebox").TLiteral<"official">;
    pluginId: import("typebox").TString;
  }>]>;
  readonly PluginsInstallResult: import("typebox").TObject<{
    ok: import("typebox").TLiteral<true>;
    plugin: import("typebox").TObject<{
      id: import("typebox").TString;
      name: import("typebox").TString;
      packageName: import("typebox").TOptional<import("typebox").TString>;
      description: import("typebox").TOptional<import("typebox").TString>;
      version: import("typebox").TOptional<import("typebox").TString>;
      kind: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
      origin: import("typebox").TOptional<import("typebox").TString>;
      installed: import("typebox").TBoolean;
      enabled: import("typebox").TBoolean;
      state: import("typebox").TUnion<[import("typebox").TLiteral<"enabled">, import("typebox").TLiteral<"disabled">, import("typebox").TLiteral<"not-installed">, import("typebox").TLiteral<"error">]>;
      featured: import("typebox").TOptional<import("typebox").TBoolean>;
      featuredAt: import("typebox").TOptional<import("typebox").TInteger>;
      order: import("typebox").TOptional<import("typebox").TNumber>;
      hasIcon: import("typebox").TOptional<import("typebox").TBoolean>;
      install: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TObject<{
        source: import("typebox").TLiteral<"clawhub">;
        packageName: import("typebox").TString;
      }>, import("typebox").TObject<{
        source: import("typebox").TLiteral<"official">;
        pluginId: import("typebox").TString;
      }>]>>;
      error: import("typebox").TOptional<import("typebox").TString>;
      category: import("typebox").TOptional<import("typebox").TString>;
      removable: import("typebox").TOptional<import("typebox").TBoolean>;
    }>;
    restartRequired: import("typebox").TLiteral<true>;
    warnings: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
  }>;
  readonly PluginsListParams: import("typebox").TObject<{}>;
  readonly PluginsListResult: import("typebox").TObject<{
    plugins: import("typebox").TArray<import("typebox").TObject<{
      id: import("typebox").TString;
      name: import("typebox").TString;
      packageName: import("typebox").TOptional<import("typebox").TString>;
      description: import("typebox").TOptional<import("typebox").TString>;
      version: import("typebox").TOptional<import("typebox").TString>;
      kind: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
      origin: import("typebox").TOptional<import("typebox").TString>;
      installed: import("typebox").TBoolean;
      enabled: import("typebox").TBoolean;
      state: import("typebox").TUnion<[import("typebox").TLiteral<"enabled">, import("typebox").TLiteral<"disabled">, import("typebox").TLiteral<"not-installed">, import("typebox").TLiteral<"error">]>;
      featured: import("typebox").TOptional<import("typebox").TBoolean>;
      featuredAt: import("typebox").TOptional<import("typebox").TInteger>;
      order: import("typebox").TOptional<import("typebox").TNumber>;
      hasIcon: import("typebox").TOptional<import("typebox").TBoolean>;
      install: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TObject<{
        source: import("typebox").TLiteral<"clawhub">;
        packageName: import("typebox").TString;
      }>, import("typebox").TObject<{
        source: import("typebox").TLiteral<"official">;
        pluginId: import("typebox").TString;
      }>]>>;
      error: import("typebox").TOptional<import("typebox").TString>;
      category: import("typebox").TOptional<import("typebox").TString>;
      removable: import("typebox").TOptional<import("typebox").TBoolean>;
    }>>;
    diagnostics: import("typebox").TArray<import("typebox").TUnknown>;
    mutationAllowed: import("typebox").TBoolean;
  }>;
  readonly PluginsRefreshParams: import("typebox").TObject<{}>;
  readonly PluginsRefreshResult: import("typebox").TObject<{
    ok: import("typebox").TLiteral<true>;
  }>;
  readonly PluginsSearchParams: import("typebox").TObject<{
    query: import("typebox").TString;
    limit: import("typebox").TOptional<import("typebox").TInteger>;
  }>;
  readonly PluginsSearchResult: import("typebox").TObject<{
    results: import("typebox").TArray<import("typebox").TObject<{
      score: import("typebox").TNumber;
      package: import("typebox").TObject<{
        name: import("typebox").TString;
        displayName: import("typebox").TString;
        family: import("typebox").TUnion<[import("typebox").TLiteral<"code-plugin">, import("typebox").TLiteral<"bundle-plugin">]>;
        channel: import("typebox").TUnion<[import("typebox").TLiteral<"official">, import("typebox").TLiteral<"community">, import("typebox").TLiteral<"private">]>;
        isOfficial: import("typebox").TBoolean;
        summary: import("typebox").TOptional<import("typebox").TString>;
        latestVersion: import("typebox").TOptional<import("typebox").TString>;
        runtimeId: import("typebox").TOptional<import("typebox").TString>;
        downloads: import("typebox").TOptional<import("typebox").TNumber>;
        verificationTier: import("typebox").TOptional<import("typebox").TString>;
      }>;
    }>>;
  }>;
  readonly PluginsSessionActionFailureResult: import("typebox").TObject<{
    ok: import("typebox").TLiteral<false>;
    error: import("typebox").TString;
    code: import("typebox").TOptional<import("typebox").TString>;
    details: import("typebox").TOptional<import("typebox").TUnknown>;
  }>;
  readonly PluginsSessionActionParams: import("typebox").TObject<{
    pluginId: import("typebox").TString;
    actionId: import("typebox").TString;
    sessionKey: import("typebox").TOptional<import("typebox").TString>;
    payload: import("typebox").TOptional<import("typebox").TUnknown>;
  }>;
  readonly PluginsSessionActionResult: import("typebox").TUnion<[import("typebox").TObject<{
    ok: import("typebox").TLiteral<true>;
    result: import("typebox").TOptional<import("typebox").TUnknown>;
    continueAgent: import("typebox").TOptional<import("typebox").TBoolean>;
    reply: import("typebox").TOptional<import("typebox").TUnknown>;
  }>, import("typebox").TObject<{
    ok: import("typebox").TLiteral<false>;
    error: import("typebox").TString;
    code: import("typebox").TOptional<import("typebox").TString>;
    details: import("typebox").TOptional<import("typebox").TUnknown>;
  }>]>;
  readonly PluginsSessionActionSuccessResult: import("typebox").TObject<{
    ok: import("typebox").TLiteral<true>;
    result: import("typebox").TOptional<import("typebox").TUnknown>;
    continueAgent: import("typebox").TOptional<import("typebox").TBoolean>;
    reply: import("typebox").TOptional<import("typebox").TUnknown>;
  }>;
  readonly PluginsSetEnabledParams: import("typebox").TObject<{
    pluginId: import("typebox").TString;
    enabled: import("typebox").TBoolean;
  }>;
  readonly PluginsSetEnabledResult: import("typebox").TObject<{
    ok: import("typebox").TLiteral<true>;
    plugin: import("typebox").TObject<{
      id: import("typebox").TString;
      name: import("typebox").TString;
      packageName: import("typebox").TOptional<import("typebox").TString>;
      description: import("typebox").TOptional<import("typebox").TString>;
      version: import("typebox").TOptional<import("typebox").TString>;
      kind: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
      origin: import("typebox").TOptional<import("typebox").TString>;
      installed: import("typebox").TBoolean;
      enabled: import("typebox").TBoolean;
      state: import("typebox").TUnion<[import("typebox").TLiteral<"enabled">, import("typebox").TLiteral<"disabled">, import("typebox").TLiteral<"not-installed">, import("typebox").TLiteral<"error">]>;
      featured: import("typebox").TOptional<import("typebox").TBoolean>;
      featuredAt: import("typebox").TOptional<import("typebox").TInteger>;
      order: import("typebox").TOptional<import("typebox").TNumber>;
      hasIcon: import("typebox").TOptional<import("typebox").TBoolean>;
      install: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TObject<{
        source: import("typebox").TLiteral<"clawhub">;
        packageName: import("typebox").TString;
      }>, import("typebox").TObject<{
        source: import("typebox").TLiteral<"official">;
        pluginId: import("typebox").TString;
      }>]>>;
      error: import("typebox").TOptional<import("typebox").TString>;
      category: import("typebox").TOptional<import("typebox").TString>;
      removable: import("typebox").TOptional<import("typebox").TBoolean>;
    }>;
    restartRequired: import("typebox").TBoolean;
    warnings: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
  }>;
  readonly PluginsUiDescriptorsParams: import("typebox").TObject<{}>;
  readonly PluginsUiDescriptorsResult: import("typebox").TObject<{
    ok: import("typebox").TLiteral<true>;
    descriptors: import("typebox").TArray<import("typebox").TObject<{
      id: import("typebox").TString;
      pluginId: import("typebox").TString;
      pluginName: import("typebox").TOptional<import("typebox").TString>;
      surface: import("typebox").TUnion<[import("typebox").TLiteral<"session">, import("typebox").TLiteral<"tool">, import("typebox").TLiteral<"run">, import("typebox").TLiteral<"settings">, import("typebox").TLiteral<"tab">, import("typebox").TLiteral<"widget">]>;
      label: import("typebox").TString;
      description: import("typebox").TOptional<import("typebox").TString>;
      placement: import("typebox").TOptional<import("typebox").TString>;
      schema: import("typebox").TOptional<import("typebox").TUnknown>;
      requiredScopes: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    }>>;
  }>;
  readonly PluginsUninstallParams: import("typebox").TObject<{
    pluginId: import("typebox").TString;
  }>;
  readonly PluginsUninstallResult: import("typebox").TObject<{
    ok: import("typebox").TLiteral<true>;
    pluginId: import("typebox").TString;
    restartRequired: import("typebox").TLiteral<true>;
    removed: import("typebox").TArray<import("typebox").TString>;
    warnings: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
  }>;
  readonly DevicePairListParams: import("typebox").TObject<{}>;
  readonly DevicePairApproveParams: import("typebox").TObject<{
    requestId: import("typebox").TString;
  }>;
  readonly DevicePairRejectParams: import("typebox").TObject<{
    requestId: import("typebox").TString;
  }>;
  readonly DevicePairRemoveParams: import("typebox").TObject<{
    deviceId: import("typebox").TString;
  }>;
  readonly DevicePairSetupCodeParams: import("typebox").TObject<{
    publicUrl: import("typebox").TOptional<import("typebox").TString>;
    preferRemoteUrl: import("typebox").TOptional<import("typebox").TBoolean>;
    includeQr: import("typebox").TOptional<import("typebox").TBoolean>;
    bootstrapProfile: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly DevicePairSetupCodeResult: import("typebox").TObject<{
    setupCode: import("typebox").TString;
    qrDataUrl: import("typebox").TOptional<import("typebox").TString>;
    gatewayUrl: import("typebox").TString;
    gatewayUrls: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    auth: import("typebox").TUnion<[import("typebox").TLiteral<"token">, import("typebox").TLiteral<"password">]>;
    urlSource: import("typebox").TString;
    access: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"full">, import("typebox").TLiteral<"limited">, import("typebox").TLiteral<"node">]>>;
    accessDowngraded: import("typebox").TOptional<import("typebox").TBoolean>;
  }>;
  readonly DevicePairRenameParams: import("typebox").TObject<{
    deviceId: import("typebox").TString;
    label: import("typebox").TString;
  }>;
  readonly DeviceTokenRotateParams: import("typebox").TObject<{
    deviceId: import("typebox").TString;
    role: import("typebox").TString;
    scopes: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
  }>;
  readonly DeviceTokenRevokeParams: import("typebox").TObject<{
    deviceId: import("typebox").TString;
    role: import("typebox").TString;
  }>;
  readonly DevicePairRequestedEvent: import("typebox").TObject<{
    requestId: import("typebox").TString;
    deviceId: import("typebox").TString;
    publicKey: import("typebox").TString;
    displayName: import("typebox").TOptional<import("typebox").TString>;
    platform: import("typebox").TOptional<import("typebox").TString>;
    deviceFamily: import("typebox").TOptional<import("typebox").TString>;
    clientId: import("typebox").TOptional<import("typebox").TString>;
    clientMode: import("typebox").TOptional<import("typebox").TString>;
    browserOrigin: import("typebox").TOptional<import("typebox").TString>;
    role: import("typebox").TOptional<import("typebox").TString>;
    roles: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    scopes: import("typebox").TOptional<import("typebox").TArray<import("typebox").TString>>;
    remoteIp: import("typebox").TOptional<import("typebox").TString>;
    silent: import("typebox").TOptional<import("typebox").TBoolean>;
    isRepair: import("typebox").TOptional<import("typebox").TBoolean>;
    ts: import("typebox").TInteger;
  }>;
  readonly DevicePairResolvedEvent: import("typebox").TObject<{
    requestId: import("typebox").TString;
    deviceId: import("typebox").TString;
    decision: import("typebox").TString;
    ts: import("typebox").TInteger;
  }>;
  readonly ChatHistoryParams: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    limit: import("typebox").TOptional<import("typebox").TInteger>;
    offset: import("typebox").TOptional<import("typebox").TInteger>;
    messageId: import("typebox").TOptional<import("typebox").TString>;
    sessionId: import("typebox").TOptional<import("typebox").TString>;
    maxChars: import("typebox").TOptional<import("typebox").TInteger>;
  }>;
  readonly ChatMetadataParams: import("typebox").TObject<{
    agentId: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly ChatMessageGetParams: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    messageId: import("typebox").TString;
    maxChars: import("typebox").TOptional<import("typebox").TInteger>;
  }>;
  readonly ChatMessageGetResult: import("typebox").TObject<{
    ok: import("typebox").TBoolean;
    message: import("typebox").TOptional<import("typebox").TUnknown>;
    unavailableReason: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"not_found">, import("typebox").TLiteral<"oversized">, import("typebox").TLiteral<"not_visible">]>>;
  }>;
  readonly ChatToolTitlesParams: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    items: import("typebox").TArray<import("typebox").TObject<{
      id: import("typebox").TString;
      name: import("typebox").TString;
      input: import("typebox").TString;
    }>>;
  }>;
  readonly ChatToolTitlesResult: import("typebox").TObject<{
    titles: import("typebox").TRecord<"^.*$", import("typebox").TString>;
    disabled: import("typebox").TOptional<import("typebox").TBoolean>;
  }>;
  readonly ChatSendParams: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    sessionId: import("typebox").TOptional<import("typebox").TString>;
    message: import("typebox").TString;
    thinking: import("typebox").TOptional<import("typebox").TString>;
    fastMode: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TBoolean, import("typebox").TLiteral<"auto">]>>;
    fastAutoOnSeconds: import("typebox").TOptional<import("typebox").TInteger>;
    queueMode: import("typebox").TOptional<import("typebox").TString>;
    deliver: import("typebox").TOptional<import("typebox").TBoolean>;
    originatingChannel: import("typebox").TOptional<import("typebox").TString>;
    originatingTo: import("typebox").TOptional<import("typebox").TString>;
    originatingAccountId: import("typebox").TOptional<import("typebox").TString>;
    originatingThreadId: import("typebox").TOptional<import("typebox").TString>;
    replyToId: import("typebox").TOptional<import("typebox").TString>;
    attachments: import("typebox").TOptional<import("typebox").TArray<import("typebox").TObject<{
      type: import("typebox").TOptional<import("typebox").TString>;
      mimeType: import("typebox").TOptional<import("typebox").TString>;
      fileName: import("typebox").TOptional<import("typebox").TString>;
      content: import("typebox").TOptional<import("typebox").TUnknown>;
      sizeBytes: import("typebox").TOptional<import("typebox").TNumber>;
      durationMs: import("typebox").TOptional<import("typebox").TNumber>;
      width: import("typebox").TOptional<import("typebox").TNumber>;
      height: import("typebox").TOptional<import("typebox").TNumber>;
    }>>>;
    toolBindings: import("typebox").TOptional<import("typebox").TRecord<"^.*$", import("typebox").TUnknown>>;
    timeoutMs: import("typebox").TOptional<import("typebox").TInteger>;
    systemInputProvenance: import("typebox").TOptional<import("typebox").TObject<{
      kind: import("typebox").TString;
      originSessionId: import("typebox").TOptional<import("typebox").TString>;
      sourceSessionKey: import("typebox").TOptional<import("typebox").TString>;
      sourceChannel: import("typebox").TOptional<import("typebox").TString>;
      sourceTool: import("typebox").TOptional<import("typebox").TString>;
    }>>;
    systemProvenanceReceipt: import("typebox").TOptional<import("typebox").TString>;
    suppressCommandInterpretation: import("typebox").TOptional<import("typebox").TBoolean>;
    expectedLeafEntryId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNull]>>;
    expectedSessionRoutingContract: import("typebox").TOptional<import("typebox").TString>;
    idempotencyKey: import("typebox").TString;
  }>;
  readonly ChatAbortParams: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    runId: import("typebox").TOptional<import("typebox").TString>;
    preserveSideRuns: import("typebox").TOptional<import("typebox").TBoolean>;
  }>;
  readonly ChatInjectParams: import("typebox").TObject<{
    sessionKey: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    message: import("typebox").TString;
    label: import("typebox").TOptional<import("typebox").TString>;
  }>;
  readonly ChatRunStartupPhase: import("typebox").TUnion<[import("typebox").TLiteral<"preparing_workspace">, import("typebox").TLiteral<"provisioning_environment">, import("typebox").TLiteral<"preparing_context">, import("typebox").TLiteral<"starting_model">]>;
  readonly ChatStatusEvent: import("typebox").TObject<{
    state: import("typebox").TLiteral<"status">;
    phase: import("typebox").TUnion<[import("typebox").TLiteral<"preparing_workspace">, import("typebox").TLiteral<"provisioning_environment">, import("typebox").TLiteral<"preparing_context">, import("typebox").TLiteral<"starting_model">]>;
    runId: import("typebox").TString;
    sessionKey: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    spawnedBy: import("typebox").TOptional<import("typebox").TString>;
    seq: import("typebox").TInteger;
  }>;
  readonly ChatDeltaEvent: import("typebox").TObject<{
    state: import("typebox").TLiteral<"delta">;
    message: import("typebox").TOptional<import("typebox").TUnknown>;
    deltaText: import("typebox").TString;
    replace: import("typebox").TOptional<import("typebox").TBoolean>;
    usage: import("typebox").TOptional<import("typebox").TUnknown>;
    runId: import("typebox").TString;
    sessionKey: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    spawnedBy: import("typebox").TOptional<import("typebox").TString>;
    seq: import("typebox").TInteger;
  }>;
  readonly ChatFinalEvent: import("typebox").TObject<{
    state: import("typebox").TLiteral<"final">;
    message: import("typebox").TOptional<import("typebox").TUnknown>;
    usage: import("typebox").TOptional<import("typebox").TUnknown>;
    stopReason: import("typebox").TOptional<import("typebox").TString>;
    yielded: import("typebox").TOptional<import("typebox").TLiteral<true>>;
    runId: import("typebox").TString;
    sessionKey: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    spawnedBy: import("typebox").TOptional<import("typebox").TString>;
    seq: import("typebox").TInteger;
  }>;
  readonly ChatAbortedEvent: import("typebox").TObject<{
    state: import("typebox").TLiteral<"aborted">;
    message: import("typebox").TOptional<import("typebox").TUnknown>;
    errorMessage: import("typebox").TOptional<import("typebox").TString>;
    stopReason: import("typebox").TOptional<import("typebox").TString>;
    runId: import("typebox").TString;
    sessionKey: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    spawnedBy: import("typebox").TOptional<import("typebox").TString>;
    seq: import("typebox").TInteger;
  }>;
  readonly ChatErrorEvent: import("typebox").TObject<{
    state: import("typebox").TLiteral<"error">;
    message: import("typebox").TOptional<import("typebox").TUnknown>;
    errorMessage: import("typebox").TOptional<import("typebox").TString>;
    errorKind: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"refusal">, import("typebox").TLiteral<"timeout">, import("typebox").TLiteral<"rate_limit">, import("typebox").TLiteral<"context_length">, import("typebox").TLiteral<"unknown">]>>;
    usage: import("typebox").TOptional<import("typebox").TUnknown>;
    stopReason: import("typebox").TOptional<import("typebox").TString>;
    runId: import("typebox").TString;
    sessionKey: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    spawnedBy: import("typebox").TOptional<import("typebox").TString>;
    seq: import("typebox").TInteger;
  }>;
  readonly ChatEvent: import("typebox").TUnion<[import("typebox").TObject<{
    state: import("typebox").TLiteral<"status">;
    phase: import("typebox").TUnion<[import("typebox").TLiteral<"preparing_workspace">, import("typebox").TLiteral<"provisioning_environment">, import("typebox").TLiteral<"preparing_context">, import("typebox").TLiteral<"starting_model">]>;
    runId: import("typebox").TString;
    sessionKey: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    spawnedBy: import("typebox").TOptional<import("typebox").TString>;
    seq: import("typebox").TInteger;
  }>, import("typebox").TObject<{
    state: import("typebox").TLiteral<"delta">;
    message: import("typebox").TOptional<import("typebox").TUnknown>;
    deltaText: import("typebox").TString;
    replace: import("typebox").TOptional<import("typebox").TBoolean>;
    usage: import("typebox").TOptional<import("typebox").TUnknown>;
    runId: import("typebox").TString;
    sessionKey: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    spawnedBy: import("typebox").TOptional<import("typebox").TString>;
    seq: import("typebox").TInteger;
  }>, import("typebox").TObject<{
    state: import("typebox").TLiteral<"final">;
    message: import("typebox").TOptional<import("typebox").TUnknown>;
    usage: import("typebox").TOptional<import("typebox").TUnknown>;
    stopReason: import("typebox").TOptional<import("typebox").TString>;
    yielded: import("typebox").TOptional<import("typebox").TLiteral<true>>;
    runId: import("typebox").TString;
    sessionKey: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    spawnedBy: import("typebox").TOptional<import("typebox").TString>;
    seq: import("typebox").TInteger;
  }>, import("typebox").TObject<{
    state: import("typebox").TLiteral<"aborted">;
    message: import("typebox").TOptional<import("typebox").TUnknown>;
    errorMessage: import("typebox").TOptional<import("typebox").TString>;
    stopReason: import("typebox").TOptional<import("typebox").TString>;
    runId: import("typebox").TString;
    sessionKey: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    spawnedBy: import("typebox").TOptional<import("typebox").TString>;
    seq: import("typebox").TInteger;
  }>, import("typebox").TObject<{
    state: import("typebox").TLiteral<"error">;
    message: import("typebox").TOptional<import("typebox").TUnknown>;
    errorMessage: import("typebox").TOptional<import("typebox").TString>;
    errorKind: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TLiteral<"refusal">, import("typebox").TLiteral<"timeout">, import("typebox").TLiteral<"rate_limit">, import("typebox").TLiteral<"context_length">, import("typebox").TLiteral<"unknown">]>>;
    usage: import("typebox").TOptional<import("typebox").TUnknown>;
    stopReason: import("typebox").TOptional<import("typebox").TString>;
    runId: import("typebox").TString;
    sessionKey: import("typebox").TString;
    agentId: import("typebox").TOptional<import("typebox").TString>;
    spawnedBy: import("typebox").TOptional<import("typebox").TString>;
    seq: import("typebox").TInteger;
  }>]>;
  readonly UpdateStatusParams: import("typebox").TObject<{}>;
  readonly UpdateRunParams: import("typebox").TObject<{
    sessionKey: import("typebox").TOptional<import("typebox").TString>;
    deliveryContext: import("typebox").TOptional<import("typebox").TObject<{
      channel: import("typebox").TOptional<import("typebox").TString>;
      to: import("typebox").TOptional<import("typebox").TString>;
      accountId: import("typebox").TOptional<import("typebox").TString>;
      threadId: import("typebox").TOptional<import("typebox").TUnion<[import("typebox").TString, import("typebox").TNumber]>>;
    }>>;
    note: import("typebox").TOptional<import("typebox").TString>;
    continuationMessage: import("typebox").TOptional<import("typebox").TString>;
    restartDelayMs: import("typebox").TOptional<import("typebox").TInteger>;
    timeoutMs: import("typebox").TOptional<import("typebox").TInteger>;
  }>;
  readonly TickEvent: import("typebox").TObject<{
    ts: import("typebox").TInteger;
  }>;
  readonly ShutdownEvent: import("typebox").TObject<{
    reason: import("typebox").TString;
    restartExpectedMs: import("typebox").TOptional<import("typebox").TInteger>;
  }>;
};
//#endregion
export { AgentEvent, AgentEventSchema, AgentIdentityParams, AgentIdentityParamsSchema, AgentIdentityResult, AgentIdentityResultSchema, AgentKind, AgentKindSchema, AgentParamsSchema, AgentSummary, AgentSummarySchema, AgentWaitParams, AgentWaitParamsSchema, AgentsCreateParams, AgentsCreateParamsSchema, AgentsCreateResult, AgentsCreateResultSchema, AgentsDeleteParams, AgentsDeleteParamsSchema, AgentsDeleteResult, AgentsDeleteResultSchema, AgentsFileEntry, AgentsFileEntrySchema, AgentsFilesGetParams, AgentsFilesGetParamsSchema, AgentsFilesGetResult, AgentsFilesGetResultSchema, AgentsFilesListParams, AgentsFilesListParamsSchema, AgentsFilesListResult, AgentsFilesListResultSchema, AgentsFilesSetParams, AgentsFilesSetParamsSchema, AgentsFilesSetResult, AgentsFilesSetResultSchema, AgentsListParams, AgentsListParamsSchema, AgentsListResult, AgentsListResultSchema, AgentsUpdateParams, AgentsUpdateParamsSchema, AgentsUpdateResult, AgentsUpdateResultSchema, AgentsWorkspaceEntry, AgentsWorkspaceEntrySchema, AgentsWorkspaceFile, AgentsWorkspaceFileSchema, AgentsWorkspaceGetParams, AgentsWorkspaceGetParamsSchema, AgentsWorkspaceGetResult, AgentsWorkspaceGetResultSchema, AgentsWorkspaceListParams, AgentsWorkspaceListParamsSchema, AgentsWorkspaceListResult, AgentsWorkspaceListResultSchema, AllowedApprovalSnapshot, AllowedApprovalSnapshotSchema, ApprovalAllowDecision, ApprovalAllowDecisionSchema, ApprovalAllowedReasonSchema, ApprovalCancelledReasonSchema, ApprovalDecision, ApprovalDecisionSchema, ApprovalDeniedReasonSchema, ApprovalExpiredReasonSchema, ApprovalGetParams, ApprovalGetParamsSchema, ApprovalGetResult, ApprovalGetResultSchema, ApprovalHistoryParams, ApprovalHistoryParamsSchema, ApprovalHistoryResult, ApprovalHistoryResultSchema, ApprovalKind, ApprovalKindSchema, ApprovalPresentation, ApprovalPresentationSchema, ApprovalResolveParams, ApprovalResolveParamsSchema, ApprovalResolveResult, ApprovalResolveResultSchema, ApprovalSnapshot, ApprovalSnapshotSchema, ApprovalTerminalReason, ApprovalTerminalReasonSchema, ArtifactSummary, ArtifactSummarySchema, ArtifactsDownloadParams, ArtifactsDownloadParamsSchema, ArtifactsDownloadResult, ArtifactsDownloadResultSchema, ArtifactsGetParams, ArtifactsGetParamsSchema, ArtifactsGetResult, ArtifactsGetResultSchema, ArtifactsListParams, ArtifactsListParamsSchema, ArtifactsListResult, ArtifactsListResultSchema, AuditActivityAgentRunV1, AuditActivityAgentRunV1Schema, AuditActivityEventV1, AuditActivityEventV1Schema, AuditActivityInboundMessageV1, AuditActivityInboundMessageV1Schema, AuditActivityListParams, AuditActivityListParamsSchema, AuditActivityListResult, AuditActivityListResultSchema, AuditActivityOutboundMessageV1, AuditActivityOutboundMessageV1Schema, AuditActivityToolActionV1, AuditActivityToolActionV1Schema, AuditEvent, AuditEventSchema, AuditListParams, AuditListParamsSchema, AuditListResult, AuditListResultSchema, AuthProbeStatus, AuthProbeStatusSchema, BOARD_CRON_JOB_ID_MAX_LENGTH, BOARD_CRON_TRIGGER_PREFIX, BOARD_DATA_BINDING_ID_MAX_LENGTH, BOARD_WIDGET_TOOL_MAX_LENGTH, BoardActionParams, BoardActionParamsSchema, BoardCanvasDocumentSource, BoardCanvasDocumentSourceSchema, BoardChangedEvent, BoardChangedEventSchema, BoardChatDockSchema, BoardCommand, BoardCommandEvent, BoardCommandEventSchema, BoardCommandSchema, BoardCronActionParamsSchema, BoardDataReadParams, BoardDataReadParamsSchema, BoardEventParams, BoardEventParamsSchema, BoardFocusTabCommandSchema, BoardGetParams, BoardGetParamsSchema, BoardLegacyEventParamsSchema, BoardMcpAppDescriptor, BoardMcpAppDescriptorSchema, BoardOp, BoardOpSchema, BoardPluginActionParamsSchema, BoardPromptAuthorizeParams, BoardPromptAuthorizeParamsSchema, BoardSetChatDockCommandSchema, BoardSizeSchema, BoardSnapshot, BoardSnapshotSchema, BoardTab, BoardTabCreateOpSchema, BoardTabDeleteOpSchema, BoardTabIdSchema, BoardTabSchema, BoardTabUpdateOpSchema, BoardTabsReorderOpSchema, BoardTicketEventParamsSchema, BoardUpdateParams, BoardUpdateParamsSchema, BoardViewTicketSchema, BoardWidget, BoardWidgetAppViewParams, BoardWidgetAppViewParamsSchema, BoardWidgetAppViewResult, BoardWidgetAppViewResultSchema, BoardWidgetContent, BoardWidgetContentSchema, BoardWidgetDeclared, BoardWidgetDeclaredSchema, BoardWidgetGrantParams, BoardWidgetGrantParamsSchema, BoardWidgetHeightModeSchema, BoardWidgetHtmlContentSchema, BoardWidgetMaterializedContent, BoardWidgetMaterializedPutParams, BoardWidgetMcpAppContentSchema, BoardWidgetMcpAppPutContentSchema, BoardWidgetMoveOpSchema, BoardWidgetNameSchema, BoardWidgetPluginContentSchema, BoardWidgetPluginKindSchema, BoardWidgetPluginPropsSchema, BoardWidgetPresentationSchema, BoardWidgetPutContent, BoardWidgetPutContentSchema, BoardWidgetPutParams, BoardWidgetPutParamsSchema, BoardWidgetRemoveOpSchema, BoardWidgetResizeOpSchema, BoardWidgetSchema, CHAT_SEND_SESSION_KEY_MAX_LENGTH, COMMAND_ALIAS_MAX_ITEMS, COMMAND_ARGS_MAX_ITEMS, COMMAND_ARG_CHOICES_MAX_ITEMS, COMMAND_ARG_DESCRIPTION_MAX_LENGTH, COMMAND_ARG_NAME_MAX_LENGTH, COMMAND_CHOICE_LABEL_MAX_LENGTH, COMMAND_CHOICE_VALUE_MAX_LENGTH, COMMAND_DESCRIPTION_MAX_LENGTH, COMMAND_LIST_MAX_ITEMS, COMMAND_NAME_MAX_LENGTH, CancelledApprovalSnapshot, CancelledApprovalSnapshotSchema, ChannelsLogoutParams, ChannelsLogoutParamsSchema, ChannelsPairingAccount, ChannelsPairingApproveParams, ChannelsPairingApproveParamsSchema, ChannelsPairingApproveResult, ChannelsPairingApproveResultSchema, ChannelsPairingDismissParams, ChannelsPairingDismissParamsSchema, ChannelsPairingDismissResult, ChannelsPairingDismissResultSchema, ChannelsPairingListParams, ChannelsPairingListParamsSchema, ChannelsPairingListResult, ChannelsPairingListResultSchema, ChannelsPairingRequest, ChannelsStartParams, ChannelsStartParamsSchema, ChannelsStatusParams, ChannelsStatusParamsSchema, ChannelsStatusResult, ChannelsStatusResultSchema, ChannelsStopParams, ChannelsStopParamsSchema, ChatAbortParams, ChatAbortParamsSchema, ChatAbortedEventSchema, ChatAttachmentSchema, ChatAttachmentsSchema, ChatDeltaEventSchema, ChatErrorEventSchema, ChatEvent, ChatEventSchema, ChatFinalEventSchema, ChatHistoryParamsSchema, ChatInjectParams, ChatInjectParamsSchema, ChatMessageGetParamsSchema, ChatMessageGetResult, ChatMessageGetResultSchema, ChatMetadataParams, ChatMetadataParamsSchema, ChatRunStartupPhase, ChatRunStartupPhaseSchema, ChatSendParamsSchema, ChatSendSessionKeyString, ChatStatusEvent, ChatStatusEventSchema, ChatToolTitlesParams, ChatToolTitlesParamsSchema, ChatToolTitlesResult, ChatToolTitlesResultSchema, CommandEntry, CommandEntrySchema, CommandsListParams, CommandsListParamsSchema, CommandsListResult, CommandsListResultSchema, ConfigApplyParams, ConfigApplyParamsSchema, ConfigGetParams, ConfigGetParamsSchema, ConfigPatchParams, ConfigPatchParamsSchema, ConfigSchemaLookupParams, ConfigSchemaLookupParamsSchema, ConfigSchemaLookupResult, ConfigSchemaLookupResultSchema, ConfigSchemaParams, ConfigSchemaParamsSchema, ConfigSchemaResponse, ConfigSchemaResponseSchema, ConfigSetParams, ConfigSetParamsSchema, ConnectParams, ConnectParamsSchema, ConversationListItem, ConversationListItemSchema, ConversationListParams, ConversationListParamsSchema, ConversationListResult, ConversationListResultSchema, ConversationSendParams, ConversationSendParamsSchema, ConversationSendResult, ConversationSendResultSchema, ConversationTurnCancelParams, ConversationTurnCancelParamsSchema, ConversationTurnCancelResult, ConversationTurnCancelResultSchema, ConversationTurnParams, ConversationTurnParamsSchema, ConversationTurnReply, ConversationTurnReplySchema, ConversationTurnResult, ConversationTurnResultSchema, CronAddParams, CronAddParamsSchema, CronAddResult, CronAddResultSchema, CronDeclarativeAddResult, CronDeclarativeAddResultSchema, CronDeliverySchema, CronGetParams, CronGetParamsSchema, CronJob, CronJobSchema, CronJobStateSchema, CronListParams, CronListParamsSchema, CronPacingSchema, CronRemoveParams, CronRemoveParamsSchema, CronRunLogEntry, CronRunLogEntrySchema, CronRunParams, CronRunParamsSchema, CronRunsParams, CronRunsParamsSchema, CronScratchGetParams, CronScratchGetParamsSchema, CronScratchGetResult, CronScratchGetResultSchema, CronScratchSchema, CronScratchSetParams, CronScratchSetParamsSchema, CronScratchSetResult, CronScratchSetResultSchema, CronStatusParams, CronStatusParamsSchema, CronUpdateParams, CronUpdateParamsSchema, DeniedApprovalSnapshot, DeniedApprovalSnapshotSchema, DevicePairApproveParams, DevicePairApproveParamsSchema, DevicePairListParams, DevicePairListParamsSchema, DevicePairRejectParams, DevicePairRejectParamsSchema, DevicePairRemoveParams, DevicePairRemoveParamsSchema, DevicePairRenameParams, DevicePairRenameParamsSchema, DevicePairRequestedEventSchema, DevicePairResolvedEventSchema, DevicePairSetupCodeParams, DevicePairSetupCodeParamsSchema, DevicePairSetupCodeResult, DevicePairSetupCodeResultSchema, DeviceTokenRevokeParams, DeviceTokenRevokeParamsSchema, DeviceTokenRotateParams, DeviceTokenRotateParamsSchema, EnvironmentStatus, EnvironmentStatusSchema, EnvironmentSummary, EnvironmentSummarySchema, EnvironmentsCreateParams, EnvironmentsCreateParamsSchema, EnvironmentsCreateResult, EnvironmentsCreateResultSchema, EnvironmentsDestroyParams, EnvironmentsDestroyParamsSchema, EnvironmentsDestroyResult, EnvironmentsDestroyResultSchema, EnvironmentsListParams, EnvironmentsListParamsSchema, EnvironmentsListResult, EnvironmentsListResultSchema, EnvironmentsStatusParams, EnvironmentsStatusParamsSchema, EnvironmentsStatusResult, EnvironmentsStatusResultSchema, type ErrorCode, ErrorCodes, ErrorShape, ErrorShapeSchema, EventFrame, EventFrameSchema, ExecApprovalGetParams, ExecApprovalGetParamsSchema, ExecApprovalPresentation, ExecApprovalPresentationSchema, ExecApprovalRequestParams, ExecApprovalRequestParamsSchema, ExecApprovalResolveParams, ExecApprovalResolveParamsSchema, ExecApprovalsGetParams, ExecApprovalsGetParamsSchema, ExecApprovalsNodeGetParams, ExecApprovalsNodeGetParamsSchema, ExecApprovalsNodeSetParams, ExecApprovalsNodeSetParamsSchema, ExecApprovalsNodeSnapshot, ExecApprovalsNodeSnapshotSchema, ExecApprovalsSetParams, ExecApprovalsSetParamsSchema, ExecApprovalsSnapshot, ExecApprovalsSnapshotSchema, ExpiredApprovalSnapshot, ExpiredApprovalSnapshotSchema, FsDirEntry, FsDirEntrySchema, FsListDirParams, FsListDirParamsSchema, FsListDirResult, FsListDirResultSchema, GATEWAY_SERVER_CAPS, GatewayAgentRuntime, GatewayClientIdSchema, GatewayClientModeSchema, GatewayErrorDetailCodes, type GatewayErrorDetails, GatewayErrorDetailsSchema, GatewayFrame, GatewayFrameSchema, GatewaySuspendBlocker, GatewaySuspendBlockerSchema, GatewaySuspendPrepareBusyResultSchema, GatewaySuspendPrepareParams, GatewaySuspendPrepareParamsSchema, GatewaySuspendPrepareReadyResultSchema, GatewaySuspendPrepareResult, GatewaySuspendPrepareResultSchema, GatewaySuspendResumeParams, GatewaySuspendResumeParamsSchema, GatewaySuspendResumeResult, GatewaySuspendResumeResultSchema, GatewaySuspendStatusParams, GatewaySuspendStatusParamsSchema, GatewaySuspendStatusReadyResultSchema, GatewaySuspendStatusResult, GatewaySuspendStatusResultSchema, GatewaySuspendStatusRunningResultSchema, GatewaySuspendTaskBlocker, GatewaySuspendTaskBlockerSchema, HelloOk, HelloOkSchema, InputProvenanceSchema, LogsTailParams, LogsTailParamsSchema, LogsTailResult, LogsTailResultSchema, MAX_MEMORY_MIGRATION_ITEMS, MIN_CLIENT_PROTOCOL_VERSION, MIN_NODE_PROTOCOL_VERSION, MIN_PROBE_PROTOCOL_VERSION, type McpAppViewExpiredErrorDetails, McpAppViewExpiredErrorDetailsSchema, MemoryMigrationItem, MemoryMigrationProviderPlan, MessageActionParams, MessageActionParamsSchema, MigrationProtocolSchemas, MigrationsMemoryApplyParamsSchema, MigrationsMemoryApplyResult, MigrationsMemoryPlanParamsSchema, MigrationsMemoryPlanResult, type MissingScopeErrorDetails, MissingScopeErrorDetailsSchema, ModelChoice, ModelChoiceSchema, ModelsAuthLogoutParams, ModelsAuthLogoutParamsSchema, ModelsAuthStatusParams, ModelsAuthStatusParamsSchema, ModelsListParams, ModelsListParamsSchema, ModelsListResult, ModelsListResultSchema, ModelsProbeParams, ModelsProbeParamsSchema, ModelsProbeResult, ModelsProbeResultSchema, ModelsProbeTargetResult, ModelsProbeTargetResultSchema, NodeDescribeParams, NodeDescribeParamsSchema, NodeEventParams, NodeEventParamsSchema, NodeEventResult, NodeEventResultSchema, NodeInvokeInputEvent, NodeInvokeInputEventSchema, NodeInvokeParams, NodeInvokeParamsSchema, NodeInvokeProgressParams, NodeInvokeProgressParamsSchema, NodeInvokeRequestEventSchema, NodeInvokeResultParams, NodeInvokeResultParamsSchema, NodeListParams, NodeListParamsSchema, NodePairApproveParams, NodePairApproveParamsSchema, NodePairListParams, NodePairListParamsSchema, NodePairRejectParams, NodePairRejectParamsSchema, NodePairRemoveParams, NodePairRemoveParamsSchema, NodePendingAckParams, NodePendingAckParamsSchema, NodePendingDrainParams, NodePendingDrainParamsSchema, NodePendingDrainResult, NodePendingDrainResultSchema, NodePendingEnqueueParams, NodePendingEnqueueParamsSchema, NodePendingEnqueueResult, NodePendingEnqueueResultSchema, NodePluginToolDescriptor, NodePluginToolDescriptorSchema, NodePluginToolsUpdateParams, NodePluginToolsUpdateParamsSchema, NodePresenceActivityPayload, NodePresenceActivityPayloadSchema, NodePresenceAlivePayload, NodePresenceAlivePayloadSchema, NodePresenceAliveReason, NodePresenceAliveReasonSchema, NodeRenameParams, NodeRenameParamsSchema, NodeSkillDescriptor, NodeSkillDescriptorSchema, NodeSkillsUpdateParams, NodeSkillsUpdateParamsSchema, NonEmptyString, PROTOCOL_VERSION, PendingApprovalSnapshot, PendingApprovalSnapshotSchema, PendingSessionApprovalEventSchema, PluginApprovalPresentation, PluginApprovalPresentationSchema, PluginApprovalRequestParams, PluginApprovalRequestParamsSchema, PluginApprovalResolveParams, PluginApprovalResolveParamsSchema, PluginApprovalSeverity, PluginApprovalSeveritySchema, PluginCatalogClawHubInstallSchema, PluginCatalogEntry, PluginCatalogEntrySchema, PluginCatalogInstallActionSchema, PluginCatalogOfficialInstallSchema, PluginControlUiDescriptor, PluginControlUiDescriptorSchema, PluginJsonValueSchema, PluginSearchPackageSchema, PluginSearchResultEntrySchema, PluginsInstallParams, PluginsInstallParamsSchema, PluginsInstallResult, PluginsInstallResultSchema, PluginsListParams, PluginsListParamsSchema, PluginsListResult, PluginsListResultSchema, PluginsRefreshParams, PluginsRefreshParamsSchema, PluginsRefreshResult, PluginsRefreshResultSchema, PluginsSearchParams, PluginsSearchParamsSchema, PluginsSearchResult, PluginsSearchResultSchema, PluginsSessionActionFailureResultSchema, PluginsSessionActionParams, PluginsSessionActionParamsSchema, PluginsSessionActionResult, PluginsSessionActionResultSchema, PluginsSessionActionSuccessResultSchema, PluginsSetEnabledParams, PluginsSetEnabledParamsSchema, PluginsSetEnabledResult, PluginsSetEnabledResultSchema, PluginsUiDescriptorsParams, PluginsUiDescriptorsParamsSchema, PluginsUiDescriptorsResult, PluginsUiDescriptorsResultSchema, PluginsUninstallParams, PluginsUninstallParamsSchema, PluginsUninstallResult, PluginsUninstallResultSchema, PollParams, PollParamsSchema, PresenceEntry, PresenceEntrySchema, ProtocolSchemas, PushTestParams, PushTestParamsSchema, PushTestResult, PushTestResultSchema, Question, QuestionAnswers, QuestionAnswersSchema, QuestionGetParams, QuestionGetParamsSchema, QuestionGetResult, QuestionGetResultSchema, QuestionListParams, QuestionListParamsSchema, QuestionListResult, QuestionListResultSchema, QuestionOption, QuestionOptionSchema, QuestionRecord, QuestionRecordSchema, QuestionRequestParams, QuestionRequestParamsSchema, QuestionRequestQuestion, QuestionRequestQuestionSchema, QuestionRequestResult, QuestionRequestResultSchema, QuestionRequestedEvent, QuestionRequestedEventSchema, QuestionResolveParams, QuestionResolveParamsSchema, QuestionResolveResult, QuestionResolveResultSchema, QuestionResolvedEvent, QuestionResolvedEventSchema, QuestionSchema, QuestionStatus, QuestionStatusSchema, QuestionWaitAnswerParams, QuestionWaitAnswerParamsSchema, QuestionWaitAnswerResult, QuestionWaitAnswerResultSchema, RequestFrame, RequestFrameSchema, ResponseFrame, ResponseFrameSchema, SESSION_OBSERVER_HEALTH_VALUES, SESSION_VIEWER_PRESENCE_MAX_KEYS, SESSION_VISIBILITY_VALUES, SYSTEM_PRESENCE_CLEAR_LAST_INPUT_TAG, SYSTEM_PRESENCE_LEGACY_CLEAR_LAST_INPUT_SECONDS, SecretInputSchema, SecretRefSchema, SecretsReloadParamsSchema, SecretsResolveAssignmentSchema, SecretsResolveParams, SecretsResolveParamsSchema, SecretsResolveResult, SecretsResolveResultSchema, SendParamsSchema, SessionApprovalEvent, SessionApprovalEventSchema, SessionApprovalReplay, SessionApprovalReplaySchema, SessionBranch, SessionBranchSchema, SessionCatalog, SessionCatalogCapabilities, SessionCatalogCapabilitiesSchema, SessionCatalogDescriptor, SessionCatalogDescriptorSchema, SessionCatalogHost, SessionCatalogHostSchema, SessionCatalogLocator, SessionCatalogLocatorSchema, SessionCatalogPullRequestSummary, SessionCatalogPullRequestSummarySchema, SessionCatalogSchema, SessionCatalogSession, SessionCatalogSessionSchema, SessionCatalogTranscriptItem, SessionCatalogTranscriptItemSchema, SessionCompactionCheckpoint, SessionCompactionCheckpointSchema, SessionCompanionExchange, SessionCompanionExchangeSchema, type SessionCreatedActor, SessionCreatedActorSchema, SessionDiffFile, SessionDiffFileSchema, SessionDiffFileStatus, SessionDiffFileStatusSchema, SessionDiscussionInfo, SessionDiscussionInfoParams, SessionDiscussionInfoParamsSchema, SessionDiscussionInfoResult, SessionDiscussionInfoResultSchema, SessionDiscussionInfoSchema, SessionDiscussionOpenParams, SessionDiscussionOpenParamsSchema, SessionDiscussionOpenResult, SessionDiscussionOpenResultSchema, SessionDiscussionState, SessionDiscussionStateSchema, SessionFileBrowserEntry, SessionFileBrowserEntrySchema, SessionFileBrowserResult, SessionFileBrowserResultSchema, SessionFileContentEncoding, SessionFileContentEncodingSchema, SessionFileEntry, SessionFileEntrySchema, SessionFileKind, SessionFileKindSchema, SessionFilePreviewKind, SessionFilePreviewKindSchema, SessionFileRelevance, SessionFileRelevanceSchema, SessionGroup, SessionGroupSchema, SessionLabelString, SessionMember, SessionMemberAddParams, SessionMemberAddParamsSchema, SessionMemberMutationResult, SessionMemberMutationResultSchema, SessionMemberRemoveParams, SessionMemberRemoveParamsSchema, SessionMemberSchema, SessionMembersListParams, SessionMembersListParamsSchema, SessionMembersListResult, SessionMembersListResultSchema, SessionObserverDigest, SessionObserverDigestSchema, SessionObserverHealth, SessionObserverHealthSchema, SessionObserverPlanProgress, SessionObserverPlanProgressSchema, SessionOperationEvent, SessionOperationEventSchema, SessionPlacement, SessionPlacementProtocolSchemas, SessionPlacementSchema, type SessionPlacementState, SessionPlacementStateSchema, type SessionRow, SessionRowSchema, SessionSharingAction, SessionSharingActionSchema, SessionSharingEvent, SessionSharingEventSchema, SessionSharingIdentity, SessionSharingIdentitySchema, type SessionSharingRole, SessionSharingRoleSchema, SessionSuggestion, SessionSuggestionAction, SessionSuggestionActionSchema, SessionSuggestionEvent, SessionSuggestionEventSchema, SessionSuggestionResolution, SessionSuggestionResolutionSchema, SessionSuggestionSchema, SessionSuggestionState, SessionSuggestionStateSchema, SessionSuggestionsAddParams, SessionSuggestionsAddParamsSchema, SessionSuggestionsAddResult, SessionSuggestionsAddResultSchema, SessionSuggestionsListParams, SessionSuggestionsListParamsSchema, SessionSuggestionsListResult, SessionSuggestionsListResultSchema, SessionSuggestionsResolveParams, SessionSuggestionsResolveParamsSchema, SessionSuggestionsResolveResult, SessionSuggestionsResolveResultSchema, type SessionToolOverrides, SessionToolOverridesSchema, SessionTypingEvent, SessionTypingEventSchema, SessionTypingParams, SessionTypingParamsSchema, SessionTypingResult, SessionTypingResultSchema, type SessionVisibility, SessionVisibilitySchema, SessionVisibilitySetParams, SessionVisibilitySetParamsSchema, SessionVisibilitySetResult, SessionVisibilitySetResultSchema, SessionWorktreeInfo, SessionWorktreeInfoSchema, SessionsAbortParams, SessionsAbortParamsSchema, SessionsBranchesListParams, SessionsBranchesListParamsSchema, SessionsBranchesListResult, SessionsBranchesListResultSchema, SessionsBranchesSwitchParams, SessionsBranchesSwitchParamsSchema, SessionsBranchesSwitchResult, SessionsBranchesSwitchResultSchema, SessionsCatalogArchiveParams, SessionsCatalogArchiveParamsSchema, SessionsCatalogArchiveResult, SessionsCatalogArchiveResultSchema, SessionsCatalogContinueParams, SessionsCatalogContinueParamsSchema, SessionsCatalogContinueResult, SessionsCatalogContinueResultSchema, SessionsCatalogHostEvent, SessionsCatalogHostEventSchema, SessionsCatalogListParams, SessionsCatalogListParamsSchema, SessionsCatalogListResult, SessionsCatalogListResultSchema, SessionsCatalogReadParams, SessionsCatalogReadParamsSchema, SessionsCatalogReadResult, SessionsCatalogReadResultSchema, SessionsCleanupParams, SessionsCleanupParamsSchema, SessionsCompactParams, SessionsCompactParamsSchema, SessionsCompactionBranchParams, SessionsCompactionBranchParamsSchema, SessionsCompactionBranchResult, SessionsCompactionBranchResultSchema, SessionsCompactionGetParams, SessionsCompactionGetParamsSchema, SessionsCompactionGetResult, SessionsCompactionGetResultSchema, SessionsCompactionListParams, SessionsCompactionListParamsSchema, SessionsCompactionListResult, SessionsCompactionListResultSchema, SessionsCompactionRestoreParams, SessionsCompactionRestoreParamsSchema, SessionsCompactionRestoreResult, SessionsCompactionRestoreResultSchema, SessionsCompanionAskParams, SessionsCompanionAskParamsSchema, SessionsCompanionAskResult, SessionsCompanionAskResultSchema, SessionsCompanionResetParams, SessionsCompanionResetParamsSchema, SessionsCompanionResetResult, SessionsCompanionResetResultSchema, SessionsCompanionStateParams, SessionsCompanionStateParamsSchema, SessionsCompanionStateResult, SessionsCompanionStateResultSchema, SessionsCreateParams, SessionsCreateParamsSchema, SessionsCreateResult, SessionsCreateResultSchema, SessionsDeleteParams, SessionsDeleteParamsSchema, SessionsDescribeParams, SessionsDescribeParamsSchema, SessionsDiffParams, SessionsDiffParamsSchema, SessionsDiffResult, SessionsDiffResultSchema, SessionsDispatchParams, SessionsDispatchParamsSchema, SessionsDispatchResult, SessionsDispatchResultSchema, SessionsFilesGetParams, SessionsFilesGetParamsSchema, SessionsFilesGetResult, SessionsFilesGetResultSchema, SessionsFilesListParams, SessionsFilesListParamsSchema, SessionsFilesListResult, SessionsFilesListResultSchema, SessionsFilesRevealParams, SessionsFilesRevealParamsSchema, SessionsFilesRevealResult, SessionsFilesRevealResultSchema, SessionsFilesSetParams, SessionsFilesSetParamsSchema, SessionsFilesSetResult, SessionsFilesSetResultSchema, SessionsForkParams, SessionsForkParamsSchema, SessionsForkResult, SessionsForkResultSchema, SessionsGroupsDeleteParams, SessionsGroupsDeleteParamsSchema, SessionsGroupsListParams, SessionsGroupsListParamsSchema, SessionsGroupsListResult, SessionsGroupsListResultSchema, SessionsGroupsMutationResult, SessionsGroupsMutationResultSchema, SessionsGroupsPutParams, SessionsGroupsPutParamsSchema, SessionsGroupsRenameParams, SessionsGroupsRenameParamsSchema, SessionsListParams, SessionsListParamsSchema, SessionsMessagesSubscribeParams, SessionsMessagesSubscribeParamsSchema, SessionsMessagesUnsubscribeParams, SessionsMessagesUnsubscribeParamsSchema, SessionsObserverVisibilityParams, SessionsObserverVisibilityParamsSchema, SessionsObserverVisibilityResult, SessionsObserverVisibilityResultSchema, SessionsPatchParams, SessionsPatchParamsSchema, SessionsPluginPatchParams, SessionsPluginPatchParamsSchema, SessionsPluginPatchResult, SessionsPluginPatchResultSchema, SessionsPreviewParams, SessionsPreviewParamsSchema, SessionsReclaimParams, SessionsReclaimParamsSchema, SessionsReclaimResult, SessionsReclaimResultSchema, SessionsResetParams, SessionsResetParamsSchema, SessionsResolveParams, SessionsResolveParamsSchema, SessionsRewindParams, SessionsRewindParamsSchema, SessionsRewindResult, SessionsRewindResultSchema, SessionsSearchHit, SessionsSearchHitSchema, SessionsSearchParams, SessionsSearchParamsSchema, SessionsSearchResult, SessionsSearchResultSchema, SessionsSendParams, SessionsSendParamsSchema, SessionsUsageParams, SessionsUsageParamsSchema, SessionsViewerPresenceSetParams, SessionsViewerPresenceSetParamsSchema, SessionsViewerPresenceSetResult, SessionsViewerPresenceSetResultSchema, ShutdownEvent, ShutdownEventSchema, SkillProposalEvaluation, SkillProposalEvaluationSchema, SkillProposalLifecycleEvent, SkillProposalLifecycleEventSchema, SkillsBinsParams, SkillsBinsParamsSchema, SkillsBinsResult, SkillsBinsResultSchema, SkillsCuratorActionParams, SkillsCuratorActionParamsSchema, SkillsCuratorActionResult, SkillsCuratorActionResultSchema, SkillsCuratorStatusParams, SkillsCuratorStatusParamsSchema, SkillsCuratorStatusResult, SkillsCuratorStatusResultSchema, SkillsDetailParams, SkillsDetailParamsSchema, SkillsDetailResult, SkillsDetailResultSchema, SkillsInstallParams, SkillsInstallParamsSchema, SkillsProposalActionParams, SkillsProposalActionParamsSchema, SkillsProposalApplyResult, SkillsProposalApplyResultSchema, SkillsProposalCreateParams, SkillsProposalCreateParamsSchema, SkillsProposalEvaluateParams, SkillsProposalEvaluateParamsSchema, SkillsProposalEvaluateResult, SkillsProposalEvaluateResultSchema, SkillsProposalEventsListParams, SkillsProposalEventsListParamsSchema, SkillsProposalEventsListResult, SkillsProposalEventsListResultSchema, SkillsProposalHistoryScanParams, SkillsProposalHistoryScanParamsSchema, SkillsProposalHistoryScanResult, SkillsProposalHistoryScanResultSchema, SkillsProposalHistoryStatusParams, SkillsProposalHistoryStatusParamsSchema, SkillsProposalInspectParams, SkillsProposalInspectParamsSchema, SkillsProposalInspectResult, SkillsProposalInspectResultSchema, SkillsProposalRecordResult, SkillsProposalRecordResultSchema, SkillsProposalRequestRevisionParams, SkillsProposalRequestRevisionParamsSchema, SkillsProposalRequestRevisionResult, SkillsProposalRequestRevisionResultSchema, SkillsProposalReviseParams, SkillsProposalReviseParamsSchema, SkillsProposalUpdateParams, SkillsProposalUpdateParamsSchema, SkillsProposalsListParams, SkillsProposalsListParamsSchema, SkillsProposalsListResult, SkillsProposalsListResultSchema, SkillsSearchParams, SkillsSearchParamsSchema, SkillsSearchResult, SkillsSearchResultSchema, SkillsSecurityVerdictsParams, SkillsSecurityVerdictsParamsSchema, SkillsSecurityVerdictsResult, SkillsSecurityVerdictsResultSchema, SkillsSkillCardParams, SkillsSkillCardParamsSchema, SkillsSkillCardResult, SkillsSkillCardResultSchema, SkillsStatusParams, SkillsStatusParamsSchema, SkillsUpdateParams, SkillsUpdateParamsSchema, SkillsUploadBeginParams, SkillsUploadBeginParamsSchema, SkillsUploadChunkParams, SkillsUploadChunkParamsSchema, SkillsUploadCommitParams, SkillsUploadCommitParamsSchema, Snapshot, SnapshotSchema, StateVersion, StateVersionSchema, SystemAgentApprovalPresentation, SystemAgentApprovalPresentationSchema, SystemAgentChatHistoryParams, SystemAgentChatHistoryParamsSchema, SystemAgentChatHistoryResult, SystemAgentChatHistoryResultSchema, SystemAgentChatHistoryTurn, SystemAgentChatHistoryTurnSchema, SystemAgentChatParams, SystemAgentChatParamsSchema, SystemAgentChatQuestion, SystemAgentChatQuestionSchema, SystemAgentChatResult, SystemAgentChatResultSchema, SystemAgentSetupActivateParams, SystemAgentSetupActivateParamsSchema, SystemAgentSetupActivateResult, SystemAgentSetupActivateResultSchema, SystemAgentSetupAuthStartParams, SystemAgentSetupAuthStartParamsSchema, SystemAgentSetupAuthStartResult, SystemAgentSetupAuthStartResultSchema, SystemAgentSetupDetectParams, SystemAgentSetupDetectParamsSchema, SystemAgentSetupDetectResult, SystemAgentSetupDetectResultSchema, SystemAgentSetupVerifyParams, SystemAgentSetupVerifyParamsSchema, SystemAgentSetupVerifyResult, SystemAgentSetupVerifyResultSchema, SystemChangeEntry, SystemChangeEntrySchema, SystemChangeKind, SystemChangeKindSchema, SystemChangeSource, SystemChangeSourceSchema, SystemChangesListParams, SystemChangesListParamsSchema, SystemChangesListResult, SystemChangesListResultSchema, SystemInfoParams, SystemInfoParamsSchema, SystemInfoResult, SystemInfoResultSchema, TalkAgentControlResult, TalkAgentControlResultSchema, TalkCatalogParams, TalkCatalogParamsSchema, TalkCatalogResult, TalkCatalogResultSchema, TalkClientCloseParams, TalkClientCloseParamsSchema, TalkClientCreateParams, TalkClientCreateParamsSchema, TalkClientCreateResult, TalkClientCreateResultSchema, TalkClientMutationResult, TalkClientMutationResultSchema, TalkClientSteerParams, TalkClientSteerParamsSchema, TalkClientToolCallParams, TalkClientToolCallParamsSchema, TalkClientToolCallResult, TalkClientToolCallResultSchema, TalkClientTranscriptParams, TalkClientTranscriptParamsSchema, TalkConfigParams, TalkConfigParamsSchema, TalkConfigResult, TalkConfigResultSchema, TalkEvent, TalkEventSchema, TalkModeParams, TalkModeParamsSchema, TalkSessionAcknowledgeMarkParams, TalkSessionAcknowledgeMarkParamsSchema, TalkSessionAppendAudioParams, TalkSessionAppendAudioParamsSchema, TalkSessionCancelOutputParams, TalkSessionCancelOutputParamsSchema, TalkSessionCancelTurnParams, TalkSessionCancelTurnParamsSchema, TalkSessionCloseParams, TalkSessionCloseParamsSchema, TalkSessionCreateParams, TalkSessionCreateParamsSchema, TalkSessionCreateResult, TalkSessionCreateResultSchema, TalkSessionJoinParams, TalkSessionJoinParamsSchema, TalkSessionJoinResult, TalkSessionJoinResultSchema, TalkSessionOkResult, TalkSessionOkResultSchema, TalkSessionSteerParams, TalkSessionSteerParamsSchema, TalkSessionSubmitToolResultParams, TalkSessionSubmitToolResultParamsSchema, TalkSessionTurnParams, TalkSessionTurnParamsSchema, TalkSessionTurnResult, TalkSessionTurnResultSchema, TalkSpeakParams, TalkSpeakParamsSchema, TalkSpeakResult, TalkSpeakResultSchema, TaskSuggestion, TaskSuggestionEvent, TaskSuggestionEventSchema, TaskSuggestionResolution, TaskSuggestionResolutionSchema, TaskSuggestionSchema, TaskSuggestionsAcceptParams, TaskSuggestionsAcceptParamsSchema, TaskSuggestionsAcceptResult, TaskSuggestionsAcceptResultSchema, TaskSuggestionsCreateParams, TaskSuggestionsCreateParamsSchema, TaskSuggestionsCreateResult, TaskSuggestionsCreateResultSchema, TaskSuggestionsDismissParams, TaskSuggestionsDismissParamsSchema, TaskSuggestionsDismissResult, TaskSuggestionsDismissResultSchema, TaskSuggestionsListParams, TaskSuggestionsListParamsSchema, TaskSuggestionsListResult, TaskSuggestionsListResultSchema, TaskSummary, TaskSummarySchema, TasksCancelParams, TasksCancelParamsSchema, TasksCancelResult, TasksCancelResultSchema, TasksGetParams, TasksGetParamsSchema, TasksGetResult, TasksGetResultSchema, TasksListParams, TasksListParamsSchema, TasksListResult, TasksListResultSchema, TerminalAckResult, TerminalAckResultSchema, TerminalApprovalSnapshot, TerminalApprovalSnapshotSchema, TerminalAttachParams, TerminalAttachParamsSchema, TerminalAttachResult, TerminalAttachResultSchema, TerminalCloseParams, TerminalCloseParamsSchema, TerminalDataEvent, TerminalDataEventSchema, TerminalEvent, TerminalEventSchema, TerminalExitEvent, TerminalExitEventSchema, TerminalInputParams, TerminalInputParamsSchema, TerminalListResult, TerminalListResultSchema, TerminalOpenParams, TerminalOpenParamsSchema, TerminalOpenResult, TerminalOpenResultSchema, TerminalResizeParams, TerminalResizeParamsSchema, TerminalSessionApprovalEventSchema, TerminalSessionInfo, TerminalSessionInfoSchema, TerminalTextParams, TerminalTextParamsSchema, TerminalTextResult, TerminalTextResultSchema, TerminalUploadParams, TerminalUploadParamsSchema, TerminalUploadResult, TerminalUploadResultSchema, TickEvent, TickEventSchema, ToolCatalogEntry, ToolCatalogEntrySchema, ToolCatalogGroup, ToolCatalogGroupSchema, ToolCatalogProfile, ToolCatalogProfileSchema, ToolsCatalogParams, ToolsCatalogParamsSchema, ToolsCatalogResult, ToolsCatalogResultSchema, ToolsEffectiveEntry, ToolsEffectiveEntrySchema, ToolsEffectiveGroup, ToolsEffectiveGroupSchema, ToolsEffectiveNotice, ToolsEffectiveNoticeSchema, ToolsEffectiveParams, ToolsEffectiveParamsSchema, ToolsEffectiveResult, ToolsEffectiveResultSchema, ToolsInvokeErrorSchema, ToolsInvokeParams, ToolsInvokeParamsSchema, ToolsInvokeResult, ToolsInvokeResultSchema, TtsSpeakParams, TtsSpeakParamsSchema, TtsSpeakResult, TtsSpeakResultSchema, UiClosePaneCommandSchema, UiCommand, UiCommandParams, UiCommandParamsSchema, UiCommandResult, UiCommandResultSchema, UiCommandSchema, UiFocusCommandSchema, UiNavigateCommandSchema, UiPanelCommandSchema, UiSidebarCommandSchema, UiSplitCommandSchema, type UnknownAgentIdErrorDetails, UnknownAgentIdErrorDetailsSchema, UpdateRunParams, UpdateRunParamsSchema, UpdateStatusParams, UpdateStatusParamsSchema, UserProfile, UserProfileAvatarMimeSchema, UserProfileSchema, UsersLinkEmailParams, UsersLinkEmailParamsSchema, UsersLinkEmailResult, UsersLinkEmailResultSchema, UsersListParams, UsersListParamsSchema, UsersListResult, UsersListResultSchema, UsersSelfParams, UsersSelfParamsSchema, UsersSelfResult, UsersSelfResultSchema, UsersSetAvatarParams, UsersSetAvatarParamsSchema, UsersSetAvatarResult, UsersSetAvatarResultSchema, UsersSetDisplayNameParams, UsersSetDisplayNameParamsSchema, UsersSetDisplayNameResult, UsersSetDisplayNameResultSchema, WORKER_HEARTBEAT_INTERVAL_MS, WORKER_INFERENCE_MAX_CONTEXT_MESSAGES, WORKER_INFERENCE_MAX_OUTPUT_TOKENS, WORKER_INFERENCE_METHODS, WORKER_INFERENCE_PROTOCOL_FEATURE, WORKER_LAUNCH_V2_PROTOCOL_FEATURE, WORKER_LIVE_EVENT_PROTOCOL_FEATURE, WORKER_PROTOCOL_FEATURES, WORKER_PROTOCOL_MAX_FEATURES, WORKER_PROTOCOL_MAX_FEATURE_LENGTH, WORKER_PROTOCOL_MAX_FRAME_ID_LENGTH, WORKER_PROTOCOL_MAX_IDENTIFIER_LENGTH, WORKER_PROTOCOL_MAX_INFERENCE_PAYLOAD_BYTES, WORKER_PROTOCOL_MAX_METHOD_LENGTH, WORKER_PROTOCOL_MAX_PAYLOAD_BYTES, WORKER_PROTOCOL_METHODS, WORKER_RPC_SET_VERSION, WORKER_TRANSCRIPT_COMMIT_PROTOCOL_FEATURE, WORKER_TRANSCRIPT_MAX_BATCH_MESSAGES, WORKER_TRANSCRIPT_MAX_CONTENT_PARTS, WORKER_TRANSCRIPT_MAX_JSON_DEPTH, WakeParams, WakeParamsSchema, WebLoginStartParams, WebLoginStartParamsSchema, WebLoginWaitParams, WebLoginWaitParamsSchema, WebPushSubscribeParams, WebPushSubscribeParamsSchema, WebPushTestParams, WebPushTestParamsSchema, WebPushUnsubscribeParams, WebPushUnsubscribeParamsSchema, WebPushVapidPublicKeyParams, WebPushVapidPublicKeyParamsSchema, WizardCancelParams, WizardCancelParamsSchema, WizardNextParams, WizardNextParamsSchema, WizardNextResult, WizardNextResultSchema, type WizardNotFoundErrorDetails, WizardNotFoundErrorDetailsSchema, WizardStartParams, WizardStartParamsSchema, WizardStartResult, WizardStartResultSchema, WizardStatusParams, WizardStatusParamsSchema, WizardStatusResult, WizardStatusResultSchema, WizardStep, WizardStepSchema, WorkerAdmissionFailureReason, WorkerAdmissionFailureReasonSchema, WorkerAdmissionHandshake, WorkerAdmissionHandshakeSchema, WorkerAdmissionResponseFrame, WorkerAdmissionResponseFrameSchema, WorkerConnectParams, WorkerConnectRequestFrame, WorkerConnectRequestFrameSchema, WorkerEnvironmentMetadata, WorkerEnvironmentMetadataSchema, WorkerEnvironmentState, WorkerEnvironmentStateSchema, WorkerErrorShape, WorkerHeartbeatParams, WorkerHeartbeatParamsSchema, WorkerHeartbeatRequestFrame, WorkerHeartbeatRequestFrameSchema, WorkerHeartbeatResponseFrame, WorkerHeartbeatResponseFrameSchema, WorkerHeartbeatResult, WorkerHelloOk, WorkerInferenceCancelParams, WorkerInferenceCancelRequestFrame, WorkerInferenceCancelRequestFrameSchema, WorkerInferenceCancelResponseFrame, WorkerInferenceCancelResponseFrameSchema, WorkerInferenceCancelResult, WorkerInferenceContext, WorkerInferenceErrorReason, WorkerInferenceErrorShape, WorkerInferenceEventFrame, WorkerInferenceEventParams, WorkerInferenceModelRef, WorkerInferenceModelRefSchema, WorkerInferenceOptions, WorkerInferenceOptionsSchema, WorkerInferenceStartParams, WorkerInferenceStartRequestFrame, WorkerInferenceStartRequestFrameSchema, WorkerInferenceStartResponseFrame, WorkerInferenceStartResponseFrameSchema, WorkerInferenceStartResult, WorkerInferenceTerminalFrame, WorkerInferenceTerminalOutcome, WorkerInferenceTerminalParams, WorkerLiveEvent, WorkerLiveEventErrorDetails, WorkerLiveEventErrorDetailsSchema, WorkerLiveEventErrorShape, WorkerLiveEventErrorShapeSchema, WorkerLiveEventParams, WorkerLiveEventParamsSchema, WorkerLiveEventRequestFrame, WorkerLiveEventRequestFrameSchema, WorkerLiveEventResponseFrame, WorkerLiveEventResponseFrameSchema, WorkerLiveEventResult, WorkerLiveEventResultSchema, WorkerLiveEventSchema, WorkerProtocolCloseReason, WorkerProtocolCloseReasonSchema, WorkerTranscriptCommitErrorReason, WorkerTranscriptCommitErrorReasonSchema, WorkerTranscriptCommitErrorShape, WorkerTranscriptCommitErrorShapeSchema, WorkerTranscriptCommitParams, WorkerTranscriptCommitParamsSchema, WorkerTranscriptCommitRequestFrame, WorkerTranscriptCommitRequestFrameSchema, WorkerTranscriptCommitResponseFrame, WorkerTranscriptCommitResponseFrameSchema, WorkerTranscriptCommitResult, WorkerTranscriptCommitResultSchema, WorkerTranscriptMessage, WorkerTranscriptMessageSchema, WorkerTunnelStatus, WorkerTunnelStatusSchema, WorktreeBranch, WorktreeBranchSchema, WorktreeRecord, WorktreeRecordSchema, WorktreeRepositoryStatus, WorktreeRepositoryStatusSchema, WorktreesBranchesParams, WorktreesBranchesParamsSchema, WorktreesBranchesResult, WorktreesBranchesResultSchema, WorktreesCreateParams, WorktreesCreateParamsSchema, WorktreesGcParams, WorktreesGcParamsSchema, WorktreesGcResult, WorktreesGcResultSchema, WorktreesListParams, WorktreesListParamsSchema, WorktreesListResult, WorktreesListResultSchema, WorktreesRemoveParams, WorktreesRemoveParamsSchema, WorktreesRemoveResult, WorktreesRemoveResultSchema, WorktreesRestoreParams, WorktreesRestoreParamsSchema, buildMissingScopeErrorDetails, errorShape, isCloudWorkerPlacementState, isMcpAppViewExpiredError, isWellFormedApprovalId, missingScopeErrorShape, readMissingScopeError, readMissingScopeErrorDetails, validateSkillsProposalHistoryScanParams, validateSkillsProposalHistoryStatusParams, validateSystemEventParams, validateWorkerInferenceCancelParams, validateWorkerInferenceEventFrame, validateWorkerInferenceStartParams, validateWorkerInferenceTerminalFrame, validateWorkerInferenceTerminalOutcome };